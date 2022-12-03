from django.db import models
from django.contrib.auth.models import User


class LearningSpace(models.Model):
    name = models.CharField(max_length=30)
    members = models.ManyToManyField(User, related_name='members')

    # TODO: add contributors field
    # I think contributors shouldn't be a field in the model, but rather a method
    # because contributers can be found by owners of content_list elements
    # def contributors(self):
    #     return self.content_list.all().values_list('owner', flat=True)
        

    # implicitly existing fields:
    # content_list

    # TODO: add chat
    # chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='chat')



class Content(models.Model):
    name = models.CharField(max_length=30)
    text = models.TextField()
    url = models.TextField()

    # type can be either text, video, image, discussion, or meeting
    type = models.CharField(max_length=30)

    # TODO: how does image uploading works? (it is not saved in the database)
    # image = models.ImageField(upload_to='images/')
    

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    learningSpace = models.ForeignKey(LearningSpace, on_delete=models.CASCADE)

    upVoteCount = models.IntegerField(default=0)
    
    # TODO: add chat
    # chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='chat')



class Discussion(models.Model):
    content = models.ForeignKey(Content,on_delete=models.CASCADE, related_name='discussions')
    #name = models.CharField(max_length=30)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']

  #  def __str__(self):
   #     return 'Comment {} by {}'.format(self.body, self.owner.username)
class Profile(models.Model):
    about_me = models.CharField(max_length=30)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    learningspaces = models.ManyToManyField(LearningSpace, related_name='learningspaces',blank=True)
    # image = models.ImageField(upload_to='images/')

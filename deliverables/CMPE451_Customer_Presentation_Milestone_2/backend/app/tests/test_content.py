from unittest.mock import Mock
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class ContentTest(APITestCase):
    def setUp(self):
        url = reverse('register')
        data = {
            "username": "mustafa.atay",
            "email": "mustafa.atay@boun.edu.tr",
            "password": "mustafa1234"
        }
        response = self.client.post(url, data, format='json')

        self.token = response.data.get('token')

        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token)

    def test_create_content(self):
        # create learning space first
        url = reverse('learning-space')
        data = {
            "name": 'Guitar',
            "tag": "music",
        }
        response = self.client.post(url, data, format='json')
        learning_space_id = response.data['id']

        # create content
        url = reverse('content')
        data = {
            "learningSpace": learning_space_id,
            "name": "Content About Guitar",
            "text": "this is a testing content",
            "type": "text",
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], 'Content About Guitar')
        self.assertEqual(response.data['text'], 'this is a testing content')
        self.assertEqual(response.data['url'], '')
        self.assertEqual(response.data['type'], 'text')

    def test_get_content(self):
        # create learning space first
        url = reverse('learning-space')
        data = {
            "name": 'Guitar',
            "tag": "music",
        }
        response = self.client.post(url, data, format='json')
        learning_space_id = response.data['id']

        # create content
        url = reverse('content')
        data = {
            "learningSpace": learning_space_id,
            "name": "Content About Guitar",
            "text": "this is a testing content",
            "type": "text",
        }
        response = self.client.post(url, data, format='json')
        content_id = response.data['id']

        # get content
        url = reverse('content')
        response = self.client.get(url, {'id': content_id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Content About Guitar')
        self.assertEqual(response.data['text'], 'this is a testing content')
        self.assertEqual(response.data['type'], 'text')
        self.assertEqual(response.data['url'], '')

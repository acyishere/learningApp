package com.example.myapplication.service

import com.example.myapplication.model.learningSpace2Leave_response_model
import com.example.myapplication.model.learningSpace2ListEveryLearningSpace_data_model
import com.example.myapplication.model.learningspace2Enroll_receive_model
import com.example.myapplication.model.learningspace2Enroll_send_model
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.FormUrlEncoded
import retrofit2.http.Header
import retrofit2.http.POST

interface learningSpace2Leave_api {
    @POST("leave-learning-space/")
    fun leaveUser(@Header("Authorization")Token:String, @Body learning_space_id: learningspace2Enroll_send_model): Call<learningSpace2Leave_response_model>
}
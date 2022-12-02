package com.example.myapplication.model

import com.google.gson.annotations.SerializedName

data class sign_up_send_model(
    @SerializedName("username")
    val username:String,
    @SerializedName("email")
    val email:String,
    @SerializedName("password")
    val password:String
    )
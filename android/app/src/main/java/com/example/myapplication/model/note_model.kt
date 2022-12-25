package com.example.myapplication.model

import com.google.gson.annotations.SerializedName

data class note_model(
    @SerializedName("id")
    val id:Int,
    @SerializedName("content")
    val content:Int,
    @SerializedName("owner")
    val owner:Int,
    @SerializedName("body")
    val body:String,
    @SerializedName("created_on")
    val created_on:String
)

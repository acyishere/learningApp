package com.example.myapplication.model

import com.google.gson.annotations.SerializedName

data class learningSpace2AddContent_receive_model(
    @SerializedName("id")
    val id:Int,
    @SerializedName("name")
    val name:String,
    @SerializedName("type")
    val type:String,
    @SerializedName("text")
    val text:String,
    @SerializedName("owner")
    val owner:String,
    @SerializedName("learningSpace")
    val learningSpace:String,
    @SerializedName("upVoteCount")
    val upVoteCount:String
)

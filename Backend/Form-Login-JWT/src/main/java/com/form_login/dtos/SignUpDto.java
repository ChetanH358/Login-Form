package com.form_login.dtos;

public record SignUpDto (String firstName, String lastName, String login, char[] password) { }
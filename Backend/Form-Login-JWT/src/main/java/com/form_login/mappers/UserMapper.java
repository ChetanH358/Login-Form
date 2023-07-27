package com.form_login.mappers;

import com.form_login.dtos.SignUpDto;
import com.form_login.dtos.UserDto;
import com.form_login.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}

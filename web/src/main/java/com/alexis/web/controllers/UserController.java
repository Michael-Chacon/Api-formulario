package com.alexis.web.controllers;

import com.alexis.web.models.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    List<User> users = new ArrayList<>();

    @PostMapping("/post")
    public List<User> post(@RequestBody User user){
        users.add(user);
        users.forEach(user1 -> System.out.println(user1.getName()));
        return users;
    }
}

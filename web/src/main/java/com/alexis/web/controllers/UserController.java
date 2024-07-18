package com.alexis.web.controllers;

import com.alexis.web.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    List<User> users = new ArrayList<>();

    @GetMapping("/showUsers")
    public List<User> showUsers(){
        return users;
    }

    @PostMapping("/post")
    public List<User> post(@RequestBody User user){
        users.add(user);
        return users;
    }
}

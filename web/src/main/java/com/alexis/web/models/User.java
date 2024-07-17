package com.alexis.web.models;

public class User {
    private String name;
    private String lastname;
    private String gmail;

    public User() {
    }

    public User(String name, String lastname, String gmail) {
        this.name = name;
        this.lastname = lastname;
        this.gmail = gmail;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }
}

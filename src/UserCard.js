import {Card,CardContent, Typography } from "@mui/material";
import React from "react";

function UserCard({ user }) {
    
  return (
    <div
      style={{
        backgroundColor:"green",
        borderRadius: 30,
        padding: 10,
      }}
    >
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        id : {user.id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        name : {user.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        username : {user.username}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        email : {user.email}
        </Typography>
        
       
      </CardContent>
      
    </Card>
      
      
    </div>
  );
}

export default UserCard;

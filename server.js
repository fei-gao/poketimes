const express = require('express');

const app = express();

app.get('/api/posts', (req, res) => {
  const posts = [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    }
  ];
  res.json(posts)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
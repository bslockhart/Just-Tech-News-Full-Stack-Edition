const { Post } = require('../models');

const postData = [
  {
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
        username: 'test_user'
    }
  },
  {
  post_url: 'https://www.valormineralmanagement.com/',
  title: 'Valor Mineral Management',
  created_at: new Date(),
  vote_count: 12,
  comments: [{}, {}],
  user: {
      username: 'test_user'
  }
},
{
    post_url: 'https://www.clearforkroyaty.com/',
    title: 'Clear Fork Royalty',
    created_at: new Date(),
    vote_count: 18,
    comments: [{}, {}],
    user: {
        username: 'test_user'
    }
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
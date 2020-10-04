var express = require('express');
var router = express.Router();
const NewsApI = require("newsapi");
const newsapi = new NewsApI('f130403b841940de9ad0cceab776a203');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show_news', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    var articles = response.articles;
    res.json(articles);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/general', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'general'
  }).then(response => {
    var general = response.articles;
    res.json(general);
  }).catch(error => {
    console.log(error)
  })
});


router.get('/business', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'business'
  }).then(response => {
    var business = response.articles;
    res.json(business);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/entertainment', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'entertainment'
  }).then(response => {
    var entertainment = response.articles;
    res.json(entertainment);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/health', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'health'
  }).then(response => {
    var health = response.articles;
    res.json(health);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/sports', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'sports'
  }).then(response => {
    var sports = response.articles;
    res.json(sports);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/science', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'science'
  }).then(response => {
    var science = response.articles;
    res.json(science);
  }).catch(error => {
    console.log(error)
  })
});

router.get('/technology', function (req, res, next) {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: 'technology'
  }).then(response => {
    var technology = response.articles;
    res.json(technology);
  }).catch(error => {
    console.log(error)
  })
});

module.exports = router;

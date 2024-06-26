const express = require('express');
const NodeCache = require('node-cache');

const app = express();
const cache = new NodeCache({  });
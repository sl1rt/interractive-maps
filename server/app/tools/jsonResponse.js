module.exports = (req, res) => {
  res.sendJSON = (data) => {
    res.writeHeader(200, {
      'Content-type': 'application/json', 
    });
    res.end(JSON.stringify(data));
  }
}
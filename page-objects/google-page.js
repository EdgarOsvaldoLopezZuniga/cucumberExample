class GooglePage {
  searchBox() {
    return $('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
  }
  firstLink(){
    return $('#rso > div:nth-child(1) > div > div > div.r > a > h3');
  }
}

module.exports = new GooglePage();

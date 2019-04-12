/* Index.js start */
require('../scss/main.scss');

$(document).ready(function() {
    // using an array to store some color themes.  there is probably a better way to do this.
    var colorBank = new Array()
    
    // https://kuler.adobe.com/Seattle-color-theme-3044702/
    colorBank[0] = '#72655F';
    colorBank[1] = '#F4876B';
    colorBank[2] = '#F1EAD7';
    colorBank[3] = '#F1B2A1';
    colorBank[4] = '#A0D8B5';
    // https://kuler.adobe.com/VERSUZ-2013---def-color-theme-3069671/
    colorBank[5] = '#3D3D3D';
    colorBank[6] = '#ED193A';
    colorBank[7] = '#E6E6E6';
    colorBank[8] = '#01C0EB';
    colorBank[9] = '#66EF55';
    // https://kuler.adobe.com/Copy-of-Copy-of-vintage-card-color-theme-3107075/
    colorBank[10] = '#5C4B51';
    colorBank[11] = '#8CBEB2';
    colorBank[12] = '#F2EBBF';
    colorBank[13] = '#A5C88F';
    colorBank[14] = '#EF847B';
    // https://kuler.adobe.com/Happy-Hipster-color-theme-3096435/
    colorBank[15] = '#555555';
    colorBank[16] = '#7BB38E';
    colorBank[17] = '#F4F1D7';
    colorBank[18] = '#F8AB65';
    colorBank[19] = '#F15C4C';
    //https://kuler.adobe.com/blue-delight-color-theme-3075035/
    colorBank[20] = '#004158';
    colorBank[21] = '#026675';
    colorBank[22] = '#038B8B';
    colorBank[23] = '#F1EEC9';
    colorBank[24] = '#F09979';
    //https://kuler.adobe.com/grulla-color-theme-3097821/
    colorBank[25] = '#44392E';
    colorBank[26] = '#DDD0C2';
    colorBank[27] = '#908170';
    colorBank[28] = '#708790';
    colorBank[29] = '#273B44';
    //https://kuler.adobe.com/DAB_CI_4-color-theme-3098024/
    colorBank[30] = '#288DF6';
    colorBank[31] = '#23D36D';
    colorBank[32] = '#D2EA32';
    colorBank[33] = '#EDA321';
    colorBank[34] = '#F62B19';
    //https://kuler.adobe.com/MyPoints-2-color-theme-3076242/
    colorBank[35] = '#304269';
    colorBank[36] = '#91BED4';
    colorBank[37] = '#D9E8F5';
    colorBank[38] = '#FFFFFF';
    colorBank[39] = '#FFA724';
    
    var index = 0;
    
    function swapColors() {
      $("#container").css({"background":colorBank[index]});
      $("#author").css({"background":colorBank[index],
                        "box-shadow":"0 6px 0 0 " + colorBank[index+1] +
                       ", 0 12px 0 0 " + colorBank[index+2] +
                       ", 0 18px 0 0 " + colorBank[index+3] +
                       ", 0 24px 0 0 " + colorBank[index+4] });
      index++;
      $("#row1").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#col1").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#palette1").css({"background-color":colorBank[index]});
      $("#firstname").css({"color":colorBank[index]});
      index++;
      $("#row2").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#col2").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#palette2").css({"background-color":colorBank[index]});
      index++;
      $("#row3").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#col3").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#palette3").css({"background-color":colorBank[index]});
      $("#lastname").css({"color":colorBank[index]});
      index++;
      $("#row4").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#col4").css({"background-color":colorBank[index], 
                      "box-shadow":"0 0 3px 3px " + colorBank[index]});
      $("#palette4").css({"background-color":colorBank[index]});
      if (index == (colorBank.length-1)) { index = 0; } 
      else { index++; }    
    }
    
    // when button is clicked, swap colors
    $("#palette1").click(function() { swapColors(); });
    $("#palette2").click(function() { swapColors(); });
    $("#palette3").click(function() { swapColors(); });
    $("#palette4").click(function() { swapColors(); });
  });
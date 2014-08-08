function setHeight() {
      var topAttr = parseInt($('#container2').position().top, 10);
      var winHeight = $(window).height();
      var conHeight = $('#container2').height();
      var footHeight = $('#UAfooterFooter').height();
      var footMargin = parseInt($('#UAfooterFooter').css("margin-top"));

      //console.log(topAttr + " " + winHeight + " " + conHeight + " " + footHeight + " " + footMargin);

      if (conHeight < (winHeight - topAttr - footHeight)) {
        var newHeight = (winHeight - topAttr - footHeight - footMargin - 15);
        $('#container2').height(newHeight);
      }

      var subFooterHeight = $('#footerInfo').height();
      conHeight = $('#container2').height();
      var topOffset = conHeight - subFooterHeight;

      //$('#footerInfo').position().top = 300;

      //console.log($('#container2').height());
    }

    $(document).ready(function(){setHeight();});
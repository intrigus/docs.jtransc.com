// This is a functions that scrolls to #{blah}link
function goToByScroll(query){
  $('#sidebar-wrapper').animate({
      scrollTop: $(query).offset().top - $('#sidebar-wrapper').height() / 2
  }, 0);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
    return undefined;
}

function normalizeUrl(str) {
  return ('' + str).replace(/\/+$/, '');
}

function updateSidebar(scroll) {
  $('#searchq').val('');
  $(".sidebar-nav a").each(function() {
    //console.log(normalizeUrl(document.location.href) + " --- " + normalizeUrl(this.href));
    var active = normalizeUrl(document.location.href) == normalizeUrl(this.href);
    $(this).toggleClass('active', active);
    if (scroll && active) {
      goToByScroll(this);
    }
  });
}

$(document).ready(function() {
  updateSidebar(true);

  var q = getQueryVariable('q')
  if (q !== undefined) {
    $('#searchq').val(q);
  }

  $(".sidebar-nav a").click(function() {
    if (this.target == "_blank") return true;

    $("#page-content").load(this.href + " #page-content", function(html) {
      try {
        var title = $(html).filter('title').text();
        document.title = title;
      } catch (e) {
        console.error(e);
      }
    });
    history.pushState({}, "my page", this.href);
    updateSidebar(false);

    return false;
  });
});

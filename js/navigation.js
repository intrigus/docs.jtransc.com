// This is a functions that scrolls to #{blah}link
function goToByScroll(query){
  $('#sidebar-wrapper').animate({
      scrollTop: $(query).offset().top - $('#sidebar-wrapper').height() / 2
  }, 0);
}

function normalizeUrl(str) {
  return ('' + str).replace(/\/+$/, '');
}

function updateSidebar(scroll) {
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

  $(".sidebar-nav a").click(function() {
    if (this.target == "_blank") return true;

    $( "#page-content" ).load( this.href + " #page-content" );
    history.pushState({}, "my page", this.href);
    updateSidebar(false);

    return false;
  });
});

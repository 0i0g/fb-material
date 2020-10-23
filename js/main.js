function focusCmt(e) {
  $(e).trigger("focus");
  return false;
}

function showInputSubComment(e) {
  $(e).parents(".user__idea.sub-comment").css({ display: "block" });
  console.log(e);
  $(e).focus();
  return false;
}
$(function () {
  tippy(".yppit", {
    theme: "light-border",
    // content: $(this).find(".action__menu").html(),
    content(reference) {
      return $(reference).find(".action__menu").html();
    },
    allowHTML: true,
    trigger: "click mouseenter hover",
    interactive: true,
    placement: "bottom",
    animation: "scale",
    onCreate(instance) {
      $(instance.popper)
        .find(".action__menu-item")
        .on("click", function () {
          instance.hide();
        });
    },
  });

  //  comment-input-leave-focus-hide
  $(".comment-input-leave-focus-hide").blur(function () {
    $(this).parents(".user__idea.sub-comment").css({ display: "none" });
  });
});

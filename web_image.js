$("#4k_Pic").draggable({
  cursor: "move"
})


$('#4k_Pic').on('wheel', function(e) {
  var oEvent = e.originalEvent,
    delta = oEvent.deltaY || oEvent.wheelDelta;

  var width = $(this).width(); // Current image width
  var height = $(this).height(); // Current image height

  if (delta > 0) {
    $(this).css("height", height * 1.1); // Scale height based on ratio
    $(this).css("width", width * 1.1);
  } else {
    $(this).css("height", height * 0.9); // Scale width based on ratio
    $(this).css("width", width * 0.9);
  }
})

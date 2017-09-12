function hideWhenClicked() {
  document.getElementById('hide_this').style.visibility = 'hidden';
}

document.getElementById('hide_this').onclick = function() {
  hideWhenClicked();
};

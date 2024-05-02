const video = document.getElementById('bg-video');
  
    // Adjust video size based on window size
    function adjustVideoSize() {
      video.style.width = window.innerWidth + 'px';
      video.style.height = window.innerHeight + 'px';
    }
  
    window.onload = adjustVideoSize;
    window.onresize = adjustVideoSize;
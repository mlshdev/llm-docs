> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls](https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls)

# Adding Picture in Picture to your Safari media controls

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Article

Create a custom control that adds Picture in Picture to your Safari media player.

<a id="overview"></a>

## Overview

Although default controls are available for audio and video elements in your Safari webpage, you can also create your own custom media controls. One of the custom controls you should add is Picture in Picture. With Picture in Picture, your video remains in view in a floating video overlay while users interact with other apps.

<a id="2940030"></a>

### Write markup for a custom control

In this example, the custom controls for a video have only a Play button and a hidden Pause button: 

<a id="2940033"></a>

**Listing 1**

```other
<video id="video" src="my-video.mp4"></video>
<div id="controls">
    <button id="playButton">Play</button>
    <button id="pauseButton" hidden>Pause</button>
</div>
```

<a id="2940031"></a>

### Add a Picture-in-Picture element to your markup

Add markup for a new Picture-in-Picture button, which is visible by default. 

<a id="2940034"></a>

**Listing 2**

```other
<video id="video" src="my-video.mp4"></video>
<div id="controls">
    <button id="playButton">Play</button>
    <button id="pauseButton" hidden>Pause</button>
    <button id="PiPButton">PiP</button>
</div> 
```

<a id="2940032"></a>

### Add functionality to the button

Add a function to toggle Picture in Picture using the [webkitSetPresentationMode](htmlvideoelement/1631224-webkitsetpresentationmode.md) property from the presentation mode API.

<a id="2940035"></a>

**Listing 3**

```javascript
if (video.webkitSupportsPresentationMode && video.webkitSupportsPresentationMode("picture-in-picture") && typeof video.webkitSetPresentationMode === "function") {
    // Toggle PiP when the user clicks the button.
    pipButtonElement.addEventListener("click", function(event) {
        video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
    });
} else {
    pipButtonElement.disabled = true;
}
```

## See Also

### Essentials

- [Adding an AirPlay button to your Safari media controls](adding_an_airplay_button_to_your_safari_media_controls.md): Create a custom control that adds AirPlay to your Safari media player.

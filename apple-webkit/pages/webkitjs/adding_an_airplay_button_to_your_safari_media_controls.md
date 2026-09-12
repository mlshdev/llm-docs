> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls](https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls)

# Adding an AirPlay button to your Safari media controls

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Article

Create a custom control that adds AirPlay to your Safari media player.

<a id="overview"></a>

## Overview

Although default controls are available for audio and video elements in your Safari webpage, you can also create your own custom media controls. One of the custom controls you should add is an AirPlay button.

<a id="2940017"></a>

### Write markup for a custom control 

In this example, the custom controls for a video have only a Play button and a hidden Pause button: 

<a id="2940018"></a>

**Listing 1**

```other
<video id="video" src="my-video.mp4"></video>
<div id="controls">
    <button id="playButton">Play</button>
    <button id="pauseButton" hidden>Pause</button>
</div>
```

<a id="2940019"></a>

### Add an AirPlay element to your markup 

Add markup for the AirPlay button, setting it to hidden by default to mimic the behavior of the AirPlay button in default controls. The default button appears only when AirPlay is available.

<a id="2940020"></a>

**Listing 2**

```other
<video id="video" src="my-video.mp4"></video>
<div id="controls">
    <button id="playButton">Play</button>
    <button id="pauseButton" hidden>Pause</button>
    <button id="airPlayButton" hidden disabled>AirPlay</button>
</div> 
```

<a id="2940021"></a>

### Add an event listener 

To show the AirPlay button when AirPlay is available, you add an event listener for the `webkitplaybacktargetavailabilitychanged` event. This event detects when AirPlay availability changes, and it changes the visibility of the AirPlay button from the above default markup. 

> **Note**

> To conserve battery power, listen for this event only for as long as needed, and then stop listening. If the button is not visible, controls are hidden, or the user is in fullscreen mode, stop listening. 

<a id="2940024"></a>

**Listing 3**

```javascript
if (window.WebKitPlaybackTargetAvailabilityEvent) {
    video.addEventListener('webkitplaybacktargetavailabilitychanged',
        function(event) {
            switch (event.availability) {
            case "available":
                airPlayButton.hidden = false;
                airPlayButton.disabled = false;
                break;
            case "not-available":
                airPlayButton.hidden = true;
                airPlayButton.disabled = true;
                break;
        } }); 
} 
```

<a id="2940025"></a>

### Select the AirPlay device 

Add this block of code to use the native AirPlay route picker in your controls. With this route picker, you can add and select an available AirPlay device:

<a id="2940026"></a>

**Listing 4**

```javascript
if (!window.WebKitPlaybackTargetAvailabilityEvent)
    return;
var airPlayButton = document.getElementById("airPlayButton");
var video = document.getElementById("video");
airPlayButton.addEventListener('click', function(event) {
    video.webkitShowPlaybackTargetPicker();
});
```

<a id="2940027"></a>

### Ensure that styles persist when playing over AirPlay 

Use the code below to listen for the event `webkitcurrentplaybacktargetiswirelesschanged`. This event fires when a media element starts or stops AirPlay playback. Use this event to update styles.

<a id="2940028"></a>

**Listing 5**

```javascript
 if (!window.WebKitPlaybackTargetAvailabilityEvent)
     return;
 var video = document.getElementById("video");
 video.addEventListener('webkitcurrentplaybacktargetiswirelesschanged', 
     function(event) {
         updateAirPlayButtonWirelessStyle();
         updatePageDimmerForWirelessPlayback();
     });
```

## See Also

### Essentials

- [Adding Picture in Picture to your Safari media controls](adding_picture_in_picture_to_your_safari_media_controls.md): Create a custom control that adds Picture in Picture to your Safari media player.

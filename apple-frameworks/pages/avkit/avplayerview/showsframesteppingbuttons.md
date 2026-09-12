> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/showsframesteppingbuttons](https://developer.apple.com/documentation/avkit/avplayerview/showsframesteppingbuttons)

# showsFrameSteppingButtons (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the player view displays frame stepping buttons.

## Declaration

```swift
var showsFrameSteppingButtons: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property value to `true` results in the player view replacing its fast-forward and rewind controls with frame stepping buttons. This property is currently supported only with a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyle.floating](../avplayerviewcontrolsstyle/floating.md).

The default value is `false`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

# showsFrameSteppingButtons (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the player view displays frame stepping buttons.

## Declaration

```objectivec
@property BOOL showsFrameSteppingButtons;
```

<a id="Discussion"></a>

## Discussion

Setting this property value to `true` results in the player view replacing its fast-forward and rewind controls with frame stepping buttons. This property is currently supported only with a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyleFloating](../avplayerviewcontrolsstyle/floating.md).

The default value is `false`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

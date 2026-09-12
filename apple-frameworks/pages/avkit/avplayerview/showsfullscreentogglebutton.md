> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/showsfullscreentogglebutton](https://developer.apple.com/documentation/avkit/avplayerview/showsfullscreentogglebutton)

# showsFullScreenToggleButton (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the player view displays a full-screen toggle button.

## Declaration

```swift
var showsFullScreenToggleButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is currently supported only with a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyle.floating](../avplayerviewcontrolsstyle/floating.md) or [AVPlayerViewControlsStyle.inline](../avplayerviewcontrolsstyle/inline.md).

The default value is `false`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

# showsFullScreenToggleButton (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the player view displays a full-screen toggle button.

## Declaration

```objectivec
@property BOOL showsFullScreenToggleButton;
```

<a id="Discussion"></a>

## Discussion

This property is currently supported only with a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyleFloating](../avplayerviewcontrolsstyle/floating.md) or [AVPlayerViewControlsStyleInline](../avplayerviewcontrolsstyle/inline.md).

The default value is `false`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

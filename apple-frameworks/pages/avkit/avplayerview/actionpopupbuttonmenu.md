> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/actionpopupbuttonmenu](https://developer.apple.com/documentation/avkit/avplayerview/actionpopupbuttonmenu)

# actionPopUpButtonMenu (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An action pop-up button menu that the player view displays.

## Declaration

```swift
@IBOutlet var actionPopUpButtonMenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property value to show an action pop-up button. Setting a custom action pop-up button is currently supported only for a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyle.floating](../avplayerviewcontrolsstyle/floating.md) or [AVPlayerViewControlsStyle.inline](../avplayerviewcontrolsstyle/inline.md).

The default value is `nil`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

# actionPopUpButtonMenu (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An action pop-up button menu that the player view displays.

## Declaration

```objectivec
@property (nullable) NSMenu * actionPopUpButtonMenu;
```

<a id="Discussion"></a>

## Discussion

Set this property value to show an action pop-up button. Setting a custom action pop-up button is currently supported only for a [controlsStyle](controlsstyle.md) of [AVPlayerViewControlsStyleFloating](../avplayerviewcontrolsstyle/floating.md) or [AVPlayerViewControlsStyleInline](../avplayerviewcontrolsstyle/inline.md).

The default value is `nil`.

## See Also

### Customizing the user interface

- [controlsStyle](controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](../avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [updatesNowPlayingInfoCenter](updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

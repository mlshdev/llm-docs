> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrolsstyle](https://developer.apple.com/documentation/avkit/avplayerviewcontrolsstyle)

# AVPlayerViewControlsStyle (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that indicate which user interface controls the view displays.

## Declaration

```swift
enum AVPlayerViewControlsStyle
```

## Topics

### Creating a controls style

- [init(rawValue:)](avplayerviewcontrolsstyle/init%28rawvalue_%29.md)

### Controls Styles

- [AVPlayerViewControlsStyle.none](avplayerviewcontrolsstyle/none.md): The view displays no playback controls.
- [AVPlayerViewControlsStyle.inline](avplayerviewcontrolsstyle/inline.md): The view displays playback controls in a bar along the view’s bottom edge.
- [AVPlayerViewControlsStyle.floating](avplayerviewcontrolsstyle/floating.md): The view displays playback controls in a floating window over the video content.
- [AVPlayerViewControlsStyle.minimal](avplayerviewcontrolsstyle/minimal.md): The view presents basic controls to play and pause playback.
- [default](avplayerviewcontrolsstyle/default.md): The view’s default controls style.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the user interface

- [controlsStyle](avplayerview/controlsstyle.md): The player view’s controls style.
- [showsFrameSteppingButtons](avplayerview/showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](avplayerview/showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](avplayerview/showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](avplayerview/showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](avplayerview/contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](avplayerview/actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](avplayerview/updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

# AVPlayerViewControlsStyle (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that indicate which user interface controls the view displays.

## Declaration

```objectivec
enum AVPlayerViewControlsStyle : NSInteger;
```

## Topics

### Controls Styles

- [AVPlayerViewControlsStyleNone](avplayerviewcontrolsstyle/none.md): The view displays no playback controls.
- [AVPlayerViewControlsStyleInline](avplayerviewcontrolsstyle/inline.md): The view displays playback controls in a bar along the view’s bottom edge.
- [AVPlayerViewControlsStyleFloating](avplayerviewcontrolsstyle/floating.md): The view displays playback controls in a floating window over the video content.
- [AVPlayerViewControlsStyleMinimal](avplayerviewcontrolsstyle/minimal.md): The view presents basic controls to play and pause playback.
- [AVPlayerViewControlsStyleDefault](avplayerviewcontrolsstyle/default.md): The view’s default controls style.

## See Also

### Customizing the user interface

- [controlsStyle](avplayerview/controlsstyle.md): The player view’s controls style.
- [showsFrameSteppingButtons](avplayerview/showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](avplayerview/showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](avplayerview/showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](avplayerview/showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](avplayerview/contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](avplayerview/actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](avplayerview/updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

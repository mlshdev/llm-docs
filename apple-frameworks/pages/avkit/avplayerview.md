> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerview

# AVPlayerView (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A view that displays content from a player and presents a native user interface to control playback.

## Declaration

```swift
class AVPlayerView
```

## Mentioned In

- [Implementing trimming in a macOS player](implementing-trimming-in-a-macos-player.md)

<a id="overview"></a>

## Overview

The player view supports several controls styles, ranging from no controls to controls matching the look of QuickTime Player. This makes it easy for you to tailor the presentation to best match your use of the player view. Regardless of the selected controls style, the player view always supports the following standard set of keyboard shortcuts to control playback:

- The Space bar plays and pauses playback.
- The right and left arrow keys step frame-by-frame through the video.
- JKL navigation:
- The J key rewinds. Press it multiple times to cycle through rewind speeds.
- The K key stops playback.
- The L key fast-forwards. Press it multiple times to cycle through fast-forward speeds.

The player view also makes it simple to add trimming capabilities to your player. Call the view’s [beginTrimming(completionHandler:)](avplayerview/begintrimming%28completionhandler_%29.md) method to present a trimming UI that matches the QuickTime Player interface.

## Topics

### Customizing the user interface

- [controlsStyle](avplayerview/controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](avplayerview/showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](avplayerview/showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](avplayerview/showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](avplayerview/showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](avplayerview/contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](avplayerview/actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](avplayerview/updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

### Customizing the video presentation

- [isReadyForDisplay](avplayerview/isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoBounds](avplayerview/videobounds.md): The current size and position of the video image that displays within the player view’s bounds.
- [videoGravity](avplayerview/videogravity.md): A value that determines how the player view displays video content within its bounds.

### Configuring frame analysis

- [allowsVideoFrameAnalysis](avplayerview/allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](avplayerview/videoframeanalysistypes.md)
- [AVVideoFrameAnalysisType](avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.

### Configuring the playback speed

- [speeds](avplayerview/speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](avplayerview/selectedspeed.md): The currently selected playback speed.
- [selectSpeed(\_:)](avplayerview/selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

### Configuring picture in picture

- [allowsPictureInPicturePlayback](avplayerview/allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [pictureInPictureDelegate](avplayerview/pictureinpicturedelegate.md): The Picture in Picture delegate object.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

### Magnifying video

- [allowsMagnification](avplayerview/allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [magnification](avplayerview/magnification.md): The factor by which the video’s view is currently scaled.
- [setMagnification(\_:centeredAt:)](avplayerview/setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.

### Displaying the chapter and title

- [flashChapterNumber(\_:chapterTitle:)](avplayerview/flashchapternumber%28__chaptertitle_%29.md): Displays the chapter number and title in the player view for a brief moment.

### Trimming media

- [canBeginTrimming](avplayerview/canbegintrimming.md): A Boolean value that indicates whether the player view can begin trimming.
- [beginTrimming(completionHandler:)](avplayerview/begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.
- [AVPlayerViewTrimResult](avplayerviewtrimresult.md): Constants that specify an action a user takes when trimming media in a player view.

### Setting the player object

- [player](avplayerview/player.md): The player instance that provides the media content for the view.

### Setting the delegate object

- [delegate](avplayerview/delegate.md): The player view’s delegate object.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

### High dynamic range

- [preferredDisplayDynamicRange](avplayerview/preferreddisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.
- [AVDisplayDynamicRange](avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Standard player interfaces

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.
- [VideoPlayer](videoplayer.md): A view that displays content from a player and a native user interface to control playback.

# AVPlayerView (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A view that displays content from a player and presents a native user interface to control playback.

## Declaration

```objectivec
@interface AVPlayerView : NSView
```

## Mentioned In

- [Implementing trimming in a macOS player](implementing-trimming-in-a-macos-player.md)

<a id="overview"></a>

## Overview

The player view supports several controls styles, ranging from no controls to controls matching the look of QuickTime Player. This makes it easy for you to tailor the presentation to best match your use of the player view. Regardless of the selected controls style, the player view always supports the following standard set of keyboard shortcuts to control playback:

- The Space bar plays and pauses playback.
- The right and left arrow keys step frame-by-frame through the video.
- JKL navigation:
- The J key rewinds. Press it multiple times to cycle through rewind speeds.
- The K key stops playback.
- The L key fast-forwards. Press it multiple times to cycle through fast-forward speeds.

The player view also makes it simple to add trimming capabilities to your player. Call the view’s [beginTrimmingWithCompletionHandler:](avplayerview/begintrimming%28completionhandler_%29.md) method to present a trimming UI that matches the QuickTime Player interface.

## Topics

### Customizing the user interface

- [controlsStyle](avplayerview/controlsstyle.md): The player view’s controls style.
- [AVPlayerViewControlsStyle](avplayerviewcontrolsstyle.md): Constants that indicate which user interface controls the view displays.
- [showsFrameSteppingButtons](avplayerview/showsframesteppingbuttons.md): A Boolean value that determines whether the player view displays frame stepping buttons.
- [showsSharingServiceButton](avplayerview/showssharingservicebutton.md): A Boolean value that determines whether the player view displays a sharing service button.
- [showsFullScreenToggleButton](avplayerview/showsfullscreentogglebutton.md): A Boolean value that determines whether the player view displays a full-screen toggle button.
- [showsTimecodes](avplayerview/showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [contentOverlayView](avplayerview/contentoverlayview.md): A view that adds additional custom views between the video content and the controls.
- [actionPopUpButtonMenu](avplayerview/actionpopupbuttonmenu.md): An action pop-up button menu that the player view displays.
- [updatesNowPlayingInfoCenter](avplayerview/updatesnowplayinginfocenter.md): A Boolean value that indicates whether the player view controller updates the Now Playing info center.

### Customizing the video presentation

- [readyForDisplay](avplayerview/isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoBounds](avplayerview/videobounds.md): The current size and position of the video image that displays within the player view’s bounds.
- [videoGravity](avplayerview/videogravity.md): A value that determines how the player view displays video content within its bounds.

### Configuring frame analysis

- [allowsVideoFrameAnalysis](avplayerview/allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](avplayerview/videoframeanalysistypes.md)
- [AVVideoFrameAnalysisType](avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.

### Configuring the playback speed

- [speeds](avplayerview/speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](avplayerview/selectedspeed.md): The currently selected playback speed.
- [selectSpeed:](avplayerview/selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

### Configuring picture in picture

- [allowsPictureInPicturePlayback](avplayerview/allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [pictureInPictureDelegate](avplayerview/pictureinpicturedelegate.md): The Picture in Picture delegate object.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

### Magnifying video

- [allowsMagnification](avplayerview/allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [magnification](avplayerview/magnification.md): The factor by which the video’s view is currently scaled.
- [setMagnification:centeredAtPoint:](avplayerview/setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.

### Displaying the chapter and title

- [flashChapterNumber:chapterTitle:](avplayerview/flashchapternumber%28__chaptertitle_%29.md): Displays the chapter number and title in the player view for a brief moment.

### Trimming media

- [canBeginTrimming](avplayerview/canbegintrimming.md): A Boolean value that indicates whether the player view can begin trimming.
- [beginTrimmingWithCompletionHandler:](avplayerview/begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.
- [AVPlayerViewTrimResult](avplayerviewtrimresult.md): Constants that specify an action a user takes when trimming media in a player view.

### Setting the player object

- [player](avplayerview/player.md): The player instance that provides the media content for the view.

### Setting the delegate object

- [delegate](avplayerview/delegate.md): The player view’s delegate object.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

### High dynamic range

- [preferredDisplayDynamicRange](avplayerview/preferreddisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.
- [AVDisplayDynamicRange](avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Standard player interfaces

- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVPlayerViewDelegate](avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

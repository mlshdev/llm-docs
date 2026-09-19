> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewdelegate

# AVPlayerViewDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

## Declaration

```swift
protocol AVPlayerViewDelegate : NSObjectProtocol
```

## Topics

### Responding to full-screen events

- [playerViewWillEnterFullScreen(\_:)](avplayerviewdelegate/playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen(\_:)](avplayerviewdelegate/playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen(\_:)](avplayerviewdelegate/playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen(\_:)](avplayerviewdelegate/playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](avplayerviewdelegate/playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Standard player interfaces

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.
- [VideoPlayer](videoplayer.md): A view that displays content from a player and a native user interface to control playback.

# AVPlayerViewDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

## Declaration

```objectivec
@protocol AVPlayerViewDelegate <NSObject>
```

## Topics

### Responding to full-screen events

- [playerViewWillEnterFullScreen:](avplayerviewdelegate/playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen:](avplayerviewdelegate/playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen:](avplayerviewdelegate/playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen:](avplayerviewdelegate/playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](avplayerviewdelegate/playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Standard player interfaces

- [Customizing the tvOS playback experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.

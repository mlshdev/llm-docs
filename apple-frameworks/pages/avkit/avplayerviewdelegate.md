> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewdelegate](https://developer.apple.com/documentation/avkit/avplayerviewdelegate)

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

### Responding to Full Screen Events

- [playerViewWillEnterFullScreen(\_:)](avplayerviewdelegate/playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen(\_:)](avplayerviewdelegate/playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen(\_:)](avplayerviewdelegate/playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen(\_:)](avplayerviewdelegate/playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](avplayerviewdelegate/playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate object

- [delegate](avplayerview/delegate.md): The player view’s delegate object.

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

### Responding to Full Screen Events

- [playerViewWillEnterFullScreen:](avplayerviewdelegate/playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen:](avplayerviewdelegate/playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen:](avplayerviewdelegate/playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen:](avplayerviewdelegate/playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](avplayerviewdelegate/playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate object

- [delegate](avplayerview/delegate.md): The player view’s delegate object.

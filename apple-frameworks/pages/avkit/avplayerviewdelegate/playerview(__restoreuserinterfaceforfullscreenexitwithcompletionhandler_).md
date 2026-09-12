> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewdelegate/playerview(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:)](https://developer.apple.com/documentation/avkit/avplayerviewdelegate/playerview(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:))

# playerView(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Declaration

```swift
optional func playerView(_ playerView: AVPlayerView, restoreUserInterfaceForFullScreenExitWithCompletionHandler completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func playerViewRestoreUserInterfaceForFullScreenExit(_ playerView: AVPlayerView) async -> Bool
```

## Parameters

- `playerView`: The player view.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your app’s user interface.

## See Also

### Responding to Full Screen Events

- [playerViewWillEnterFullScreen(\_:)](playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen(\_:)](playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen(\_:)](playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen(\_:)](playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.

# playerView:restoreUserInterfaceForFullScreenExitWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate to restore the app’s user interface when exiting full-screen mode.

## Declaration

```objectivec
- (void) playerView:(AVPlayerView *) playerView restoreUserInterfaceForFullScreenExitWithCompletionHandler:(void (^)(BOOL restored)) completionHandler;
```

## Parameters

- `playerView`: The player view.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your app’s user interface.

## See Also

### Responding to Full Screen Events

- [playerViewWillEnterFullScreen:](playerviewwillenterfullscreen%28__%29.md): Tells the delegate that the player view is about to enter full-screen mode.
- [playerViewDidEnterFullScreen:](playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen:](playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen:](playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.

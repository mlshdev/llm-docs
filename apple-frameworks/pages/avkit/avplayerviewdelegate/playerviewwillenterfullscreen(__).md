> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewdelegate/playerviewwillenterfullscreen(_:)

# playerViewWillEnterFullScreen(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate that the player view is about to enter full-screen mode.

## Declaration

```swift
optional func playerViewWillEnterFullScreen(_ playerView: AVPlayerView)
```

## Parameters

- `playerView`: The player view.

## See Also

### Responding to full-screen events

- [playerViewDidEnterFullScreen(\_:)](playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen(\_:)](playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen(\_:)](playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

# playerViewWillEnterFullScreen: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate that the player view is about to enter full-screen mode.

## Declaration

```objectivec
- (void) playerViewWillEnterFullScreen:(AVPlayerView *) playerView;
```

## Parameters

- `playerView`: The player view.

## See Also

### Responding to full-screen events

- [playerViewDidEnterFullScreen:](playerviewdidenterfullscreen%28__%29.md): Tells the delegate that the player view entered full-screen mode.
- [playerViewWillExitFullScreen:](playerviewwillexitfullscreen%28__%29.md): Tells the delegate that the player view is about to exit full-screen mode.
- [playerViewDidExitFullScreen:](playerviewdidexitfullscreen%28__%29.md): Tells the delegate that the player view exited full-screen mode.
- [playerView:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](playerview%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface when exiting full-screen mode.

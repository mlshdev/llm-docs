> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewpictureinpicturedelegate/playerview(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:)](https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerview(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:))

# playerView(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate to restore the user interface before Picture in Picture playback stops.

## Declaration

```swift
optional func playerView(_ playerView: AVPlayerView, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func playerViewRestoreUserInterfaceForPictureInPictureStop(_ playerView: AVPlayerView) async -> Bool
```

## Parameters

- `playerView`: The player view.
- `completionHandler`: The completion handler to call after you’ve restored the user interface.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPicture(inPicture:)](playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPicture(inPicture:)](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPicture(inPicture:)](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPicture(inPicture:)](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView(\_:failedToStartPictureInPictureWithError:)](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerViewShouldAutomaticallyDismissAtPicture(inPictureStart:)](playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

# playerView:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate to restore the user interface before Picture in Picture playback stops.

## Declaration

```objectivec
- (void) playerView:(AVPlayerView *) playerView restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:(void (^)(BOOL restored)) completionHandler;
```

## Parameters

- `playerView`: The player view.
- `completionHandler`: The completion handler to call after you’ve restored the user interface.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPictureInPicture:](playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPictureInPicture:](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPictureInPicture:](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPictureInPicture:](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView:failedToStartPictureInPictureWithError:](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerViewShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

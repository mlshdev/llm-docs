> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewpictureinpicturedelegate/playerviewwillstartpicture(inpicture:)](https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerviewwillstartpicture(inpicture:))

# playerViewWillStartPicture(inPicture:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that Picture in Picture playback is about to start.

## Declaration

```swift
optional func playerViewWillStartPicture(inPicture playerView: AVPlayerView)
```

## Parameters

- `playerView`: The player view.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewDidStartPicture(inPicture:)](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPicture(inPicture:)](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPicture(inPicture:)](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView(\_:failedToStartPictureInPictureWithError:)](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPicture(inPictureStart:)](playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

# playerViewWillStartPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that Picture in Picture playback is about to start.

## Declaration

```objectivec
- (void) playerViewWillStartPictureInPicture:(AVPlayerView *) playerView;
```

## Parameters

- `playerView`: The player view.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewDidStartPictureInPicture:](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPictureInPicture:](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPictureInPicture:](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView:failedToStartPictureInPictureWithError:](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

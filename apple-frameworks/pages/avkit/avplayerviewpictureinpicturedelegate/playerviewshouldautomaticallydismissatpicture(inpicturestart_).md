> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture(inpicturestart:)](https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture(inpicturestart:))

# playerViewShouldAutomaticallyDismissAtPicture(inPictureStart:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Asks the delegate if the player view should miniaturize when Picture in Picture starts.

## Declaration

```swift
optional func playerViewShouldAutomaticallyDismissAtPicture(inPictureStart playerView: AVPlayerView) -> Bool
```

## Parameters

- `playerView`: The player view.

<a id="return-value"></a>

## Return Value

`true` if the player view should automatically be miniaturized; otherwise `false`.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPicture(inPicture:)](playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPicture(inPicture:)](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPicture(inPicture:)](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPicture(inPicture:)](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView(\_:failedToStartPictureInPictureWithError:)](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.

# playerViewShouldAutomaticallyDismissAtPictureInPictureStart: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Asks the delegate if the player view should miniaturize when Picture in Picture starts.

## Declaration

```objectivec
- (BOOL) playerViewShouldAutomaticallyDismissAtPictureInPictureStart:(AVPlayerView *) playerView;
```

## Parameters

- `playerView`: The player view.

<a id="return-value"></a>

## Return Value

`true` if the player view should automatically be miniaturized; otherwise `false`.

## See Also

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPictureInPicture:](playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPictureInPicture:](playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPictureInPicture:](playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPictureInPicture:](playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView:failedToStartPictureInPictureWithError:](playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.

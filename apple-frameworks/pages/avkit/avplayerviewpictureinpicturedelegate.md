> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewpictureinpicturedelegate](https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate)

# AVPlayerViewPictureInPictureDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol that defines the methods to implement to respond to Picture in Picture playback events.

## Declaration

```swift
protocol AVPlayerViewPictureInPictureDelegate : NSObjectProtocol
```

## Topics

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView(\_:failedToStartPictureInPictureWithError:)](avplayerviewpictureinpicturedelegate/playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avplayerviewpictureinpicturedelegate/playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPicture(inPictureStart:)](avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring picture in picture

- [allowsPictureInPicturePlayback](avplayerview/allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [pictureInPictureDelegate](avplayerview/pictureinpicturedelegate.md): The Picture in Picture delegate object.

# AVPlayerViewPictureInPictureDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol that defines the methods to implement to respond to Picture in Picture playback events.

## Declaration

```objectivec
@protocol AVPlayerViewPictureInPictureDelegate <NSObject>
```

## Topics

### Responding to Picture in Picture Playback Events

- [playerViewWillStartPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView:failedToStartPictureInPictureWithError:](avplayerviewpictureinpicturedelegate/playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avplayerviewpictureinpicturedelegate/playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPictureInPictureStart:](avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring picture in picture

- [allowsPictureInPicturePlayback](avplayerview/allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [pictureInPictureDelegate](avplayerview/pictureinpicturedelegate.md): The Picture in Picture delegate object.

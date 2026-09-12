> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/pictureinpicturedelegate](https://developer.apple.com/documentation/avkit/avplayerview/pictureinpicturedelegate)

# pictureInPictureDelegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The Picture in Picture delegate object.

## Declaration

```swift
weak var pictureInPictureDelegate: (any AVPlayerViewPictureInPictureDelegate)? { get set }
```

## See Also

### Configuring picture in picture

- [allowsPictureInPicturePlayback](allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [AVPlayerViewPictureInPictureDelegate](../avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

# pictureInPictureDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The Picture in Picture delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVPlayerViewPictureInPictureDelegate> pictureInPictureDelegate;
```

## See Also

### Configuring picture in picture

- [allowsPictureInPicturePlayback](allowspictureinpictureplayback.md): A Boolean value that determines whether the player view allows Picture in Picture playback.
- [AVPlayerViewPictureInPictureDelegate](../avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

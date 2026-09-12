> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/ispictureinpicturepossible](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturepossible)

# isPictureInPicturePossible (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether Picture in Picture playback is currently possible.

## Declaration

```swift
var isPictureInPicturePossible: Bool { get }
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

This property value is `false` if another app, like FaceTime, is presenting Picture in Picture content.

This property is key-value observable.

## See Also

### Accessing Picture in Picture State

- [isPictureInPictureSupported()](ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [isPictureInPictureActive](ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [isPictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

# pictureInPicturePossible (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether Picture in Picture playback is currently possible.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPictureInPicturePossible) BOOL pictureInPicturePossible;
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

This property value is `false` if another app, like FaceTime, is presenting Picture in Picture content.

This property is key-value observable.

## See Also

### Accessing Picture in Picture State

- [isPictureInPictureSupported](ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [pictureInPictureActive](ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [pictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpictureactive

# isPictureInPictureActive (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the Picture in Picture window is onscreen.

## Declaration

```swift
var isPictureInPictureActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing Picture in Picture state

- [isPictureInPictureSupported()](ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [isPictureInPicturePossible](ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [isPictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

# pictureInPictureActive (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the Picture in Picture window is onscreen.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPictureInPictureActive) BOOL pictureInPictureActive;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing Picture in Picture state

- [isPictureInPictureSupported](ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [pictureInPicturePossible](ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [pictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

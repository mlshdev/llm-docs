> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturesupported()

# isPictureInPictureSupported() (Swift)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current device supports Picture in Picture.

## Declaration

```swift
class func isPictureInPictureSupported() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the current device supports Picture in Picture playback, otherwise `false`.

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)
- [Adopting Picture in Picture in a custom player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

If Picture in Picture isn’t supported on the current device, attempting to initialize a Picture in Picture controller returns `nil`.

## See Also

### Accessing Picture in Picture state

- [isPictureInPicturePossible](ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [isPictureInPictureActive](ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [isPictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

# isPictureInPictureSupported (Objective-C)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current device supports Picture in Picture.

## Declaration

```objectivec
+ (BOOL) isPictureInPictureSupported;
```

<a id="return-value"></a>

## Return Value

`true` if the current device supports Picture in Picture playback, otherwise `false`.

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)
- [Adopting Picture in Picture in a custom player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

If Picture in Picture isn’t supported on the current device, attempting to initialize a Picture in Picture controller returns `nil`.

## See Also

### Accessing Picture in Picture state

- [pictureInPicturePossible](ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [pictureInPictureActive](ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [pictureInPictureSuspended](ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture(_:)

# pictureInPictureControllerWillStartPictureInPicture(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture is about to start.

## Declaration

```swift
optional func pictureInPictureControllerWillStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController)
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## Mentioned In

- [Adopting Picture in Picture in a custom player](../adopting-picture-in-picture-in-a-custom-player.md)

## See Also

### Responding to Picture in Picture life cycle events

- [pictureInPictureControllerDidStartPictureInPicture(\_:)](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture(\_:)](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

# pictureInPictureControllerWillStartPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture is about to start.

## Declaration

```objectivec
- (void) pictureInPictureControllerWillStartPictureInPicture:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## Mentioned In

- [Adopting Picture in Picture in a custom player](../adopting-picture-in-picture-in-a-custom-player.md)

## See Also

### Responding to Picture in Picture life cycle events

- [pictureInPictureControllerDidStartPictureInPicture:](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController:failedToStartPictureInPictureWithError:](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture:](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture:](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture(_:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture(_:))

# pictureInPictureControllerWillStopPictureInPicture(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture is about to stop.

## Declaration

```swift
optional func pictureInPictureControllerWillStopPictureInPicture(_ pictureInPictureController: AVPictureInPictureController)
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture(\_:)](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture(\_:)](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

# pictureInPictureControllerWillStopPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture is about to stop.

## Declaration

```objectivec
- (void) pictureInPictureControllerWillStopPictureInPicture:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture:](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture:](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController:failedToStartPictureInPictureWithError:](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerDidStopPictureInPicture:](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

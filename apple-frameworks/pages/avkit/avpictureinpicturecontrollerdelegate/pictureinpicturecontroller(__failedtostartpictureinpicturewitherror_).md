> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontroller(_:failedtostartpictureinpicturewitherror:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontroller(_:failedtostartpictureinpicturewitherror:))

# pictureInPictureController(\_:failedToStartPictureInPictureWithError:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture failed to start.

## Declaration

```swift
optional func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, failedToStartPictureInPictureWithError error: any Error)
```

## Parameters

- `pictureInPictureController`: The delegating controller.
- `error`: An error that describes the details of the failure.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture(\_:)](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture(\_:)](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureControllerWillStopPictureInPicture(\_:)](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

# pictureInPictureController:failedToStartPictureInPictureWithError: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture failed to start.

## Declaration

```objectivec
- (void) pictureInPictureController:(AVPictureInPictureController *) pictureInPictureController failedToStartPictureInPictureWithError:(NSError *) error;
```

## Parameters

- `pictureInPictureController`: The delegating controller.
- `error`: An error that describes the details of the failure.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture:](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture:](pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureControllerWillStopPictureInPicture:](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture:](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

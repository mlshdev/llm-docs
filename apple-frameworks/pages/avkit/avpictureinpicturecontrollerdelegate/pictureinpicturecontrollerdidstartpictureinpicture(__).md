> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture(_:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture(_:))

# pictureInPictureControllerDidStartPictureInPicture(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture started.

## Declaration

```swift
optional func pictureInPictureControllerDidStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController)
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture(\_:)](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture(\_:)](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

# pictureInPictureControllerDidStartPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that Picture in Picture started.

## Declaration

```objectivec
- (void) pictureInPictureControllerDidStartPictureInPicture:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The delegating controller.

## See Also

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture:](pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureController:failedToStartPictureInPictureWithError:](pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture:](pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture:](pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

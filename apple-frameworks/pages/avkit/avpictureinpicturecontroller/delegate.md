> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/delegate](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/delegate)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A delegate object for a Picture in Picture controller.

## Declaration

```swift
weak var delegate: (any AVPictureInPictureControllerDelegate)? { get set }
```

## See Also

### Accessing the Delegate Object

- [AVPictureInPictureControllerDelegate](../avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A delegate object for a Picture in Picture controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVPictureInPictureControllerDelegate> delegate;
```

## See Also

### Accessing the Delegate Object

- [AVPictureInPictureControllerDelegate](../avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.

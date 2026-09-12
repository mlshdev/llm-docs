> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/delegate](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The delegate for the video output object.

## Declaration

```swift
weak var delegate: (any AVPlayerItemOutputPullDelegate)? { get }
```

## See Also

### Configuring the delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](delegatequeue.md): The dispatch queue on which to call delegate methods.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The delegate for the video output object.

## Declaration

```objectivec
@property (weak, readonly, nullable) id<AVPlayerItemOutputPullDelegate> delegate;
```

## See Also

### Configuring the delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](delegatequeue.md): The dispatch queue on which to call delegate methods.

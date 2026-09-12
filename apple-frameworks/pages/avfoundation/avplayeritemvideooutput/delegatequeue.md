> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/delegatequeue](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue on which to call delegate methods.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

## See Also

### Configuring the delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue on which to call delegate methods.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

## See Also

### Configuring the delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](../avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

## Declaration

```swift
func setDelegate(_ delegate: (any AVCaptureBroadcastVideoOutputDelegate)?, queue delegateCallbackQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to the [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) protocol that will receive broadcast video output notifications.
- `delegateCallbackQueue`: A dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

## See Also

### Related Documentation

- [delegate](delegate.md): The receiver’s delegate.
- [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.

### Managing the Output

- [delegate](delegate.md): The receiver’s delegate.
- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

## Declaration

```objectivec
- (void) setDelegate:(id<AVCaptureBroadcastVideoOutputDelegate>) delegate queue:(dispatch_queue_t) delegateCallbackQueue;
```

## Parameters

- `delegate`: An object conforming to the [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) protocol that will receive broadcast video output notifications.
- `delegateCallbackQueue`: A dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

## See Also

### Related Documentation

- [delegate](delegate.md): The receiver’s delegate.
- [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.

### Managing the Output

- [delegate](delegate.md): The receiver’s delegate.
- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

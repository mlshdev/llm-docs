> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/delegate](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The receiver’s delegate.

## Declaration

```swift
var delegate: (any AVCaptureBroadcastVideoOutputDelegate)? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is an object conforming to the [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) protocol that will be able to monitor the broadcast output operations.

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing the Output

- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The receiver’s delegate.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureBroadcastVideoOutputDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The value of this property is an object conforming to the [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) protocol that will be able to monitor the broadcast output operations.

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing the Output

- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

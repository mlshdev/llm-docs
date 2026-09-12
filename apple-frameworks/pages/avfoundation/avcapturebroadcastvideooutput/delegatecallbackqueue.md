> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/delegatecallbackqueue](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/delegatecallbackqueue)

# delegateCallbackQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

## Declaration

```swift
var delegateCallbackQueue: dispatch_queue_t? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is a dispatch queue on which all delegate method calls will be serialized. If you have not called the [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md) method, the value of this property will be `nil`.

## See Also

### Related Documentation

- [delegate](delegate.md): The receiver’s delegate.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing the Output

- [delegate](delegate.md): The receiver’s delegate.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

# delegateCallbackQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](../avcapturebroadcastvideooutputdelegate.md) methods will be called.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateCallbackQueue;
```

<a id="discussion"></a>

## Discussion

The value of this property is a dispatch queue on which all delegate method calls will be serialized. If you have not called the [setDelegate:queue:](setdelegate%28__queue_%29.md) method, the value of this property will be `nil`.

## See Also

### Related Documentation

- [delegate](delegate.md): The receiver’s delegate.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing the Output

- [delegate](delegate.md): The receiver’s delegate.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

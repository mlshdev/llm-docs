> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedataoutputsynchronizer/delegate](https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A delegate object that receives synchronized capture data.

## Declaration

```swift
var delegate: (any AVCaptureDataOutputSynchronizerDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only. You set the delegate object and the dispatch queue for delegate methods together using the [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md) method.

## See Also

### Receiving synchronized capture data

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Designates a delegate object to receive synchronized data and a dispatch queue for delivering that data.
- [delegateCallbackQueue](delegatecallbackqueue.md): A dispatch queue for delivering synchronized capture data.
- [AVCaptureDataOutputSynchronizerDelegate](../avcapturedataoutputsynchronizerdelegate.md): Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A delegate object that receives synchronized capture data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureDataOutputSynchronizerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This property is read-only. You set the delegate object and the dispatch queue for delegate methods together using the [setDelegate:queue:](setdelegate%28__queue_%29.md) method.

## See Also

### Receiving synchronized capture data

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Designates a delegate object to receive synchronized data and a dispatch queue for delivering that data.
- [delegateCallbackQueue](delegatecallbackqueue.md): A dispatch queue for delivering synchronized capture data.
- [AVCaptureDataOutputSynchronizerDelegate](../avcapturedataoutputsynchronizerdelegate.md): Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.

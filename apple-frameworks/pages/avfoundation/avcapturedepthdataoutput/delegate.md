> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedepthdataoutput/delegate](https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A delegate object that receives depth data.

## Declaration

```swift
var delegate: (any AVCaptureDepthDataOutputDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only. You set the delegate object and the dispatch queue for calling delegate methods together using the [setDelegate(\_:callbackQueue:)](setdelegate%28__callbackqueue_%29.md) method.

## See Also

### Receiving captured depth data

- [setDelegate(\_:callbackQueue:)](setdelegate%28__callbackqueue_%29.md): Designates a delegate object to receive depth data and a dispatch queue for delivering that data.
- [delegateCallbackQueue](delegatecallbackqueue.md): A dispatch queue for delivering depth data.
- [AVCaptureDepthDataOutputDelegate](../avcapturedepthdataoutputdelegate.md): Methods for receiving depth data produced by a depth capture output.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A delegate object that receives depth data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureDepthDataOutputDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This property is read-only. You set the delegate object and the dispatch queue for calling delegate methods together using the [setDelegate:callbackQueue:](setdelegate%28__callbackqueue_%29.md) method.

## See Also

### Receiving captured depth data

- [setDelegate:callbackQueue:](setdelegate%28__callbackqueue_%29.md): Designates a delegate object to receive depth data and a dispatch queue for delivering that data.
- [delegateCallbackQueue](delegatecallbackqueue.md): A dispatch queue for delivering depth data.
- [AVCaptureDepthDataOutputDelegate](../avcapturedepthdataoutputdelegate.md): Methods for receiving depth data produced by a depth capture output.

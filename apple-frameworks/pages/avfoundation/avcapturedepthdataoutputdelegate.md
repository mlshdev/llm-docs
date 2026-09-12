> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedepthdataoutputdelegate](https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutputdelegate)

# AVCaptureDepthDataOutputDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Methods for receiving depth data produced by a depth capture output.

## Declaration

```swift
protocol AVCaptureDepthDataOutputDelegate : NSObjectProtocol
```

## Topics

### Receiving depth data

- [depthDataOutput(\_:didOutput:timestamp:connection:)](avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md): Provides newly captured depth data to the delegate.
- [depthDataOutput(\_:didDrop:timestamp:connection:reason:)](avcapturedepthdataoutputdelegate/depthdataoutput%28__diddrop_timestamp_connection_reason_%29.md): Informs the delegate that captured depth data was not processed.
- [AVCaptureOutput.DataDroppedReason](avcaptureoutput/datadroppedreason.md): Constants that define reasons for why the system dropped a frame.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured depth data

- [setDelegate(\_:callbackQueue:)](avcapturedepthdataoutput/setdelegate%28__callbackqueue_%29.md): Designates a delegate object to receive depth data and a dispatch queue for delivering that data.
- [delegate](avcapturedepthdataoutput/delegate.md): A delegate object that receives depth data.
- [delegateCallbackQueue](avcapturedepthdataoutput/delegatecallbackqueue.md): A dispatch queue for delivering depth data.

# AVCaptureDepthDataOutputDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Methods for receiving depth data produced by a depth capture output.

## Declaration

```objectivec
@protocol AVCaptureDepthDataOutputDelegate <NSObject>
```

## Topics

### Receiving depth data

- [depthDataOutput:didOutputDepthData:timestamp:connection:](avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md): Provides newly captured depth data to the delegate.
- [depthDataOutput:didDropDepthData:timestamp:connection:reason:](avcapturedepthdataoutputdelegate/depthdataoutput%28__diddrop_timestamp_connection_reason_%29.md): Informs the delegate that captured depth data was not processed.
- [AVCaptureOutputDataDroppedReason](avcaptureoutput/datadroppedreason.md): Constants that define reasons for why the system dropped a frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured depth data

- [setDelegate:callbackQueue:](avcapturedepthdataoutput/setdelegate%28__callbackqueue_%29.md): Designates a delegate object to receive depth data and a dispatch queue for delivering that data.
- [delegate](avcapturedepthdataoutput/delegate.md): A delegate object that receives depth data.
- [delegateCallbackQueue](avcapturedepthdataoutput/delegatecallbackqueue.md): A dispatch queue for delivering depth data.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedataoutputsynchronizerdelegate](https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate)

# AVCaptureDataOutputSynchronizerDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.

## Declaration

```swift
protocol AVCaptureDataOutputSynchronizerDelegate : NSObjectProtocol
```

## Topics

### Receiving synchronized capture data

- [dataOutputSynchronizer(\_:didOutput:)](avcapturedataoutputsynchronizerdelegate/dataoutputsynchronizer%28__didoutput_%29.md): Provides a collection of synchronized capture data to the delegate.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving synchronized capture data

- [setDelegate(\_:queue:)](avcapturedataoutputsynchronizer/setdelegate%28__queue_%29.md): Designates a delegate object to receive synchronized data and a dispatch queue for delivering that data.
- [delegate](avcapturedataoutputsynchronizer/delegate.md): A delegate object that receives synchronized capture data.
- [delegateCallbackQueue](avcapturedataoutputsynchronizer/delegatecallbackqueue.md): A dispatch queue for delivering synchronized capture data.

# AVCaptureDataOutputSynchronizerDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.

## Declaration

```objectivec
@protocol AVCaptureDataOutputSynchronizerDelegate <NSObject>
```

## Topics

### Receiving synchronized capture data

- [dataOutputSynchronizer:didOutputSynchronizedDataCollection:](avcapturedataoutputsynchronizerdelegate/dataoutputsynchronizer%28__didoutput_%29.md): Provides a collection of synchronized capture data to the delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving synchronized capture data

- [setDelegate:queue:](avcapturedataoutputsynchronizer/setdelegate%28__queue_%29.md): Designates a delegate object to receive synchronized data and a dispatch queue for delivering that data.
- [delegate](avcapturedataoutputsynchronizer/delegate.md): A delegate object that receives synchronized capture data.
- [delegateCallbackQueue](avcapturedataoutputsynchronizer/delegatecallbackqueue.md): A dispatch queue for delivering synchronized capture data.

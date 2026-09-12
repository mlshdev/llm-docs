> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate)

# AVCaptureVideoDataOutputSampleBufferDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Methods for receiving sample buffers from, and monitoring the status of, a video data output.

## Declaration

```swift
protocol AVCaptureVideoDataOutputSampleBufferDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol defines an interface for delegates of an [AVCaptureVideoDataOutput](avcapturevideodataoutput.md) object to receive captured video sample buffers and be notified of late sample buffers that were dropped.

The delegate of an [AVCaptureVideoDataOutput](avcapturevideodataoutput.md) object must adopt the `AVCaptureVideoDataOutputSampleBufferDelegate` protocol. The methods in this protocol are optional.

## Topics

### Managing sample buffer behavior

- [captureOutput(\_:didOutput:from:)](avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a new video frame was written.
- [captureOutput(\_:didDrop:from:)](avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__diddrop_from_%29.md): Notifies the delegate that a video frame was discarded.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured video data

- [setSampleBufferDelegate(\_:queue:)](avcapturevideodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferDelegate](avcapturevideodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcapturevideodataoutput/samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.

# AVCaptureVideoDataOutputSampleBufferDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Methods for receiving sample buffers from, and monitoring the status of, a video data output.

## Declaration

```objectivec
@protocol AVCaptureVideoDataOutputSampleBufferDelegate <NSObject>
```

<a id="overview"></a>

## Overview

This protocol defines an interface for delegates of an [AVCaptureVideoDataOutput](avcapturevideodataoutput.md) object to receive captured video sample buffers and be notified of late sample buffers that were dropped.

The delegate of an [AVCaptureVideoDataOutput](avcapturevideodataoutput.md) object must adopt the `AVCaptureVideoDataOutputSampleBufferDelegate` protocol. The methods in this protocol are optional.

## Topics

### Managing sample buffer behavior

- [captureOutput:didOutputSampleBuffer:fromConnection:](avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a new video frame was written.
- [captureOutput:didDropSampleBuffer:fromConnection:](avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__diddrop_from_%29.md): Notifies the delegate that a video frame was discarded.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured video data

- [setSampleBufferDelegate:queue:](avcapturevideodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferDelegate](avcapturevideodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcapturevideodataoutput/samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.

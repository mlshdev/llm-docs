> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate)

# AVCaptureAudioDataOutputSampleBufferDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Methods for receiving audio sample data from an audio capture.

## Declaration

```swift
protocol AVCaptureAudioDataOutputSampleBufferDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol defines an interface for delegates of an [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md) object to receive captured audio sample buffers.

The delegate of an [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md) object must adopt this protocol. The method in this protocol is optional.

## Topics

### Managing sample buffer behavior

- [captureOutput(\_:didOutput:from:)](avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a sample buffer was written.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate(\_:queue:)](avcaptureaudiodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](avcaptureaudiodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcaptureaudiodataoutput/samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked

# AVCaptureAudioDataOutputSampleBufferDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Methods for receiving audio sample data from an audio capture.

## Declaration

```objectivec
@protocol AVCaptureAudioDataOutputSampleBufferDelegate <NSObject>
```

<a id="overview"></a>

## Overview

This protocol defines an interface for delegates of an [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md) object to receive captured audio sample buffers.

The delegate of an [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md) object must adopt this protocol. The method in this protocol is optional.

## Topics

### Managing sample buffer behavior

- [captureOutput:didOutputSampleBuffer:fromConnection:](avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a sample buffer was written.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate:queue:](avcaptureaudiodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](avcaptureaudiodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcaptureaudiodataoutput/samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked

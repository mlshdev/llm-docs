> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput/samplebuffercallbackqueue](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/samplebuffercallbackqueue)

# sampleBufferCallbackQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The queue on which delegate callbacks are invoked

## Declaration

```swift
var sampleBufferCallbackQueue: dispatch_queue_t? { get }
```

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

# sampleBufferCallbackQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The queue on which delegate callbacks are invoked

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t sampleBufferCallbackQueue;
```

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

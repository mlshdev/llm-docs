> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput/samplebufferdelegate](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/samplebufferdelegate)

# sampleBufferDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture object’s delegate.

## Declaration

```swift
var sampleBufferDelegate: (any AVCaptureAudioDataOutputSampleBufferDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

You use the delegate to manage incoming data.

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

# sampleBufferDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture object’s delegate.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureAudioDataOutputSampleBufferDelegate> sampleBufferDelegate;
```

<a id="Discussion"></a>

## Discussion

You use the delegate to manage incoming data.

## See Also

### Receiving captured audio data

- [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

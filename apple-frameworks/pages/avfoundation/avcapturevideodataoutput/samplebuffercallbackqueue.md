> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/samplebuffercallbackqueue](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/samplebuffercallbackqueue)

# sampleBufferCallbackQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The queue on which the system invokes delegate callbacks.

## Declaration

```swift
var sampleBufferCallbackQueue: dispatch_queue_t? { get }
```

<a id="Discussion"></a>

## Discussion

You set the queue using [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md).

## See Also

### Receiving captured video data

- [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

# sampleBufferCallbackQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The queue on which the system invokes delegate callbacks.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t sampleBufferCallbackQueue;
```

<a id="Discussion"></a>

## Discussion

You set the queue using [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md).

## See Also

### Receiving captured video data

- [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

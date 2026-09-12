> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/samplebufferdelegate](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/samplebufferdelegate)

# sampleBufferDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The capture object’s delegate.

## Declaration

```swift
var sampleBufferDelegate: (any AVCaptureVideoDataOutputSampleBufferDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate receives sample buffers after they are captured.

You set the delegate using [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md).

## See Also

### Receiving captured video data

- [setSampleBufferDelegate(\_:queue:)](setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

# sampleBufferDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The capture object’s delegate.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureVideoDataOutputSampleBufferDelegate> sampleBufferDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate receives sample buffers after they are captured.

You set the delegate using [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md).

## See Also

### Receiving captured video data

- [setSampleBufferDelegate:queue:](setsamplebufferdelegate%28__queue_%29.md): Sets the sample buffer delegate and the queue for invoking callbacks.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

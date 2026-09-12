> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/setsamplebufferdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/setsamplebufferdelegate(_:queue:))

# setSampleBufferDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Sets the sample buffer delegate and the queue for invoking callbacks.

## Declaration

```swift
func setSampleBufferDelegate(_ sampleBufferDelegate: (any AVCaptureVideoDataOutputSampleBufferDelegate)?, queue sampleBufferCallbackQueue: dispatch_queue_t?)
```

## Parameters

- `sampleBufferDelegate`: An object conforming to the [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md) protocol that will receive sample buffers after they are captured.
- `sampleBufferCallbackQueue`: The queue on which callbacks should be invoked. You must use a serial dispatch queue, to guarantee that video frames will be delivered in order.

  The sampleBufferCallbackQueue parameter may not be `NULL`, except when setting the `sampleBufferDelegate` to `nil`.

<a id="Discussion"></a>

## Discussion

When a new video sample buffer is captured, it is sent to the sample buffer delegate using [captureOutput(\_:didOutput:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md). All delegate methods are invoked on the specified dispatch queue.

If the queue is blocked when new frames are captured, those frames will be automatically dropped at a time determined by the value of the [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md) property. This allows you to process existing frames on the same queue without having to manage the potential memory usage increases that would otherwise occur when that processing is unable to keep up with the rate of incoming frames.

If your frame processing is consistently unable to keep up with the rate of incoming frames, you should consider using the [minFrameDuration](minframeduration.md) property, which will generally yield better performance characteristics and more consistent frame rates than frame dropping alone.

If you need to minimize the chances of frames being dropped, you should specify a queue on which a sufficiently small amount of processing is being done outside of receiving sample buffers. However, if you migrate extra processing to another queue, you are responsible for ensuring that memory usage does not grow without bound from frames that have not been processed.

<a id="Special-considerations"></a>

### Special considerations

This method uses [dispatch_retain](../../dispatch/dispatch_retain.md) and [dispatch_release](../../dispatch/dispatch_release.md) to manage the queue.

## See Also

### Receiving captured video data

- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

# setSampleBufferDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Sets the sample buffer delegate and the queue for invoking callbacks.

## Declaration

```objectivec
- (void) setSampleBufferDelegate:(id<AVCaptureVideoDataOutputSampleBufferDelegate>) sampleBufferDelegate queue:(dispatch_queue_t) sampleBufferCallbackQueue;
```

## Parameters

- `sampleBufferDelegate`: An object conforming to the [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md) protocol that will receive sample buffers after they are captured.
- `sampleBufferCallbackQueue`: The queue on which callbacks should be invoked. You must use a serial dispatch queue, to guarantee that video frames will be delivered in order.

  The sampleBufferCallbackQueue parameter may not be `NULL`, except when setting the `sampleBufferDelegate` to `nil`.

<a id="Discussion"></a>

## Discussion

When a new video sample buffer is captured, it is sent to the sample buffer delegate using [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md). All delegate methods are invoked on the specified dispatch queue.

If the queue is blocked when new frames are captured, those frames will be automatically dropped at a time determined by the value of the [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md) property. This allows you to process existing frames on the same queue without having to manage the potential memory usage increases that would otherwise occur when that processing is unable to keep up with the rate of incoming frames.

If your frame processing is consistently unable to keep up with the rate of incoming frames, you should consider using the [minFrameDuration](minframeduration.md) property, which will generally yield better performance characteristics and more consistent frame rates than frame dropping alone.

If you need to minimize the chances of frames being dropped, you should specify a queue on which a sufficiently small amount of processing is being done outside of receiving sample buffers. However, if you migrate extra processing to another queue, you are responsible for ensuring that memory usage does not grow without bound from frames that have not been processed.

<a id="Special-considerations"></a>

### Special considerations

This method uses [dispatch_retain](../../dispatch/dispatch_retain.md) and [dispatch_release](../../dispatch/dispatch_release.md) to manage the queue.

## See Also

### Receiving captured video data

- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which the system invokes delegate callbacks.
- [AVCaptureVideoDataOutputSampleBufferDelegate](../avcapturevideodataoutputsamplebufferdelegate.md): Methods for receiving sample buffers from, and monitoring the status of, a video data output.

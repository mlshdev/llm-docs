> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput/setsamplebufferdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/setsamplebufferdelegate(_:queue:))

# setSampleBufferDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.

## Declaration

```swift
func setSampleBufferDelegate(_ sampleBufferDelegate: (any AVCaptureAudioDataOutputSampleBufferDelegate)?, queue sampleBufferCallbackQueue: dispatch_queue_t?)
```

## Parameters

- `sampleBufferDelegate`: An object conforming to the [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md) protocol that will receive sample buffers after they are captured.
- `sampleBufferCallbackQueue`: You must pass a serial dispatch to guarantee that audio samples will be delivered in order.

  The value may not be `NULL`, except when setting the `sampleBufferDelegate` to `nil`.

<a id="Discussion"></a>

## Discussion

When a new audio sample buffer is captured it is vended to the sample buffer delegate using the [captureOutput(\_:didOutput:from:)](../avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate method. All delegate methods are called on the specified dispatch queue.

If the queue is blocked when new samples are captured, those samples will be automatically dropped when they become sufficiently late. This allows you to process existing samples on the same queue without having to manage the potential memory usage increases that would otherwise occur when that processing is unable to keep up with the rate of incoming samples.

If you need to minimize the chances of samples being dropped, you should specify a queue on which a sufficiently small amount of processing is being done outside of receiving sample buffers. When migrating extra processing to another queue, you are responsible for ensuring that memory usage does not grow without bound from samples that have not been processed.

<a id="Special-considerations"></a>

### Special considerations

This method uses [dispatch_retain](../../dispatch/dispatch_retain.md) and [dispatch_release](../../dispatch/dispatch_release.md) to manage the queue.

## See Also

### Receiving captured audio data

- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

# setSampleBufferDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.

## Declaration

```objectivec
- (void) setSampleBufferDelegate:(id<AVCaptureAudioDataOutputSampleBufferDelegate>) sampleBufferDelegate queue:(dispatch_queue_t) sampleBufferCallbackQueue;
```

## Parameters

- `sampleBufferDelegate`: An object conforming to the [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md) protocol that will receive sample buffers after they are captured.
- `sampleBufferCallbackQueue`: You must pass a serial dispatch to guarantee that audio samples will be delivered in order.

  The value may not be `NULL`, except when setting the `sampleBufferDelegate` to `nil`.

<a id="Discussion"></a>

## Discussion

When a new audio sample buffer is captured it is vended to the sample buffer delegate using the [captureOutput:didOutputSampleBuffer:fromConnection:](../avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate method. All delegate methods are called on the specified dispatch queue.

If the queue is blocked when new samples are captured, those samples will be automatically dropped when they become sufficiently late. This allows you to process existing samples on the same queue without having to manage the potential memory usage increases that would otherwise occur when that processing is unable to keep up with the rate of incoming samples.

If you need to minimize the chances of samples being dropped, you should specify a queue on which a sufficiently small amount of processing is being done outside of receiving sample buffers. When migrating extra processing to another queue, you are responsible for ensuring that memory usage does not grow without bound from samples that have not been processed.

<a id="Special-considerations"></a>

### Special considerations

This method uses [dispatch_retain](../../dispatch/dispatch_retain.md) and [dispatch_release](../../dispatch/dispatch_release.md) to manage the queue.

## See Also

### Receiving captured audio data

- [sampleBufferDelegate](samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](../avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

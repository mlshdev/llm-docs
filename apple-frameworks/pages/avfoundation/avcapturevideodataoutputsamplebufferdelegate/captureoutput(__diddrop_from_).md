> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:diddrop:from:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:diddrop:from:))

# captureOutput(\_:didDrop:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Notifies the delegate that a video frame was discarded.

## Declaration

```swift
optional func captureOutput(_ output: AVCaptureOutput, didDrop sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection)
```

## Parameters

- `output`: The capture output object.
- `sampleBuffer`: A `CMSampleBuffer` object containing information about the dropped frame, such as its format and presentation time.

  This sample buffer contains none of the original video data.
- `connection`: The connection from which the video was received.

<a id="Discussion"></a>

## Discussion

Delegates receive this message whenever a late video frame is dropped. This method is called once for each dropped frame. It is called on the dispatch queue specified by the output’s [sampleBufferCallbackQueue](../avcapturevideodataoutput/samplebuffercallbackqueue.md) property.

The `sampleBuffer` will contain a [kCMSampleBufferAttachmentKey_DroppedFrameReason](../../coremedia/kcmsamplebufferattachmentkey_droppedframereason.md) attachment that details why the frame was dropped. The frame may be dropped because it was late ([kCMSampleBufferDroppedFrameReason_FrameWasLate](../../coremedia/kcmsamplebufferdroppedframereason_framewaslate.md)), typically caused by the client’s processing taking too long. It can also be dropped because the module providing frames is out of buffers ([kCMSampleBufferDroppedFrameReason_OutOfBuffers](../../coremedia/kcmsamplebufferdroppedframereason_outofbuffers.md)). Frames can also be dropped if the module providing sample buffers has experienced a discontinuity ([kCMSampleBufferDroppedFrameReason_Discontinuity](../../coremedia/kcmsamplebufferdroppedframereason_discontinuity.md)) and an unknown number of frames have been lost.  This condition is typically caused by the system being too busy.

Because this method is called on the same dispatch queue that is responsible for outputting video frames, it must be efficient to prevent further capture performance problems, such as additional dropped video frames.

## See Also

### Managing sample buffer behavior

- [captureOutput(\_:didOutput:from:)](captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a new video frame was written.

# captureOutput:didDropSampleBuffer:fromConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Notifies the delegate that a video frame was discarded.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureOutput *) output didDropSampleBuffer:(CMSampleBufferRef) sampleBuffer fromConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `output`: The capture output object.
- `sampleBuffer`: A `CMSampleBuffer` object containing information about the dropped frame, such as its format and presentation time.

  This sample buffer contains none of the original video data.
- `connection`: The connection from which the video was received.

<a id="Discussion"></a>

## Discussion

Delegates receive this message whenever a late video frame is dropped. This method is called once for each dropped frame. It is called on the dispatch queue specified by the output’s [sampleBufferCallbackQueue](../avcapturevideodataoutput/samplebuffercallbackqueue.md) property.

The `sampleBuffer` will contain a [kCMSampleBufferAttachmentKey_DroppedFrameReason](../../coremedia/kcmsamplebufferattachmentkey_droppedframereason.md) attachment that details why the frame was dropped. The frame may be dropped because it was late ([kCMSampleBufferDroppedFrameReason_FrameWasLate](../../coremedia/kcmsamplebufferdroppedframereason_framewaslate.md)), typically caused by the client’s processing taking too long. It can also be dropped because the module providing frames is out of buffers ([kCMSampleBufferDroppedFrameReason_OutOfBuffers](../../coremedia/kcmsamplebufferdroppedframereason_outofbuffers.md)). Frames can also be dropped if the module providing sample buffers has experienced a discontinuity ([kCMSampleBufferDroppedFrameReason_Discontinuity](../../coremedia/kcmsamplebufferdroppedframereason_discontinuity.md)) and an unknown number of frames have been lost.  This condition is typically caused by the system being too busy.

Because this method is called on the same dispatch queue that is responsible for outputting video frames, it must be efficient to prevent further capture performance problems, such as additional dropped video frames.

## See Also

### Managing sample buffer behavior

- [captureOutput:didOutputSampleBuffer:fromConnection:](captureoutput%28__didoutput_from_%29.md): Notifies the delegate that a new video frame was written.

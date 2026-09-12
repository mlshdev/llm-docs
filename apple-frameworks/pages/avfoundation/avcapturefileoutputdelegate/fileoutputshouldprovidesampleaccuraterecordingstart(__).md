> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart(_:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart(_:))

# fileOutputShouldProvideSampleAccurateRecordingStart(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows a client to opt in to frame accurate recording in [fileOutput(\_:didOutputSampleBuffer:from:)](fileoutput%28__didoutputsamplebuffer_from_%29.md).

## Declaration

```swift
func fileOutputShouldProvideSampleAccurateRecordingStart(_ output: AVCaptureFileOutput) -> Bool
```

## Parameters

- `output`: The capture file output instance that is associated with the delegate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if frame accurate recording is required; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In apps linked before OS X Mountain Lion, delegates that implement the [fileOutput(\_:didOutputSampleBuffer:from:)](fileoutput%28__didoutputsamplebuffer_from_%29.md) method can ensure that starting and stopping a recording is frame accurate by calling [startRecording(to:recordingDelegate:)](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) or [stopRecording()](../avcapturefileoutput/stoprecording%28%29.md) from within the callback. Frame accurate recording requires the capture output to apply outputSettings when the session starts running, so it is ready to start and/or stop recording on any given frame boundary. Applying compression settings for the entire length of the session has power, thermal, and CPU implications.

In apps linked on or after OS X Mountain Lion, delegates must implement this method to indicate whether frame accurate recording is required. The capture file output calls this method only once when the delegate is added and never again. If your delegate returns [false](https://developer.apple.com/documentation/swift/false), the capture file output applies compression settings only when [startRecording(to:recordingDelegate:)](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) is called and disables these settings once the recording stops.

## See Also

### Sample processing

- [fileOutput(\_:didOutputSampleBuffer:from:)](fileoutput%28__didoutputsamplebuffer_from_%29.md): Gives the delegate the opportunity to inspect samples as they are received by the output and start and stop recording at exact times.

# captureOutputShouldProvideSampleAccurateRecordingStart: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Allows a client to opt in to frame accurate recording in [captureOutput:didOutputSampleBuffer:fromConnection:](fileoutput%28__didoutputsamplebuffer_from_%29.md).

## Declaration

```objectivec
- (BOOL) captureOutputShouldProvideSampleAccurateRecordingStart:(AVCaptureOutput *) output;
```

## Parameters

- `output`: The capture file output instance that is associated with the delegate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if frame accurate recording is required; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In apps linked before OS X Mountain Lion, delegates that implement the [captureOutput:didOutputSampleBuffer:fromConnection:](fileoutput%28__didoutputsamplebuffer_from_%29.md) method can ensure that starting and stopping a recording is frame accurate by calling [startRecordingToOutputFileURL:recordingDelegate:](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) or [stopRecording](../avcapturefileoutput/stoprecording%28%29.md) from within the callback. Frame accurate recording requires the capture output to apply outputSettings when the session starts running, so it is ready to start and/or stop recording on any given frame boundary. Applying compression settings for the entire length of the session has power, thermal, and CPU implications.

In apps linked on or after OS X Mountain Lion, delegates must implement this method to indicate whether frame accurate recording is required. The capture file output calls this method only once when the delegate is added and never again. If your delegate returns [false](https://developer.apple.com/documentation/swift/false), the capture file output applies compression settings only when [startRecordingToOutputFileURL:recordingDelegate:](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) is called and disables these settings once the recording stops.

## See Also

### Sample processing

- [captureOutput:didOutputSampleBuffer:fromConnection:](fileoutput%28__didoutputsamplebuffer_from_%29.md): Gives the delegate the opportunity to inspect samples as they are received by the output and start and stop recording at exact times.

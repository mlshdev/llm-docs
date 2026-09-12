> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/pauserecording()](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/pauserecording())

# pauseRecording() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Pauses recording to the current output file.

## Declaration

```swift
func pauseRecording()
```

<a id="Discussion"></a>

## Discussion

This method causes the receiver to stop writing captured samples to the current output file returned by [outputFileURL](outputfileurl.md), but leaves the file open so that samples can be written to it in the future, if [resumeRecording()](resumerecording%28%29.md) is called. This allows you to record multiple media segments that are not contiguous in time to a single file.

In macOS, if this method is called within the captureOutput:didOutputSampleBuffer:fromConnection: delegate method, the last samples written to the current file are guaranteed to be those that were output immediately before those in the sample buffer passed to that method.

## See Also

### Related Documentation

- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

### Managing recording

- [startRecording(to:recordingDelegate:)](startrecording%28to_recordingdelegate_%29.md): Starts recording media to the specified output URL.
- [stopRecording()](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.
- [resumeRecording()](resumerecording%28%29.md): Resumes recording to the current output file after it was previously paused using [pauseRecording()](pauserecording%28%29.md).

# pauseRecording (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Pauses recording to the current output file.

## Declaration

```objectivec
- (void) pauseRecording;
```

<a id="Discussion"></a>

## Discussion

This method causes the receiver to stop writing captured samples to the current output file returned by [outputFileURL](outputfileurl.md), but leaves the file open so that samples can be written to it in the future, if [resumeRecording](resumerecording%28%29.md) is called. This allows you to record multiple media segments that are not contiguous in time to a single file.

In macOS, if this method is called within the captureOutput:didOutputSampleBuffer:fromConnection: delegate method, the last samples written to the current file are guaranteed to be those that were output immediately before those in the sample buffer passed to that method.

## See Also

### Related Documentation

- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

### Managing recording

- [startRecordingToOutputFileURL:recordingDelegate:](startrecording%28to_recordingdelegate_%29.md): Starts recording media to the specified output URL.
- [stopRecording](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.
- [resumeRecording](resumerecording%28%29.md): Resumes recording to the current output file after it was previously paused using [pauseRecording](pauserecording%28%29.md).

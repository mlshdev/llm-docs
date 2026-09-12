> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/startrecording(to:recordingdelegate:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/startrecording(to:recordingdelegate:))

# startRecording(to:recordingDelegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Starts recording media to the specified output URL.

## Declaration

```swift
func startRecording(to outputFileURL: URL, recordingDelegate delegate: any AVCaptureFileOutputRecordingDelegate)
```

## Parameters

- `outputFileURL`: An object specifying the output file URL.

  This method raises an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the argument isn’t a valid file URL.
- `delegate`: A delegate object that’s notified of changes to the recording state.

<a id="Discussion"></a>

## Discussion

A failure occurs if you attempt to record to a URL where a file exists. To overwrite the content, delete the old file before calling this method.

In macOS, calling this method from within the [captureOutput(\_:didOutput:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) method guarantees that the first samples written to the new file are those passed to the delegate method.

When you stop recording by calling [stopRecording()](stoprecording%28%29.md), by changing files using this method, or because of an error, the framework writes any remaining file data in the background. Therefore, for the system to notify you upon completion, you must adopt the [fileOutput(\_:didFinishRecordingTo:from:error:)](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method. The recording delegate can also optionally implement methods that inform it when the output object starts writing data, when it pauses or resumes recording, and when it’s about to finish recording.

In macOS, you don’t need to call [stopRecording()](stoprecording%28%29.md) before calling this method while another recording is in progress. If you call this method while the output object is recording, the framework preserves media samples between the old file and the new file. In iOS, to avoid any errors, you must call [stopRecording()](stoprecording%28%29.md) before calling this method again.

> **Note**

>  Don’t call this method when capturing audio using [AVCaptureAudioFileOutput](../avcaptureaudiofileoutput.md). Use the [startRecording(to:outputFileType:recordingDelegate:)](../avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md) method instead.

## See Also

### Managing recording

- [stopRecording()](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.
- [pauseRecording()](pauserecording%28%29.md): Pauses recording to the current output file.
- [resumeRecording()](resumerecording%28%29.md): Resumes recording to the current output file after it was previously paused using [pauseRecording()](pauserecording%28%29.md).

# startRecordingToOutputFileURL:recordingDelegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Starts recording media to the specified output URL.

## Declaration

```objectivec
- (void) startRecordingToOutputFileURL:(NSURL *) outputFileURL recordingDelegate:(id<AVCaptureFileOutputRecordingDelegate>) delegate;
```

## Parameters

- `outputFileURL`: An object specifying the output file URL.

  This method raises an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the argument isn’t a valid file URL.
- `delegate`: A delegate object that’s notified of changes to the recording state.

<a id="Discussion"></a>

## Discussion

A failure occurs if you attempt to record to a URL where a file exists. To overwrite the content, delete the old file before calling this method.

In macOS, calling this method from within the [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) method guarantees that the first samples written to the new file are those passed to the delegate method.

When you stop recording by calling [stopRecording](stoprecording%28%29.md), by changing files using this method, or because of an error, the framework writes any remaining file data in the background. Therefore, for the system to notify you upon completion, you must adopt the [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method. The recording delegate can also optionally implement methods that inform it when the output object starts writing data, when it pauses or resumes recording, and when it’s about to finish recording.

In macOS, you don’t need to call [stopRecording](stoprecording%28%29.md) before calling this method while another recording is in progress. If you call this method while the output object is recording, the framework preserves media samples between the old file and the new file. In iOS, to avoid any errors, you must call [stopRecording](stoprecording%28%29.md) before calling this method again.

> **Note**

>  Don’t call this method when capturing audio using [AVCaptureAudioFileOutput](../avcaptureaudiofileoutput.md). Use the [startRecordingToOutputFileURL:outputFileType:recordingDelegate:](../avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md) method instead.

## See Also

### Managing recording

- [stopRecording](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.
- [pauseRecording](pauserecording%28%29.md): Pauses recording to the current output file.
- [resumeRecording](resumerecording%28%29.md): Resumes recording to the current output file after it was previously paused using [pauseRecording](pauserecording%28%29.md).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiofileoutput/startrecording(to:outputfiletype:recordingdelegate:)](https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/startrecording(to:outputfiletype:recordingdelegate:))

# startRecording(to:outputFileType:recordingDelegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the receiver to start recording to a new file of the specified format, and specifies a delegate that will be notified when recording is finished.

## Declaration

```swift
func startRecording(to outputFileURL: URL, outputFileType fileType: AVFileType, recordingDelegate delegate: any AVCaptureFileOutputRecordingDelegate)
```

## Parameters

- `outputFileURL`: The URL of the output file.

  This method throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the URL is not a valid file URL.

  If a file at the given URL already exists when capturing starts, recording to the new file will fail.
- `fileType`: A UTI indicating the format of the file to be written.

  UTIs for common audio file types are declared in `AVMediaFormat.h`.
- `delegate`: An object conforming to the [AVCaptureFileOutputRecordingDelegate](../avcapturefileoutputrecordingdelegate.md) protocol.

  You must specify a delegate to be notified when recording is finished.

<a id="Discussion"></a>

## Discussion

You do not need not to call [stopRecording()](../avcapturefileoutput/stoprecording%28%29.md) before calling this method while another recording is in progress. If this method is invoked while an existing output file was already being recorded, no media samples will be discarded between the old file and the new file.

When recording is stopped—by calling `stopRecording`, by changing files using this method, or because of an error—the remaining data that needs to be included to the file will be written in the background. Therefore, you must specify a delegate that will be notified when all data has been written to the file using the [fileOutput(\_:didFinishRecordingTo:from:error:)](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) method. The recording delegate can also optionally implement methods that inform it when data starts being written, when recording is paused and resumed, and when recording is about to be finished.

In macOS, if this method is called within the [captureOutput(\_:didOutput:from:)](../avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate method, the first samples written to the new file are guaranteed to be those contained in the sample buffer passed to that method.

# startRecordingToOutputFileURL:outputFileType:recordingDelegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the receiver to start recording to a new file of the specified format, and specifies a delegate that will be notified when recording is finished.

## Declaration

```objectivec
- (void) startRecordingToOutputFileURL:(NSURL *) outputFileURL outputFileType:(AVFileType) fileType recordingDelegate:(id<AVCaptureFileOutputRecordingDelegate>) delegate;
```

## Parameters

- `outputFileURL`: The URL of the output file.

  This method throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the URL is not a valid file URL.

  If a file at the given URL already exists when capturing starts, recording to the new file will fail.
- `fileType`: A UTI indicating the format of the file to be written.

  UTIs for common audio file types are declared in `AVMediaFormat.h`.
- `delegate`: An object conforming to the [AVCaptureFileOutputRecordingDelegate](../avcapturefileoutputrecordingdelegate.md) protocol.

  You must specify a delegate to be notified when recording is finished.

<a id="Discussion"></a>

## Discussion

You do not need not to call [stopRecording](../avcapturefileoutput/stoprecording%28%29.md) before calling this method while another recording is in progress. If this method is invoked while an existing output file was already being recorded, no media samples will be discarded between the old file and the new file.

When recording is stopped—by calling `stopRecording`, by changing files using this method, or because of an error—the remaining data that needs to be included to the file will be written in the background. Therefore, you must specify a delegate that will be notified when all data has been written to the file using the [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) method. The recording delegate can also optionally implement methods that inform it when data starts being written, when recording is paused and resumed, and when recording is about to be finished.

In macOS, if this method is called within the [captureOutput:didOutputSampleBuffer:fromConnection:](../avcaptureaudiodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate method, the first samples written to the new file are guaranteed to be those contained in the sample buffer passed to that method.

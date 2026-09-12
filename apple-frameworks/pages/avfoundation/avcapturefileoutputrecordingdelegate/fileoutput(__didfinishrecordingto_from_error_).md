> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:))

# fileOutput(\_:didFinishRecordingTo:from:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Informs the delegate when all pending data has been written to an output file.

## Declaration

```swift
func fileOutput(_ output: AVCaptureFileOutput, didFinishRecordingTo outputFileURL: URL, from connections: [AVCaptureConnection], error: (any Error)?)
```

## Parameters

- `output`: The capture file output that has finished writing the file.
- `outputFileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.
- `error`: If the file was not written successfully, an error object that describes the problem; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method is called whenever a file is finished. If the file was forced to be finished due to an error, the error is described in the error parameter—otherwise, the error parameter is `nil`.

This method is called when the file output has finished writing all data to a file whose recording was stopped, either because [startRecording(to:recordingDelegate:)](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) or [stopRecording()](../avcapturefileoutput/stoprecording%28%29.md) were called, or because an error (described by the error parameter) occurred (if no error occurred, the error parameter is `nil`).

This method is always called for each recording request, even if no data is successfully written to the file.

You should not assume that this method will be called on a specific thread.

## See Also

### Delegate methods

- [fileOutput(\_:didStartRecordingTo:from:)](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [fileOutput(\_:didStartRecordingTo:startPTS:from:)](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [fileOutput(\_:willFinishRecordingTo:from:error:)](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [fileOutput(\_:didPauseRecordingTo:from:)](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [fileOutput(\_:didResumeRecordingTo:from:)](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

# captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Informs the delegate when all pending data has been written to an output file.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureFileOutput *) output didFinishRecordingToOutputFileAtURL:(NSURL *) outputFileURL fromConnections:(NSArray<AVCaptureConnection *> *) connections error:(NSError *) error;
```

## Parameters

- `output`: The capture file output that has finished writing the file.
- `outputFileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.
- `error`: If the file was not written successfully, an error object that describes the problem; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method is called whenever a file is finished. If the file was forced to be finished due to an error, the error is described in the error parameter—otherwise, the error parameter is `nil`.

This method is called when the file output has finished writing all data to a file whose recording was stopped, either because [startRecordingToOutputFileURL:recordingDelegate:](../avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) or [stopRecording](../avcapturefileoutput/stoprecording%28%29.md) were called, or because an error (described by the error parameter) occurred (if no error occurred, the error parameter is `nil`).

This method is always called for each recording request, even if no data is successfully written to the file.

You should not assume that this method will be called on a specific thread.

## See Also

### Delegate methods

- [captureOutput:didStartRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [captureOutput:didStartRecordingToOutputFileAtURL:startPTS:fromConnections:](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [captureOutput:didPauseRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [captureOutput:didResumeRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

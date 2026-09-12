> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didpauserecordingto:from:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didpauserecordingto:from:))

# fileOutput(\_:didPauseRecordingTo:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.

## Declaration

```swift
optional func fileOutput(_ output: AVCaptureFileOutput, didPauseRecordingTo fileURL: URL, from connections: [AVCaptureConnection])
```

## Parameters

- `output`: The capture file output that has paused its file recording.
- `fileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.

<a id="Discussion"></a>

## Discussion

This method is called whenever a request to pause recording is actually respected.

It is safe for delegates to change what the file output is currently doing (starting a new file, for example) from within this method. If recording to a file is stopped, either manually or due to an error, this method is not guaranteed to be called, even if a previous call to `pauseRecording` was made.

You should not assume that this method will be called on a specific thread, and should make this method as efficient as possible.

## See Also

### Delegate methods

- [fileOutput(\_:didStartRecordingTo:from:)](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [fileOutput(\_:didStartRecordingTo:startPTS:from:)](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [fileOutput(\_:willFinishRecordingTo:from:error:)](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [fileOutput(\_:didFinishRecordingTo:from:error:)](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [fileOutput(\_:didResumeRecordingTo:from:)](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

# captureOutput:didPauseRecordingToOutputFileAtURL:fromConnections: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureFileOutput *) output didPauseRecordingToOutputFileAtURL:(NSURL *) fileURL fromConnections:(NSArray<AVCaptureConnection *> *) connections;
```

## Parameters

- `output`: The capture file output that has paused its file recording.
- `fileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.

<a id="Discussion"></a>

## Discussion

This method is called whenever a request to pause recording is actually respected.

It is safe for delegates to change what the file output is currently doing (starting a new file, for example) from within this method. If recording to a file is stopped, either manually or due to an error, this method is not guaranteed to be called, even if a previous call to `pauseRecording` was made.

You should not assume that this method will be called on a specific thread, and should make this method as efficient as possible.

## See Also

### Delegate methods

- [captureOutput:didStartRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [captureOutput:didStartRecordingToOutputFileAtURL:startPTS:fromConnections:](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [captureOutput:didResumeRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

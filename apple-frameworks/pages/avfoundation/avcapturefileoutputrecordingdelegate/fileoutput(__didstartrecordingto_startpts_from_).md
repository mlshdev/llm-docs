> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didstartrecordingto:startpts:from:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didstartrecordingto:startpts:from:))

# fileOutput(\_:didStartRecordingTo:startPTS:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+

## Declaration

```swift
optional func fileOutput(_ output: AVCaptureFileOutput, didStartRecordingTo fileURL: URL, startPTS: CMTime, from connections: [AVCaptureConnection])
```

## Parameters

- `output`: The capture file output that started writing the file.
- `fileURL`: The file URL of the file that is being written.
- `startPTS`: The timestamp of the first buffer written to the file, synced with AVCaptureSession.synchronizationClock
- `connections`: An array of AVCaptureConnection objects attached to the file output that provided the data that is being written to the file.

<a id="discussion"></a>

## Discussion

Informs the delegate when the output has started writing to a file.

This method is called when the file output has started writing data to a file. If an error condition prevents any data from being written, this method may not be called. captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error: and captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error: will always be called, even if no data is written.

If this method is implemented, the alternative delegate callback -captureOutput:didStartRecordingToOutputFileAtURL:fromConnections will not be called.

Clients should not assume that this method will be called on a specific thread, and should also try to make this method as efficient as possible.

## See Also

### Delegate methods

- [fileOutput(\_:didStartRecordingTo:from:)](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [fileOutput(\_:willFinishRecordingTo:from:error:)](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [fileOutput(\_:didFinishRecordingTo:from:error:)](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [fileOutput(\_:didPauseRecordingTo:from:)](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [fileOutput(\_:didResumeRecordingTo:from:)](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

# captureOutput:didStartRecordingToOutputFileAtURL:startPTS:fromConnections: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureFileOutput *) output didStartRecordingToOutputFileAtURL:(NSURL *) fileURL startPTS:(CMTime) startPTS fromConnections:(NSArray<AVCaptureConnection *> *) connections;
```

## Parameters

- `output`: The capture file output that started writing the file.
- `fileURL`: The file URL of the file that is being written.
- `startPTS`: The timestamp of the first buffer written to the file, synced with AVCaptureSession.synchronizationClock
- `connections`: An array of AVCaptureConnection objects attached to the file output that provided the data that is being written to the file.

<a id="discussion"></a>

## Discussion

Informs the delegate when the output has started writing to a file.

This method is called when the file output has started writing data to a file. If an error condition prevents any data from being written, this method may not be called. captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error: and captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error: will always be called, even if no data is written.

If this method is implemented, the alternative delegate callback -captureOutput:didStartRecordingToOutputFileAtURL:fromConnections will not be called.

Clients should not assume that this method will be called on a specific thread, and should also try to make this method as efficient as possible.

## See Also

### Delegate methods

- [captureOutput:didStartRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [captureOutput:didPauseRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [captureOutput:didResumeRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

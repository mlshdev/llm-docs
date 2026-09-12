> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didstartrecordingto:from:)](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:didstartrecordingto:from:))

# fileOutput(\_:didStartRecordingTo:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Informs the delegate when the output has started writing to a file.

## Declaration

```swift
optional func fileOutput(_ output: AVCaptureFileOutput, didStartRecordingTo fileURL: URL, from connections: [AVCaptureConnection])
```

## Parameters

- `output`: The capture file output that started writing the file.
- `fileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.

<a id="Discussion"></a>

## Discussion

If an error condition prevents any data from being written, this method may not be called. [fileOutput(\_:willFinishRecordingTo:from:error:)](fileoutput%28__willfinishrecordingto_from_error_%29.md) and [fileOutput(\_:didFinishRecordingTo:from:error:)](fileoutput%28__didfinishrecordingto_from_error_%29.md) are always called, even if no data is written.

You should not assume that this method will be called on a specific thread, and should make this method as efficient as possible.

## See Also

### Delegate methods

- [fileOutput(\_:didStartRecordingTo:startPTS:from:)](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [fileOutput(\_:willFinishRecordingTo:from:error:)](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [fileOutput(\_:didFinishRecordingTo:from:error:)](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [fileOutput(\_:didPauseRecordingTo:from:)](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [fileOutput(\_:didResumeRecordingTo:from:)](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

# captureOutput:didStartRecordingToOutputFileAtURL:fromConnections: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Informs the delegate when the output has started writing to a file.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureFileOutput *) output didStartRecordingToOutputFileAtURL:(NSURL *) fileURL fromConnections:(NSArray<AVCaptureConnection *> *) connections;
```

## Parameters

- `output`: The capture file output that started writing the file.
- `fileURL`: The file URL of the file that is being written.
- `connections`: An array of [AVCaptureConnection](../avcaptureconnection.md) objects attached to the file output that provided the data that is being written to the file.

<a id="Discussion"></a>

## Discussion

If an error condition prevents any data from being written, this method may not be called. [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__willfinishrecordingto_from_error_%29.md) and [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__didfinishrecordingto_from_error_%29.md) are always called, even if no data is written.

You should not assume that this method will be called on a specific thread, and should make this method as efficient as possible.

## See Also

### Delegate methods

- [captureOutput:didStartRecordingToOutputFileAtURL:startPTS:fromConnections:](fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [captureOutput:didPauseRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [captureOutput:didResumeRecordingToOutputFileAtURL:fromConnections:](fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

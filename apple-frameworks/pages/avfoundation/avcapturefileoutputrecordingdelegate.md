> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputrecordingdelegate](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate)

# AVCaptureFileOutputRecordingDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Methods for responding to events that occur while recording captured media to a file.

## Declaration

```swift
protocol AVCaptureFileOutputRecordingDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Defines an interface for delegates of [AVCaptureFileOutput](avcapturefileoutput.md) to respond to events that occur in the process of recording a single file.

The delegate of an `AVCaptureFileOutput` object must adopt the `AVCaptureFileOutputRecordingDelegate` protocol.

## Topics

### Delegate methods

- [fileOutput(\_:didStartRecordingTo:from:)](avcapturefileoutputrecordingdelegate/fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [fileOutput(\_:didStartRecordingTo:startPTS:from:)](avcapturefileoutputrecordingdelegate/fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [fileOutput(\_:willFinishRecordingTo:from:error:)](avcapturefileoutputrecordingdelegate/fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [fileOutput(\_:didFinishRecordingTo:from:error:)](avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [fileOutput(\_:didPauseRecordingTo:from:)](avcapturefileoutputrecordingdelegate/fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [fileOutput(\_:didResumeRecordingTo:from:)](avcapturefileoutputrecordingdelegate/fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.

# AVCaptureFileOutputRecordingDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Methods for responding to events that occur while recording captured media to a file.

## Declaration

```objectivec
@protocol AVCaptureFileOutputRecordingDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Defines an interface for delegates of [AVCaptureFileOutput](avcapturefileoutput.md) to respond to events that occur in the process of recording a single file.

The delegate of an `AVCaptureFileOutput` object must adopt the `AVCaptureFileOutputRecordingDelegate` protocol.

## Topics

### Delegate methods

- [captureOutput:didStartRecordingToOutputFileAtURL:fromConnections:](avcapturefileoutputrecordingdelegate/fileoutput%28__didstartrecordingto_from_%29.md): Informs the delegate when the output has started writing to a file.
- [captureOutput:didStartRecordingToOutputFileAtURL:startPTS:fromConnections:](avcapturefileoutputrecordingdelegate/fileoutput%28__didstartrecordingto_startpts_from_%29.md)
- [captureOutput:willFinishRecordingToOutputFileAtURL:fromConnections:error:](avcapturefileoutputrecordingdelegate/fileoutput%28__willfinishrecordingto_from_error_%29.md): Informs the delegate when the output will stop writing new samples to a file.
- [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md): Informs the delegate when all pending data has been written to an output file.
- [captureOutput:didPauseRecordingToOutputFileAtURL:fromConnections:](avcapturefileoutputrecordingdelegate/fileoutput%28__didpauserecordingto_from_%29.md): Called whenever the output is recording to a file and successfully pauses the recording at the request of a client.
- [captureOutput:didResumeRecordingToOutputFileAtURL:fromConnections:](avcapturefileoutputrecordingdelegate/fileoutput%28__didresumerecordingto_from_%29.md): Called whenever the output, at the request of the client, successfully resumes a file recording that was paused.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.

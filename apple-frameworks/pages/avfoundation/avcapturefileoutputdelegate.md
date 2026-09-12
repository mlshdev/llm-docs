> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutputdelegate](https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate)

# AVCaptureFileOutputDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** macOS 10.7+

Methods for monitoring or controlling the output of a media file capture.

## Declaration

```swift
protocol AVCaptureFileOutputDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `AVCaptureFileOutputDelegate` protocol defines an interface for delegates of an [AVCaptureFileOutput](avcapturefileoutput.md) object to monitor and control recordings along exact sample boundaries.

## Topics

### Sample processing

- [fileOutputShouldProvideSampleAccurateRecordingStart(\_:)](avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart%28__%29.md): Allows a client to opt in to frame accurate recording in [fileOutput(\_:didOutputSampleBuffer:from:)](avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md).
- [fileOutput(\_:didOutputSampleBuffer:from:)](avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md): Gives the delegate the opportunity to inspect samples as they are received by the output and start and stop recording at exact times.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.

# AVCaptureFileOutputDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** macOS 10.7+

Methods for monitoring or controlling the output of a media file capture.

## Declaration

```objectivec
@protocol AVCaptureFileOutputDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The `AVCaptureFileOutputDelegate` protocol defines an interface for delegates of an [AVCaptureFileOutput](avcapturefileoutput.md) object to monitor and control recordings along exact sample boundaries.

## Topics

### Sample processing

- [captureOutputShouldProvideSampleAccurateRecordingStart:](avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart%28__%29.md): Allows a client to opt in to frame accurate recording in [captureOutput:didOutputSampleBuffer:fromConnection:](avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md).
- [captureOutput:didOutputSampleBuffer:fromConnection:](avcapturefileoutputdelegate/fileoutput%28__didoutputsamplebuffer_from_%29.md): Gives the delegate the opportunity to inspect samples as they are received by the output and start and stop recording at exact times.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.

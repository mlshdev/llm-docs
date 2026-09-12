> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiofileoutput](https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput)

# AVCaptureAudioFileOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture output that records audio and saves the recorded audio to a file.

## Declaration

```swift
class AVCaptureAudioFileOutput
```

<a id="overview"></a>

## Overview

`AVCaptureAudioFileOutput` implements the complete file recording interface declared by [AVCaptureFileOutput](avcapturefileoutput.md) for writing media data to audio files. In addition, you can configure options specific to the audio file formats, including writing metadata collections to each file and specifying audio encoding options. `AVCaptureAudioFileOutput` does not, however, support [startRecording(to:recordingDelegate:)](avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md)—use [startRecording(to:outputFileType:recordingDelegate:)](avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md) instead.

## Topics

### Discovering supported types

- [availableOutputFileTypes()](avcaptureaudiofileoutput/availableoutputfiletypes%28%29.md): Returns an array containing UTIs identifying the file types `AVCaptureAudioFileOutput` can write.

### Starting a recording

- [startRecording(to:outputFileType:recordingDelegate:)](avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md): Tells the receiver to start recording to a new file of the specified format, and specifies a delegate that will be notified when recording is finished.

### Configuring output

- [audioSettings](avcaptureaudiofileoutput/audiosettings.md): The settings used to decode or re-encode audio before it is output by the receiver.
- [metadata](avcaptureaudiofileoutput/metadata.md): A collection of metadata to be written to the receiver’s output files.

### Creating output

- [init()](avcaptureaudiofileoutput/init%28%29.md): Creates a new audio file output.

## Relationships

### Inherits From

- [AVCaptureFileOutput](avcapturefileoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.

# AVCaptureAudioFileOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture output that records audio and saves the recorded audio to a file.

## Declaration

```objectivec
@interface AVCaptureAudioFileOutput : AVCaptureFileOutput
```

<a id="overview"></a>

## Overview

`AVCaptureAudioFileOutput` implements the complete file recording interface declared by [AVCaptureFileOutput](avcapturefileoutput.md) for writing media data to audio files. In addition, you can configure options specific to the audio file formats, including writing metadata collections to each file and specifying audio encoding options. `AVCaptureAudioFileOutput` does not, however, support [startRecordingToOutputFileURL:recordingDelegate:](avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md)—use [startRecordingToOutputFileURL:outputFileType:recordingDelegate:](avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md) instead.

## Topics

### Discovering supported types

- [availableOutputFileTypes](avcaptureaudiofileoutput/availableoutputfiletypes%28%29.md): Returns an array containing UTIs identifying the file types `AVCaptureAudioFileOutput` can write.

### Starting a recording

- [startRecordingToOutputFileURL:outputFileType:recordingDelegate:](avcaptureaudiofileoutput/startrecording%28to_outputfiletype_recordingdelegate_%29.md): Tells the receiver to start recording to a new file of the specified format, and specifies a delegate that will be notified when recording is finished.

### Configuring output

- [audioSettings](avcaptureaudiofileoutput/audiosettings.md): The settings used to decode or re-encode audio before it is output by the receiver.
- [metadata](avcaptureaudiofileoutput/metadata.md): A collection of metadata to be written to the receiver’s output files.

### Creating output

- [init](avcaptureaudiofileoutput/init%28%29.md): Creates a new audio file output.
- [new](avcaptureaudiofileoutput/new.md): Creates a new audio file output.

## Relationships

### Inherits From

- [AVCaptureFileOutput](avcapturefileoutput.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md): A capture output that records video and audio to a QuickTime movie file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.

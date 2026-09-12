> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/maxrecordedduration](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/maxrecordedduration)

# maxRecordedDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The longest duration allowed for the recording.

## Declaration

```swift
var maxRecordedDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies a hard limit on the duration of recorded files. Recording is stopped when the limit is reached and the [fileOutput(\_:didFinishRecordingTo:from:error:)](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method is invoked with an appropriate error. The default value of this property is [invalid](../../coremedia/cmtime/invalid.md), which indicates no limit.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.
- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

# maxRecordedDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The longest duration allowed for the recording.

## Declaration

```objectivec
@property (nonatomic) CMTime maxRecordedDuration;
```

<a id="Discussion"></a>

## Discussion

This property specifies a hard limit on the duration of recorded files. Recording is stopped when the limit is reached and the [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method is invoked with an appropriate error. The default value of this property is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), which indicates no limit.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.
- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

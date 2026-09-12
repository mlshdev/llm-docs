> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/maxrecordedfilesize](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/maxrecordedfilesize)

# maxRecordedFileSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The maximum size, in bytes, of the data that should be recorded by the receiver.

## Declaration

```swift
var maxRecordedFileSize: Int64 { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies a hard limit on the data size of recorded files. Recording is stopped when the limit is reached and the [fileOutput(\_:didFinishRecordingTo:from:error:)](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method is invoked with an appropriate error. The default value of this property is `0`, which indicates no limit.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.
- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

# maxRecordedFileSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The maximum size, in bytes, of the data that should be recorded by the receiver.

## Declaration

```objectivec
@property (nonatomic) int64_t maxRecordedFileSize;
```

<a id="Discussion"></a>

## Discussion

This property specifies a hard limit on the data size of recorded files. Recording is stopped when the limit is reached and the [captureOutput:didFinishRecordingToOutputFileAtURL:fromConnections:error:](../avcapturefileoutputrecordingdelegate/fileoutput%28__didfinishrecordingto_from_error_%29.md) delegate method is invoked with an appropriate error. The default value of this property is `0`, which indicates no limit.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.
- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

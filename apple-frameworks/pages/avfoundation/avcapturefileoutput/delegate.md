> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/delegate](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The delegate object for the capture file output.

## Declaration

```swift
unowned(unsafe) var delegate: (any AVCaptureFileOutputDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate is an object conforming to the [AVCaptureFileOutputDelegate](../avcapturefileoutputdelegate.md) protocol that will be able to monitor and control recording along exact sample boundaries.

## See Also

### Setting file output properties

- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.
- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The delegate object for the capture file output.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<AVCaptureFileOutputDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is an object conforming to the [AVCaptureFileOutputDelegate](../avcapturefileoutputdelegate.md) protocol that will be able to monitor and control recording along exact sample boundaries.

## See Also

### Setting file output properties

- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.
- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

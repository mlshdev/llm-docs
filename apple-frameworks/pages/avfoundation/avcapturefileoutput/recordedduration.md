> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/recordedduration](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/recordedduration)

# recordedDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Indicates the duration of the media recorded to the current output file.

## Declaration

```swift
var recordedDuration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

If recording is in progress, this property returns the total time recorded so far.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.
- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

# recordedDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Indicates the duration of the media recorded to the current output file.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime recordedDuration;
```

<a id="Discussion"></a>

## Discussion

If recording is in progress, this property returns the total time recorded so far.

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.
- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/outputfileurl](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/outputfileurl)

# outputFileURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The URL to which output is directed.

## Declaration

```swift
var outputFileURL: URL? { get }
```

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.
- [isRecordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

# outputFileURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The URL to which output is directed.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * outputFileURL;
```

## See Also

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.
- [recordingPaused](isrecordingpaused.md): Indicates whether recording to the current output file is paused.

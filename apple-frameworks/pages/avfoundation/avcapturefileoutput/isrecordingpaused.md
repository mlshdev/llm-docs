> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturefileoutput/isrecordingpaused](https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/isrecordingpaused)

# isRecordingPaused (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Indicates whether recording to the current output file is paused.

## Declaration

```swift
var isRecordingPaused: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates recording to the file returned by [outputFileURL](outputfileurl.md) has been previously paused using the [pauseRecording()](pauserecording%28%29.md) method. When a recording is paused, captured samples are not written to the output file, but new samples can be written to the same file in the future by calling [resumeRecording()](resumerecording%28%29.md).

## See Also

### Related Documentation

- [pauseRecording()](pauserecording%28%29.md): Pauses recording to the current output file.
- [stopRecording()](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [isRecording](isrecording.md): Indicates whether recording is in progress.

# recordingPaused (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 10.7+ · tvOS 18.0+

Indicates whether recording to the current output file is paused.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRecordingPaused) BOOL recordingPaused;
```

<a id="Discussion"></a>

## Discussion

This property indicates recording to the file returned by [outputFileURL](outputfileurl.md) has been previously paused using the [pauseRecording](pauserecording%28%29.md) method. When a recording is paused, captured samples are not written to the output file, but new samples can be written to the same file in the future by calling [resumeRecording](resumerecording%28%29.md).

## See Also

### Related Documentation

- [pauseRecording](pauserecording%28%29.md): Pauses recording to the current output file.
- [stopRecording](stoprecording%28%29.md): Tells the receiver to stop recording to the current file.

### Setting file output properties

- [delegate](delegate.md): The delegate object for the capture file output.
- [maxRecordedDuration](maxrecordedduration.md): The longest duration allowed for the recording.
- [maxRecordedFileSize](maxrecordedfilesize.md): The maximum size, in bytes, of the data that should be recorded by the receiver.
- [minFreeDiskSpaceLimit](minfreediskspacelimit.md): The minimum amount of free space, in bytes, required for recording to continue on a given volume.
- [outputFileURL](outputfileurl.md): The URL to which output is directed.
- [recordedDuration](recordedduration.md): Indicates the duration of the media recorded to the current output file.
- [recordedFileSize](recordedfilesize.md): Indicates the size, in bytes, of the data recorded to the current output file.
- [recording](isrecording.md): Indicates whether recording is in progress.

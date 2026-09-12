> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureviewdelegate/captureview(_:startrecordingto:)](https://developer.apple.com/documentation/avkit/avcaptureviewdelegate/captureview(_:startrecordingto:))

# captureView(\_:startRecordingTo:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the user has made a request to start a new recording.

## Declaration

```swift
func captureView(_ captureView: AVCaptureView, startRecordingTo fileOutput: AVCaptureFileOutput)
```

## Parameters

- `captureView`: The capture view.
- `fileOutput`: The capture file output.

<a id="Discussion"></a>

## Discussion

If the capture file output is an instance of [AVCaptureMovieFileOutput](../../avfoundation/avcapturemoviefileoutput.md), you start recording by calling [startRecording(to:recordingDelegate:)](../../avfoundation/avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) on the capture file output.

# captureView:startRecordingToFileOutput: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Tells the delegate that the user has made a request to start a new recording.

## Declaration

```objectivec
- (void) captureView:(AVCaptureView *) captureView startRecordingToFileOutput:(AVCaptureFileOutput *) fileOutput;
```

## Parameters

- `captureView`: The capture view.
- `fileOutput`: The capture file output.

<a id="Discussion"></a>

## Discussion

If the capture file output is an instance of [AVCaptureMovieFileOutput](../../avfoundation/avcapturemoviefileoutput.md), you start recording by calling [startRecordingToOutputFileURL:recordingDelegate:](../../avfoundation/avcapturefileoutput/startrecording%28to_recordingdelegate_%29.md) on the capture file output.

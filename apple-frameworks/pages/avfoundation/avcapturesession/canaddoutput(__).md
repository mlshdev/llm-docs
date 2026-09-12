> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/canaddoutput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/canaddoutput(_:))

# canAddOutput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Determines whether you can add an output to a session.

## Declaration

```swift
func canAddOutput(_ output: AVCaptureOutput) -> Bool
```

## Parameters

- `output`: An output to add to the session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the output; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In iOS and Mac Catalyst, the system imposes the following limitations on the combinations of outputs a capture session may contain:

- An app may add only a single output of a particular type. For apps that link against iOS 16 or later, this restriction no longer applies to [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).
- Prior to iOS 16, you can add an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) to the same session, but only one may have its connection active. If you attempt to enable both connections, the system chooses the movie file output as the active connection and disables the video data output’s connection. For apps that link against iOS 16 or later, this restriction no longer exists.
- Similarly, prior to iOS 16, you can add an [AVCaptureAudioDataOutput](../avcaptureaudiodataoutput.md) and an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) to the same session, but only one may have its connection active. If you attempt to enable both connections, the system chooses the movie file output and disables the audio data output’s connection. For apps that link against iOS 16 or later, this restriction no longer exists.
- An app can’t add an [AVCapturePhotoOutput](../avcapturephotooutput.md) and [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) to the same session.

> **Important**

>  If you configure a capture session to use more than one [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance, monitor the value of the capture session’s [hardwareCost](hardwarecost.md) property and reconfigure the session as appropriate.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [addOutput(\_:)](addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput(\_:)](removeoutput%28__%29.md): Removes an output from a capture session.

# canAddOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Determines whether you can add an output to a session.

## Declaration

```objectivec
- (BOOL) canAddOutput:(AVCaptureOutput *) output;
```

## Parameters

- `output`: An output to add to the session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the output; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In iOS and Mac Catalyst, the system imposes the following limitations on the combinations of outputs a capture session may contain:

- An app may add only a single output of a particular type. For apps that link against iOS 16 or later, this restriction no longer applies to [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).
- Prior to iOS 16, you can add an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) to the same session, but only one may have its connection active. If you attempt to enable both connections, the system chooses the movie file output as the active connection and disables the video data output’s connection. For apps that link against iOS 16 or later, this restriction no longer exists.
- Similarly, prior to iOS 16, you can add an [AVCaptureAudioDataOutput](../avcaptureaudiodataoutput.md) and an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) to the same session, but only one may have its connection active. If you attempt to enable both connections, the system chooses the movie file output and disables the audio data output’s connection. For apps that link against iOS 16 or later, this restriction no longer exists.
- An app can’t add an [AVCapturePhotoOutput](../avcapturephotooutput.md) and [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) to the same session.

> **Important**

>  If you configure a capture session to use more than one [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance, monitor the value of the capture session’s [hardwareCost](hardwarecost.md) property and reconfigure the session as appropriate.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [addOutput:](addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput:](removeoutput%28__%29.md): Removes an output from a capture session.

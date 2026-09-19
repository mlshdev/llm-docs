> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcaptureeventsound/beginvideorecording

# beginVideoRecording (Swift)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The default sound for starting a video recording.

## Declaration

```swift
class var beginVideoRecording: AVCaptureEventSound { get }
```

## See Also

### Accessing default sounds

- [cameraShutter](camerashutter.md): The default sound for photo capture.
- [endVideoRecording](endvideorecording.md): The default sound for ending a video recording.

# beginVideoRecordingSound (Objective-C)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The default sound for starting a video recording.

## Declaration

```objectivec
@property (class, readonly) AVCaptureEventSound * beginVideoRecordingSound;
```

## See Also

### Accessing default sounds

- [cameraShutterSound](camerashutter.md): The default sound for photo capture.
- [endVideoRecordingSound](endvideorecording.md): The default sound for ending a video recording.

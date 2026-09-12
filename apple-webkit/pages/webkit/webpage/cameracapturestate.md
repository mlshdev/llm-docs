> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/cameracapturestate](https://developer.apple.com/documentation/webkit/webpage/cameracapturestate)

# cameraCaptureState

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates whether the webpage is using the camera to capture images or video.

## Declaration

```swift
@MainActor final var cameraCaptureState: WKMediaCaptureState { get }
```

## See Also

### Managing the microphone and camera

- [microphoneCaptureState](microphonecapturestate.md): Indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState(\_:)](setcameracapturestate%28__%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState(\_:)](setmicrophonecapturestate%28__%29.md): Changes whether the webpage is using the microphone to capture audio.

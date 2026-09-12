> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/setcameracapturestate(_:)](https://developer.apple.com/documentation/webkit/webpage/setcameracapturestate(_:))

# setCameraCaptureState(\_:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Changes whether the webpage is using the camera to capture images or video.

## Declaration

```swift
@MainActor final func setCameraCaptureState(_ state: WKMediaCaptureState) async
```

## Parameters

- `state`: The new capture state the page should use.

## See Also

### Managing the microphone and camera

- [cameraCaptureState](cameracapturestate.md): Indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](microphonecapturestate.md): Indicates whether the webpage is using the microphone to capture audio.
- [setMicrophoneCaptureState(\_:)](setmicrophonecapturestate%28__%29.md): Changes whether the webpage is using the microphone to capture audio.

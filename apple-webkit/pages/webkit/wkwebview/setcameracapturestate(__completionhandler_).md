> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/setcameracapturestate(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/setcameracapturestate(_:completionhandler:))

# setCameraCaptureState(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Changes whether the webpage is using the camera to capture images or video.

## Declaration

```swift
func setCameraCaptureState(_ state: WKMediaCaptureState, completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func setCameraCaptureState(_ state: WKMediaCaptureState) async
```

## Parameters

- `state`: An enumeration case that indicates whether the webpage should use the camera to capture images or video.
- `completionHandler`: A closure the system executes after changing whether the webpage is using the camera to capture images or video.

## See Also

### Managing the microphone and camera

- [cameraCaptureState](cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setMicrophoneCaptureState(\_:completionHandler:)](setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](../wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

# setCameraCaptureState:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Changes whether the webpage is using the camera to capture images or video.

## Declaration

```objectivec
- (void) setCameraCaptureState:(WKMediaCaptureState) state completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `state`: An enumeration case that indicates whether the webpage should use the camera to capture images or video.
- `completionHandler`: A closure the system executes after changing whether the webpage is using the camera to capture images or video.

## See Also

### Managing the microphone and camera

- [cameraCaptureState](cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setMicrophoneCaptureState:completionHandler:](setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](../wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

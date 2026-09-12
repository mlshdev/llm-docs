> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/cameracapturestate](https://developer.apple.com/documentation/webkit/wkwebview/cameracapturestate)

# cameraCaptureState (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration case that indicates whether the webpage is using the camera to capture images or video.

## Declaration

```swift
var cameraCaptureState: WKMediaCaptureState { get }
```

## See Also

### Managing the microphone and camera

- [microphoneCaptureState](microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState(\_:completionHandler:)](setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState(\_:completionHandler:)](setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](../wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

# cameraCaptureState (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration case that indicates whether the webpage is using the camera to capture images or video.

## Declaration

```objectivec
@property (nonatomic, readonly) WKMediaCaptureState cameraCaptureState;
```

## See Also

### Managing the microphone and camera

- [microphoneCaptureState](microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState:completionHandler:](setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState:completionHandler:](setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](../wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

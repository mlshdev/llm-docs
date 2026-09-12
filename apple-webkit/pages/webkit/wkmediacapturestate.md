> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkmediacapturestate](https://developer.apple.com/documentation/webkit/wkmediacapturestate)

# WKMediaCaptureState (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

## Declaration

```swift
enum WKMediaCaptureState
```

## Topics

### Constants

- [WKMediaCaptureState.active](wkmediacapturestate/active.md): The media device is actively capturing audio or video.
- [WKMediaCaptureState.muted](wkmediacapturestate/muted.md): The media device is muted, and not actively capturing audio or video.
- [WKMediaCaptureState.none](wkmediacapturestate/none.md): The media device is off.

### Initializers

- [init(rawValue:)](wkmediacapturestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the microphone and camera

- [cameraCaptureState](wkwebview/cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](wkwebview/microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState(\_:completionHandler:)](wkwebview/setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState(\_:completionHandler:)](wkwebview/setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.

# WKMediaCaptureState (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

## Declaration

```objectivec
enum WKMediaCaptureState : NSInteger;
```

## Topics

### Constants

- [WKMediaCaptureStateActive](wkmediacapturestate/active.md): The media device is actively capturing audio or video.
- [WKMediaCaptureStateMuted](wkmediacapturestate/muted.md): The media device is muted, and not actively capturing audio or video.
- [WKMediaCaptureStateNone](wkmediacapturestate/none.md): The media device is off.

## See Also

### Managing the microphone and camera

- [cameraCaptureState](wkwebview/cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](wkwebview/microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState:completionHandler:](wkwebview/setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState:completionHandler:](wkwebview/setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkmediacapturetype](https://developer.apple.com/documentation/webkit/wkmediacapturetype)

# WKMediaCaptureType (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration listing the types of media devices that can capture audio, video, or both.

## Declaration

```swift
enum WKMediaCaptureType
```

## Topics

### Constants

- [WKMediaCaptureType.camera](wkmediacapturetype/camera.md): A media device that can capture video.
- [WKMediaCaptureType.cameraAndMicrophone](wkmediacapturetype/cameraandmicrophone.md): A media device or devices that can capture audio and video.
- [WKMediaCaptureType.microphone](wkmediacapturetype/microphone.md): A media device that can capture audio.

### Initializers

- [init(rawValue:)](wkmediacapturetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting permissions

- [webView(\_:requestDeviceOrientationAndMotionPermissionFor:initiatedByFrame:decisionHandler:)](wkuidelegate/webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [webView(\_:requestMediaCapturePermissionFor:initiatedByFrame:type:decisionHandler:)](wkuidelegate/webview%28__requestmediacapturepermissionfor_initiatedbyframe_type_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.
- [WKPermissionDecision](wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.

# WKMediaCaptureType (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration listing the types of media devices that can capture audio, video, or both.

## Declaration

```objectivec
enum WKMediaCaptureType : NSInteger;
```

## Topics

### Constants

- [WKMediaCaptureTypeCamera](wkmediacapturetype/camera.md): A media device that can capture video.
- [WKMediaCaptureTypeCameraAndMicrophone](wkmediacapturetype/cameraandmicrophone.md): A media device or devices that can capture audio and video.
- [WKMediaCaptureTypeMicrophone](wkmediacapturetype/microphone.md): A media device that can capture audio.

## See Also

### Requesting permissions

- [webView:requestDeviceOrientationAndMotionPermissionForOrigin:initiatedByFrame:decisionHandler:](wkuidelegate/webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [webView:requestMediaCapturePermissionForOrigin:initiatedByFrame:type:decisionHandler:](wkuidelegate/webview%28__requestmediacapturepermissionfor_initiatedbyframe_type_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.
- [WKPermissionDecision](wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.

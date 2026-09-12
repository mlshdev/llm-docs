> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpermissiondecision](https://developer.apple.com/documentation/webkit/wkpermissiondecision)

# WKPermissionDecision (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration of possible permission decisions for device resource access.

## Declaration

```swift
enum WKPermissionDecision
```

## Topics

### Constants

- [WKPermissionDecision.deny](wkpermissiondecision/deny.md): Deny permission for the requested resource.
- [WKPermissionDecision.grant](wkpermissiondecision/grant.md): Grant permission for the requested resource.
- [WKPermissionDecision.prompt](wkpermissiondecision/prompt.md): Prompt the user for permission for the requested resource.

### Initializers

- [init(rawValue:)](wkpermissiondecision/init%28rawvalue_%29.md)

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
- [WKMediaCaptureType](wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

# WKPermissionDecision (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An enumeration of possible permission decisions for device resource access.

## Declaration

```objectivec
enum WKPermissionDecision : NSInteger;
```

## Topics

### Constants

- [WKPermissionDecisionDeny](wkpermissiondecision/deny.md): Deny permission for the requested resource.
- [WKPermissionDecisionGrant](wkpermissiondecision/grant.md): Grant permission for the requested resource.
- [WKPermissionDecisionPrompt](wkpermissiondecision/prompt.md): Prompt the user for permission for the requested resource.

## See Also

### Requesting permissions

- [webView:requestDeviceOrientationAndMotionPermissionForOrigin:initiatedByFrame:decisionHandler:](wkuidelegate/webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [webView:requestMediaCapturePermissionForOrigin:initiatedByFrame:type:decisionHandler:](wkuidelegate/webview%28__requestmediacapturepermissionfor_initiatedbyframe_type_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.
- [WKMediaCaptureType](wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

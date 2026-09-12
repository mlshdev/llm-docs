> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:requestmediacapturepermissionfor:initiatedbyframe:type:decisionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:requestmediacapturepermissionfor:initiatedbyframe:type:decisionhandler:))

# webView(\_:requestMediaCapturePermissionFor:initiatedByFrame:type:decisionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.

## Declaration

```swift
optional func webView(_ webView: WKWebView, requestMediaCapturePermissionFor origin: WKSecurityOrigin, initiatedByFrame frame: WKFrameInfo, type: WKMediaCaptureType, decisionHandler: @escaping @MainActor @Sendable (WKPermissionDecision) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, decideMediaCapturePermissionsFor origin: WKSecurityOrigin, initiatedBy frame: WKFrameInfo, type: WKMediaCaptureType) async -> WKPermissionDecision
```

## Parameters

- `webView`: The web view requesting permission for microphone audio and camera video.
- `origin`: An object that identifies the host name, protocol, and port number for a web resource.
- `frame`: The frame that initiates the request in the web view.
- `type`: An enumeration case representing a type of media capture device, like a microphone or camera.
- `decisionHandler`: A closure that you call from your delegate method. Pass the permission decision you determine to the closure.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method in your delegate, the system returns [WKPermissionDecision.prompt](../wkpermissiondecision/prompt.md).

## See Also

### Requesting permissions

- [webView(\_:requestDeviceOrientationAndMotionPermissionFor:initiatedByFrame:decisionHandler:)](webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [WKPermissionDecision](../wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.
- [WKMediaCaptureType](../wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

# webView:requestMediaCapturePermissionForOrigin:initiatedByFrame:type:decisionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView requestMediaCapturePermissionForOrigin:(WKSecurityOrigin *) origin initiatedByFrame:(WKFrameInfo *) frame type:(WKMediaCaptureType) type decisionHandler:(void (^)(enum WKPermissionDecision)) decisionHandler;
```

## Parameters

- `webView`: The web view requesting permission for microphone audio and camera video.
- `origin`: An object that identifies the host name, protocol, and port number for a web resource.
- `frame`: The frame that initiates the request in the web view.
- `type`: An enumeration case representing a type of media capture device, like a microphone or camera.
- `decisionHandler`: A closure that you call from your delegate method. Pass the permission decision you determine to the closure.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method in your delegate, the system returns [WKPermissionDecisionPrompt](../wkpermissiondecision/prompt.md).

## See Also

### Requesting permissions

- [webView:requestDeviceOrientationAndMotionPermissionForOrigin:initiatedByFrame:decisionHandler:](webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [WKPermissionDecision](../wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.
- [WKMediaCaptureType](../wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

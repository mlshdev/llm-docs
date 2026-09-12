> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/devicesensorauthorization/init(decisionhandler:)](https://developer.apple.com/documentation/webkit/webpage/devicesensorauthorization/init(decisionhandler:))

# init(decisionHandler:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a new `DeviceSensorAuthorization` using the specified policy.

## Declaration

```swift
init(decisionHandler: @escaping (WebPage.DeviceSensorAuthorization.Permission, WebPage.FrameInfo, WKSecurityOrigin) async -> WKPermissionDecision)
```

## Parameters

- `decisionHandler`: A closure which decides the permission decision for an authorization request, which may be based on the kind of permission, the webpage frame information, or the security origin.

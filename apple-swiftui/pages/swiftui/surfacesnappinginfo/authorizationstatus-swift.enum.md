> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum](https://developer.apple.com/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.enum)

# SurfaceSnappingInfo.AuthorizationStatus

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

A type representing whether the user has granted permissions to provide more detailed information about the surface a scene is snapped to.

## Declaration

```swift
enum AuthorizationStatus
```

<a id="overview"></a>

## Overview

To provide `ARKit/SurfaceClassification` data, the user must allow the app to access information about their surroundings. To request this data, set `UIWantsDetailedSurfaceInfo` to `YES` and set `NSWorldSensingUsageDescription` to provide a description of why your app is requesting this information. These values are set in your app’s `Info.plist` file.

## Topics

### Enumeration Cases

- [SurfaceSnappingInfo.AuthorizationStatus.authorized](authorizationstatus-swift.enum/authorized.md): The user has authorized sharing information about their surroundings.
- [SurfaceSnappingInfo.AuthorizationStatus.denied](authorizationstatus-swift.enum/denied.md): The user denied providing access to information about their surroundings.
- [SurfaceSnappingInfo.AuthorizationStatus.notDetermined](authorizationstatus-swift.enum/notdetermined.md): The user has not yet authorized or denied providing information about their surroundings. Set `UIWantsDetailedSurfaceInfo` to `YES` in your `Info.plist` to request information about the user’s surroundings when they first snap a scene from your app.
- [SurfaceSnappingInfo.AuthorizationStatus.restricted](authorizationstatus-swift.enum/restricted.md): The user is unable to grant authorization to share detailed information about their surroundings.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

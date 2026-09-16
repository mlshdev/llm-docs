> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/surfacesnappinginfo/authorizationstatus-swift.type.property

# authorizationStatus

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 26.0+

A value that represents whether the user has authorized providing more detailed information about the surface scenes are snapped to. To request this detailed surface information, in your `Info.plist` file, set `UIWantsDetailedSurfaceInfo` to `YES` and set `NSWorldSensingUsageDescription` to provide a description of why your app is requesting this information.

## Declaration

```swift
static var authorizationStatus: SurfaceSnappingInfo.AuthorizationStatus { get }
```

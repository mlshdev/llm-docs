> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/collisioncomponent/collisionoptions-swift.struct/fullcontactinformation

# fullContactInformation

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Reports full contact information for collision events.

## Declaration

```swift
static let fullContactInformation: CollisionComponent.CollisionOptions
```

<a id="discussion"></a>

## Discussion

> **Note**

> This does not work with triggers because triggers do not have contact information.

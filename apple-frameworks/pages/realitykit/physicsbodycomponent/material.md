> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsbodycomponent/material

# material

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The physics body’s material properties, like friction.

## Declaration

```swift
var material: PhysicsMaterialResource
```

<a id="discussion"></a>

## Discussion

By default, the body’s material resource is set to [default](../physicsmaterialresource/default.md), which provides a modest amount of friction and restitution (bounciness).

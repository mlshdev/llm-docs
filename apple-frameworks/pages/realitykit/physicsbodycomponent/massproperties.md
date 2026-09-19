> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsbodycomponent/massproperties

# massProperties

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The physics body’s mass properties, like inertia and center of mass.

## Declaration

```swift
var massProperties: PhysicsMassProperties
```

<a id="discussion"></a>

## Discussion

By default, the mass properties value is [default](../physicsmassproperties/default.md), which matches the properties of a unit sphere with mass of 1 kilogram.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothbodycomponent/targetshape/positionconstraint/init(position:stiffness:)

# init(position:stiffness:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a position constraint with the given target position and stiffness.

## Declaration

```swift
init(position: SIMD3<Float>, stiffness: Float)
```

## Parameters

- `position`: The target position to pull the particle towards.
- `stiffness`: The stiffness with which the particle is pulled towards `position`.

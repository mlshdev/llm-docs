> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsfixedjoint/init(pin0:pin1:)

# init(pin0:pin1:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new fixed joint.

## Declaration

```swift
init(pin0: GeometricPin, pin1: GeometricPin)
```

## Parameters

- `pin0`: The local position and orientation on the first entity.
- `pin1`: The local position and orientation on the second entity.

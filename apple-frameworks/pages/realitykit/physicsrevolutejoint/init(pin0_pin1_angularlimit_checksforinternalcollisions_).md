> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsrevolutejoint/init(pin0:pin1:angularlimit:checksforinternalcollisions:)](https://developer.apple.com/documentation/realitykit/physicsrevolutejoint/init(pin0:pin1:angularlimit:checksforinternalcollisions:))

# init(pin0:pin1:angularLimit:checksForInternalCollisions:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new revolute joint.

## Declaration

```swift
init(pin0: GeometricPin, pin1: GeometricPin, angularLimit: ClosedRange<Float>? = nil, checksForInternalCollisions: Bool = false)
```

## Parameters

- `pin0`: The local position and orientation on the first entity.
- `pin1`: The local position and orientation on the second entity.
- `angularLimit`: Limits of the rotation around the pin’s x-axis if defined.
- `checksForInternalCollisions`: A Boolean that indicates whether the joint checks for collisions between the two [Entity](../entity.md) instances.

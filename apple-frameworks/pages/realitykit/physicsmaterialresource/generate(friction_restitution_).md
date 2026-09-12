> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmaterialresource/generate(friction:restitution:)](https://developer.apple.com/documentation/realitykit/physicsmaterialresource/generate(friction:restitution:))

# generate(friction:restitution:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Generates a new material with the given characteristics.

## Declaration

```swift
@MainActor @preconcurrency static func generate(friction: Float = 0.8, restitution: Float = 0.8) -> PhysicsMaterialResource
```

## Parameters

- `friction`: The coefficient of friction, in the range `[0, infinity)`.
- `restitution`: The coefficient of restitution, in the range `[0, 1]`. Use values at the high end of the range to indicate materials that experience elastic collisions, meaning that objects bounce off each other and kinetic energy is conserved after a collision. Use low values to indicate materials that lose kinetic energy when they collide.

<a id="return-value"></a>

## Return Value

A physics material resource.

## See Also

### Creating a custom material resource

- [generate(staticFriction:dynamicFriction:restitution:)](generate%28staticfriction_dynamicfriction_restitution_%29.md): Creates a new material with the specified static friction, dynamic friction, and restitution.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmaterialresource/generate(staticfriction:dynamicfriction:restitution:)](https://developer.apple.com/documentation/realitykit/physicsmaterialresource/generate(staticfriction:dynamicfriction:restitution:))

# generate(staticFriction:dynamicFriction:restitution:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 26.0+ · visionOS

Creates a new material with the specified static friction, dynamic friction, and restitution.

## Declaration

```swift
@MainActor @preconcurrency static func generate(staticFriction: Float, dynamicFriction: Float, restitution: Float) -> PhysicsMaterialResource
```

## Parameters

- `staticFriction`: The static (stationary) friction coefficient in the range \[0, ∞).
- `dynamicFriction`: The dynamic (moving) friction coefficient in the range \[0, ∞).
- `restitution`: The coefficient of restitution (bounciness) in the range \[0, 1\].

## See Also

### Creating a custom material resource

- [generate(friction:restitution:)](generate%28friction_restitution_%29.md): Generates a new material with the given characteristics.

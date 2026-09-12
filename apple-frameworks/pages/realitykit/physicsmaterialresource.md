> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmaterialresource](https://developer.apple.com/documentation/realitykit/physicsmaterialresource)

# PhysicsMaterialResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Material properties, like friction, of a physically simulated object.

## Declaration

```swift
@MainActor @preconcurrency class PhysicsMaterialResource
```

## Topics

### Using the default material resource

- [default](physicsmaterialresource/default.md): A default material resource.

### Creating a custom material resource

- [generate(friction:restitution:)](physicsmaterialresource/generate%28friction_restitution_%29.md): Generates a new material with the given characteristics.
- [generate(staticFriction:dynamicFriction:restitution:)](physicsmaterialresource/generate%28staticfriction_dynamicfriction_restitution_%29.md): Creates a new material with the specified static friction, dynamic friction, and restitution.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Physical properties

- [PhysicsBodyComponent](physicsbodycomponent.md): A component that defines an entity’s behavior in physics body simulations.
- [PhysicsBodyMode](physicsbodymode.md): The ways that a physics body can move in response to physical forces.
- [PhysicsMassProperties](physicsmassproperties.md): Mass properties of a physics body.

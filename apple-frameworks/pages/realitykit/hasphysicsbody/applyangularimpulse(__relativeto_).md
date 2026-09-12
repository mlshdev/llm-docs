> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody/applyangularimpulse(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hasphysicsbody/applyangularimpulse(_:relativeto:))

# applyAngularImpulse(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Applies an angular (torque) impulse to the physics body at its center of mass.

## Declaration

```swift
@MainActor @preconcurrency func applyAngularImpulse(_ impulse: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `impulse`: An angular impulse in kilogram square meters per second.
- `referenceEntity`: The reference entity that defines the coordinate space in which `impulse` is defined.

## See Also

### Applying impulses

- [applyLinearImpulse(\_:relativeTo:)](applylinearimpulse%28__relativeto_%29.md): Applies an impulse to the physics body at its center of mass.
- [applyImpulse(\_:at:relativeTo:)](applyimpulse%28__at_relativeto_%29.md): Applies an impulse to the physics body at the specified position.

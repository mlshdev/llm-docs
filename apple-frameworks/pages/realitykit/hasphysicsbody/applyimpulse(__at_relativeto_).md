> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hasphysicsbody/applyimpulse(_:at:relativeto:)

# applyImpulse(\_:at:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Applies an impulse to the physics body at the specified position.

## Declaration

```swift
@MainActor @preconcurrency func applyImpulse(_ impulse: SIMD3<Float>, at position: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `impulse`: An impulse in newton seconds.
- `position`: The position at which to apply the impulse.
- `referenceEntity`: The reference entity that defines the coordinate space in which `position` and `impulse` are defined.

## See Also

### Applying impulses

- [applyLinearImpulse(\_:relativeTo:)](applylinearimpulse%28__relativeto_%29.md): Applies an impulse to the physics body at its center of mass.
- [applyAngularImpulse(\_:relativeTo:)](applyangularimpulse%28__relativeto_%29.md): Applies an angular (torque) impulse to the physics body at its center of mass.

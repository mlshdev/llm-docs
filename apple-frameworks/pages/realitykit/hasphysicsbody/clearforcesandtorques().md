> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hasphysicsbody/clearforcesandtorques()

# clearForcesAndTorques()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Clears all forces previously added to the physics body.

## Declaration

```swift
@MainActor @preconcurrency func clearForcesAndTorques()
```

## See Also

### Adding and clearing forces

- [addForce(\_:relativeTo:)](addforce%28__relativeto_%29.md): Applies a force to the physics body at its center of mass.
- [addForce(\_:at:relativeTo:)](addforce%28__at_relativeto_%29.md): Applies a force to the physics body at the specified position.
- [addTorque(\_:relativeTo:)](addtorque%28__relativeto_%29.md): Applies a torque to the physics body at its center of mass.

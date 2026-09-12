> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forcemode](https://developer.apple.com/documentation/realitykit/forcemode)

# ForceMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The options that control how physics system applies the forces.

## Declaration

```swift
enum ForceMode
```

<a id="overview"></a>

## Overview

`ForceMode` allows you to customize how the physics system applies the force-like vector quantity that you set via [setForce(\_:index:)](forceeffectparameters/setforce%28__index_%29.md) and [setTorque(\_:index:)](forceeffectparameters/settorque%28__index_%29.md). For example, [ForceMode.force](forcemode/force.md) indicates the vector quantity has the unit of force, which is the most common choice. You can use [ForceMode.acceleration](forcemode/acceleration.md) to exert a constant acceleration on rigid bodies regardless of their mass.

## Topics

### Enumeration Cases

- [ForceMode.acceleration](forcemode/acceleration.md): A direct adjustment to a body’s linear or angular acceleration, independent of its mass or inertia.
- [ForceMode.force](forcemode/force.md): A constant force or torque applied to a body, influencing motion over time.
- [ForceMode.impulse](forcemode/impulse.md): A direct adjustment to a body’s linear or angular momentum.
- [ForceMode.velocity](forcemode/velocity.md): A direct adjustment to a body’s linear or angular velocity, independent of its mass or inertia.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Custom forces

- [ForceEffectProtocol](forceeffectprotocol.md): A protocol that defines a custom force effect.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectBase](forceeffectbase.md): The base protocol for the wrapping force effect structure containing common parameters for all force-effects.

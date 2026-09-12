> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffect](https://developer.apple.com/documentation/realitykit/forceeffect)

# ForceEffect

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines a force effect’s system, and type specific properties.

## Declaration

```swift
struct ForceEffect<ForceEffectType> where ForceEffectType : ForceEffectProtocol
```

<a id="overview"></a>

## Overview

This struct wraps your custom force effect that conforms to [ForceEffectProtocol](forceeffectprotocol.md) and provides properties that are common to all force effects.

## Topics

### Initializers

- [init(effect:strengthScale:spatialFalloff:timedFalloff:position:orientation:mask:)](forceeffect/init%28effect_strengthscale_spatialfalloff_timedfalloff_position_orientation_mask_%29.md): Creates a ForceEffect struct.

### Instance Properties

- [effect](forceeffect/effect.md): Parameters that can vary for different types.
- [mask](forceeffect/mask.md): Controls which collision groups will be affected by this force effect.
- [orientation](forceeffect/orientation.md): Rotation of the force effect relative to the effect’s transform component.
- [position](forceeffect/position.md): Position of the force effect relative to the effect’s transform component.
- [spatialFalloff](forceeffect/spatialfalloff.md): Optional strength falloff based on the spatial bounds of the effect.
- [strengthScale](forceeffect/strengthscale.md): A multiplier that scales the strength of the effect.
- [timedFalloff](forceeffect/timedfalloff.md): Optional strength falloff based on the duration of the effect.

## Relationships

### Conforms To

- [ForceEffectBase](forceeffectbase.md)

## See Also

### Force effect components

- [ForceEffectComponent](forceeffectcomponent.md): A component that defines the forces that affect an entity, including custom forces that you define.

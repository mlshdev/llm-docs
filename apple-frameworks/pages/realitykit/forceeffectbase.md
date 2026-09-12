> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectbase](https://developer.apple.com/documentation/realitykit/forceeffectbase)

# ForceEffectBase

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The base protocol for the wrapping force effect structure containing common parameters for all force-effects.

## Declaration

```swift
protocol ForceEffectBase
```

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself. Create force effects by calling methods on [ForceEffect](forceeffect.md).

## Topics

### Associated Types

- [ForceEffectType](forceeffectbase/forceeffecttype.md): A type that represents the kind of force effect.

### Instance Properties

- [effect](forceeffectbase/effect.md): Custom force effect parameters.
- [mask](forceeffectbase/mask.md): Controls which collision groups will be affected by this force effect.
- [orientation](forceeffectbase/orientation.md): Rotation of the force effect relative to the effect’s transform component.
- [position](forceeffectbase/position.md): Position of the force effect relative to the effect’s transform component.
- [spatialFalloff](forceeffectbase/spatialfalloff.md): Optional strength falloff based on the spatial bounds of the effect.
- [strengthScale](forceeffectbase/strengthscale.md): A multiplier that scales the strength of the effect.
- [timedFalloff](forceeffectbase/timedfalloff.md): Optional strength falloff based on the duration of the effect.

## Relationships

### Conforming Types

- [ForceEffect](forceeffect.md)

## See Also

### Custom forces

- [ForceEffectProtocol](forceeffectprotocol.md): A protocol that defines a custom force effect.
- [ForceMode](forcemode.md): The options that control how physics system applies the forces.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.

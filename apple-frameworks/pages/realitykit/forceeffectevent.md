> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectevent](https://developer.apple.com/documentation/realitykit/forceeffectevent)

# ForceEffectEvent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A struct that defines the arguments to the custom force effect update closure.

## Declaration

```swift
struct ForceEffectEvent<ForceEffectType> where ForceEffectType : ForceEffectProtocol
```

<a id="overview"></a>

## Overview

If you register your custom force effect using a closure, you can access the force effect’s property and [ForceEffectParameters](forceeffectparameters.md) from this struct.

## Topics

### Instance Properties

- [effect](forceeffectevent/effect.md): The force effect to update.
- [parameters](forceeffectevent/parameters.md): Physics body parameters.

## See Also

### Updating effects

- [update(parameters:)](forceeffectprotocol/update%28parameters_%29.md): Defines how the custom force effect computes forces at each physics simulation step.
- [register(\_:)](forceeffectprotocol/register%28__%29-1zt9t.md): Registers the custom effect.
- [PhysicsBodyParameterTypes](physicsbodyparametertypes.md): Defines which rigid body inputs are required by a force effect’s update handler.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [UnsafeForceEffectBuffer](unsafeforceeffectbuffer.md): Provides access to physics body parameters from the effect’s update function or event handler.

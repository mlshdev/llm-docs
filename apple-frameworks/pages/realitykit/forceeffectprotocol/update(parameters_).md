> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectprotocol/update(parameters:)](https://developer.apple.com/documentation/realitykit/forceeffectprotocol/update(parameters:))

# update(parameters:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines how the custom force effect computes forces at each physics simulation step.

## Declaration

```swift
func update(parameters: inout ForceEffectParameters)
```

## Parameters

- `parameters`: On input, the rigid body parameters declared in [parameterTypes](parametertypes.md). On output, the computed forces and torques.

## Default Implementations

### ForceEffectProtocol Implementations

- [update(parameters:)](update%28parameters_%29-3gvs6.md): Outputs zero forces and torques by default.

## See Also

### Updating effects

- [register(\_:)](register%28__%29-1zt9t.md): Registers the custom effect.
- [PhysicsBodyParameterTypes](../physicsbodyparametertypes.md): Defines which rigid body inputs are required by a force effect’s update handler.
- [ForceEffectParameters](../forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectEvent](../forceeffectevent.md): A struct that defines the arguments to the custom force effect update closure.
- [UnsafeForceEffectBuffer](../unsafeforceeffectbuffer.md): Provides access to physics body parameters from the effect’s update function or event handler.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectprotocol/register(_:)-1zt9t](https://developer.apple.com/documentation/realitykit/forceeffectprotocol/register(_:)-1zt9t)

# register(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Registers the custom effect.

## Declaration

```swift
@MainActor @preconcurrency static func register(_ updateHandler: (@MainActor (inout ForceEffectEvent<Self>) -> Void)? = nil)
```

## Parameters

- `updateHandler`: A closure that computes custom forces for rigid bodies.

<a id="discussion"></a>

## Discussion

If a handler is specified, the physics system calls the handler and ignores the update function.

## See Also

### Updating effects

- [update(parameters:)](update%28parameters_%29.md): Defines how the custom force effect computes forces at each physics simulation step.
- [PhysicsBodyParameterTypes](../physicsbodyparametertypes.md): Defines which rigid body inputs are required by a force effect’s update handler.
- [ForceEffectParameters](../forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectEvent](../forceeffectevent.md): A struct that defines the arguments to the custom force effect update closure.
- [UnsafeForceEffectBuffer](../unsafeforceeffectbuffer.md): Provides access to physics body parameters from the effect’s update function or event handler.

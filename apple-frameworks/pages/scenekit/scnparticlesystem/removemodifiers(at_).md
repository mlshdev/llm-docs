> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/removemodifiers(at:)](https://developer.apple.com/documentation/scenekit/scnparticlesystem/removemodifiers(at:))

# removeModifiers(at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes particle modifier blocks for the specified stage of the particle simulation.

## Declaration

```swift
func removeModifiers(at stage: SCNParticleModifierStage)
```

## Parameters

- `stage`: The stage of SceneKit’s particle simulation during which to call the block. See [SCNParticleModifierStage](../scnparticlemodifierstage.md) for allowed values.

## See Also

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeAllModifiers()](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.

# removeModifiersOfStage: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Removes particle modifier blocks for the specified stage of the particle simulation.

## Declaration

```objectivec
- (void) removeModifiersOfStage:(SCNParticleModifierStage) stage;
```

## Parameters

- `stage`: The stage of SceneKit’s particle simulation during which to call the block. See [SCNParticleModifierStage](../scnparticlemodifierstage.md) for allowed values.

## See Also

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeAllModifiers](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.

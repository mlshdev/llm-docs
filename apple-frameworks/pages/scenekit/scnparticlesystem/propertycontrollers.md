> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/propertycontrollers](https://developer.apple.com/documentation/scenekit/scnparticlesystem/propertycontrollers)

# propertyControllers (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.

## Declaration

```swift
var propertyControllers: [SCNParticleSystem.ParticleProperty : SCNParticlePropertyController]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each key in this dictionary is one of the constants listed in `Particle Property Keys`, and the value for each key is a [SCNParticlePropertyController](../scnparticlepropertycontroller.md) object responsible for varying that property over time. Use particle property controllers to add efficient animations that change the appearance or behavior of each particle emitted by the system.

To add more complex behavior that cannot be described by a [SCNParticlePropertyController](../scnparticlepropertycontroller.md) object, use the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) to add a particle modifier block. However, be aware that particle modifier blocks can severely impact rendering performance.

## See Also

### Modifying Particles Over Time

- [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiers(at:)](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.

# propertyControllers (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,SCNParticlePropertyController *> * propertyControllers;
```

<a id="Discussion"></a>

## Discussion

Each key in this dictionary is one of the constants listed in `Particle Property Keys`, and the value for each key is a [SCNParticlePropertyController](../scnparticlepropertycontroller.md) object responsible for varying that property over time. Use particle property controllers to add efficient animations that change the appearance or behavior of each particle emitted by the system.

To add more complex behavior that cannot be described by a [SCNParticlePropertyController](../scnparticlepropertycontroller.md) object, use the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) to add a particle modifier block. However, be aware that particle modifier blocks can severely impact rendering performance.

## See Also

### Modifying Particles Over Time

- [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiersOfStage:](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.

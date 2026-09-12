> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/addmodifier(forproperties:at:modifier:)](https://developer.apple.com/documentation/scenekit/scnparticlesystem/addmodifier(forproperties:at:modifier:))

# addModifier(forProperties:at:modifier:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.

## Declaration

```swift
func addModifier(forProperties properties: [SCNParticleSystem.ParticleProperty], at stage: SCNParticleModifierStage, modifier block: @escaping SCNParticleModifierBlock)
```

## Parameters

- `properties`: An array containing one or more of the constants listed in `Particle Property Keys`, each of which specifies a property of the appearance or behaviors of particles in the particle system.
- `stage`: The stage of SceneKit’s particle simulation during which to call the block. See [SCNParticleModifierStage](../scnparticlemodifierstage.md) for allowed values.
- `block`: A [SCNParticleModifierBlock](../scnparticlemodifierblock.md) block to be called every time SceneKit renders a frame. In this block you can modify the properties of all particles in the system.

<a id="Discussion"></a>

## Discussion

By associating a block with one or more particle properties, you can run arbitrary code that modifies those properties during each frame of animation. This option provides maximum flexibility for changing the appearance or behavior of particles over time.

> **Important**

>  Running your own code to update particle properties every frame can have a severe impact on rendering performance. If the behavior over time that you want for your particle system can be described more declaratively, use the [propertyControllers](propertycontrollers.md) property and [SCNParticlePropertyController](../scnparticlepropertycontroller.md) class instead. If you need to change particle properties only at certain times (rather than continuously), add a handler block for an event using the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) method.

## See Also

### Related Documentation

- [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [removeModifiers(at:)](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.

# addModifierForProperties:atStage:withBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.

## Declaration

```objectivec
- (void) addModifierForProperties:(NSArray<NSString *> *) properties atStage:(SCNParticleModifierStage) stage withBlock:(SCNParticleModifierBlock) block;
```

## Parameters

- `properties`: An array containing one or more of the constants listed in `Particle Property Keys`, each of which specifies a property of the appearance or behaviors of particles in the particle system.
- `stage`: The stage of SceneKit’s particle simulation during which to call the block. See [SCNParticleModifierStage](../scnparticlemodifierstage.md) for allowed values.
- `block`: A [SCNParticleModifierBlock](../scnparticlemodifierblock.md) block to be called every time SceneKit renders a frame. In this block you can modify the properties of all particles in the system.

<a id="Discussion"></a>

## Discussion

By associating a block with one or more particle properties, you can run arbitrary code that modifies those properties during each frame of animation. This option provides maximum flexibility for changing the appearance or behavior of particles over time.

> **Important**

>  Running your own code to update particle properties every frame can have a severe impact on rendering performance. If the behavior over time that you want for your particle system can be described more declaratively, use the [propertyControllers](propertycontrollers.md) property and [SCNParticlePropertyController](../scnparticlepropertycontroller.md) class instead. If you need to change particle properties only at certain times (rather than continuously), add a handler block for an event using the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) method.

## See Also

### Related Documentation

- [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [removeModifiersOfStage:](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.

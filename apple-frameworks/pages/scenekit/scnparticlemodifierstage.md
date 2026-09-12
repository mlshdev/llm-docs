> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlemodifierstage](https://developer.apple.com/documentation/scenekit/scnparticlemodifierstage)

# SCNParticleModifierStage (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

## Declaration

```swift
enum SCNParticleModifierStage
```

## Topics

### Constants

- [SCNParticleModifierStage.preDynamics](scnparticlemodifierstage/predynamics.md): The stage before SceneKit simulates the motion of particles.
- [SCNParticleModifierStage.postDynamics](scnparticlemodifierstage/postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStage.preCollision](scnparticlemodifierstage/precollision.md): The stage before SceneKit simulates the results of collisions between particles and scene geometry.
- [SCNParticleModifierStage.postCollision](scnparticlemodifierstage/postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.

### Initializers

- [init(rawValue:)](scnparticlemodifierstage/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiers(at:)](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierBlock](scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

# SCNParticleModifierStage (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

## Declaration

```objectivec
enum SCNParticleModifierStage : NSInteger;
```

## Topics

### Constants

- [SCNParticleModifierStagePreDynamics](scnparticlemodifierstage/predynamics.md): The stage before SceneKit simulates the motion of particles.
- [SCNParticleModifierStagePostDynamics](scnparticlemodifierstage/postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStagePreCollision](scnparticlemodifierstage/precollision.md): The stage before SceneKit simulates the results of collisions between particles and scene geometry.
- [SCNParticleModifierStagePostCollision](scnparticlemodifierstage/postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.

## See Also

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiersOfStage:](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierBlock](scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

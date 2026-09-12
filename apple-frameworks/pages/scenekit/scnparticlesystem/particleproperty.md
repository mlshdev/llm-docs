> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleproperty](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleproperty)

# SCNParticleSystem.ParticleProperty (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) methods.

## Declaration

```swift
struct ParticleProperty
```

## Topics

### Type Properties

- [angle](particleproperty/angle.md): The rotation angle, in radians, of the particle about its axis.
- [angularVelocity](particleproperty/angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [bounce](particleproperty/bounce.md): The particle’s restitution coefficient.
- [charge](particleproperty/charge.md): The particle’s electric charge, in coulombs.
- [color](particleproperty/color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [contactNormal](particleproperty/contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [contactPoint](particleproperty/contactpoint.md): The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [frame](particleproperty/frame.md): The current frame index of the particle’s image animation.
- [frameRate](particleproperty/framerate.md): The rate, in frames per second, of the particle’s image animation.
- [friction](particleproperty/friction.md): The particle’s friction coefficient.
- [life](particleproperty/life.md): The remaining time in the particle’s life span, in seconds.
- [opacity](particleproperty/opacity.md): The particle’s opacity (or alpha value).
- [position](particleproperty/position.md): The particle’s position vector in scene coordinate space.
- [rotationAxis](particleproperty/rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [size](particleproperty/size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [velocity](particleproperty/velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

### Initializers

- [init(rawValue:)](particleproperty/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiers(at:)](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](addmodifier%28forproperties_at_modifier_%29.md) method.

# SCNParticleProperty (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Keys identifying properties of individual particles, used by the [propertyControllers](propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) methods.

## Declaration

```objectivec
typedef NSString * SCNParticleProperty;
```

## Topics

### Type Properties

- [SCNParticlePropertyAngle](particleproperty/angle.md): The rotation angle, in radians, of the particle about its axis.
- [SCNParticlePropertyAngularVelocity](particleproperty/angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [SCNParticlePropertyBounce](particleproperty/bounce.md): The particle’s restitution coefficient.
- [SCNParticlePropertyCharge](particleproperty/charge.md): The particle’s electric charge, in coulombs.
- [SCNParticlePropertyColor](particleproperty/color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [SCNParticlePropertyContactNormal](particleproperty/contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [SCNParticlePropertyContactPoint](particleproperty/contactpoint.md): The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [SCNParticlePropertyFrame](particleproperty/frame.md): The current frame index of the particle’s image animation.
- [SCNParticlePropertyFrameRate](particleproperty/framerate.md): The rate, in frames per second, of the particle’s image animation.
- [SCNParticlePropertyFriction](particleproperty/friction.md): The particle’s friction coefficient.
- [SCNParticlePropertyLife](particleproperty/life.md): The remaining time in the particle’s life span, in seconds.
- [SCNParticlePropertyOpacity](particleproperty/opacity.md): The particle’s opacity (or alpha value).
- [SCNParticlePropertyPosition](particleproperty/position.md): The particle’s position vector in scene coordinate space.
- [SCNParticlePropertyRotationAxis](particleproperty/rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [SCNParticlePropertySize](particleproperty/size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [SCNParticlePropertyVelocity](particleproperty/velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

## See Also

### Modifying Particles Over Time

- [propertyControllers](propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiersOfStage:](removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleModifierStage](../scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](../scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](addmodifier%28forproperties_at_modifier_%29.md) method.

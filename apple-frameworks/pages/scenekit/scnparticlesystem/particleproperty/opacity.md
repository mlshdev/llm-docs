> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleproperty/opacity](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleproperty/opacity)

# opacity (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The particle’s opacity (or alpha value).

## Declaration

```swift
static let opacity: SCNParticleSystem.ParticleProperty
```

<a id="Discussion"></a>

## Discussion

This property’s value is a floating-point scalar (an [NSNumber](../../../foundation/nsnumber.md) object for particle property controllers, or a single `float` value for particle event or modifier blocks).

This property controls the same alpha value as the [color](color.md) property. Use this property when you want to modify particle opacity without modifying color, or when you want to use opacity as the input for a [SCNParticlePropertyController](../../scnparticlepropertycontroller.md) object.

The particle system’s [particleColor](../particlecolor.md) and [particleColorVariation](../particlecolorvariation.md) properties determine the initial alpha value for each particle.

## See Also

### Type Properties

- [angle](angle.md): The rotation angle, in radians, of the particle about its axis.
- [angularVelocity](angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [bounce](bounce.md): The particle’s restitution coefficient.
- [charge](charge.md): The particle’s electric charge, in coulombs.
- [color](color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [contactNormal](contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [contactPoint](contactpoint.md): The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [frame](frame.md): The current frame index of the particle’s image animation.
- [frameRate](framerate.md): The rate, in frames per second, of the particle’s image animation.
- [friction](friction.md): The particle’s friction coefficient.
- [life](life.md): The remaining time in the particle’s life span, in seconds.
- [position](position.md): The particle’s position vector in scene coordinate space.
- [rotationAxis](rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [size](size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [velocity](velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

# SCNParticlePropertyOpacity (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The particle’s opacity (or alpha value).

## Declaration

```objectivec
extern SCNParticleProperty const SCNParticlePropertyOpacity;
```

<a id="Discussion"></a>

## Discussion

This property’s value is a floating-point scalar (an [NSNumber](../../../foundation/nsnumber.md) object for particle property controllers, or a single `float` value for particle event or modifier blocks).

This property controls the same alpha value as the [SCNParticlePropertyColor](color.md) property. Use this property when you want to modify particle opacity without modifying color, or when you want to use opacity as the input for a [SCNParticlePropertyController](../../scnparticlepropertycontroller.md) object.

The particle system’s [particleColor](../particlecolor.md) and [particleColorVariation](../particlecolorvariation.md) properties determine the initial alpha value for each particle.

## See Also

### Type Properties

- [SCNParticlePropertyAngle](angle.md): The rotation angle, in radians, of the particle about its axis.
- [SCNParticlePropertyAngularVelocity](angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [SCNParticlePropertyBounce](bounce.md): The particle’s restitution coefficient.
- [SCNParticlePropertyCharge](charge.md): The particle’s electric charge, in coulombs.
- [SCNParticlePropertyColor](color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [SCNParticlePropertyContactNormal](contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [SCNParticlePropertyContactPoint](contactpoint.md): The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [SCNParticlePropertyFrame](frame.md): The current frame index of the particle’s image animation.
- [SCNParticlePropertyFrameRate](framerate.md): The rate, in frames per second, of the particle’s image animation.
- [SCNParticlePropertyFriction](friction.md): The particle’s friction coefficient.
- [SCNParticlePropertyLife](life.md): The remaining time in the particle’s life span, in seconds.
- [SCNParticlePropertyPosition](position.md): The particle’s position vector in scene coordinate space.
- [SCNParticlePropertyRotationAxis](rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [SCNParticlePropertySize](size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [SCNParticlePropertyVelocity](velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleproperty/contactpoint](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleproperty/contactpoint)

# contactPoint (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.

## Declaration

```swift
static let contactPoint: SCNParticleSystem.ParticleProperty
```

<a id="Discussion"></a>

## Discussion

The contact point property only applies to collision handler blocks (see the [handle(\_:forProperties:handler:)](../handle%28__forproperties_handler_%29.md) method and [SCNParticleEvent.collision](../../scnparticleevent/collision.md) constant). Its value is a three-component vector (an array of three `float` values).

## See Also

### Type Properties

- [angle](angle.md): The rotation angle, in radians, of the particle about its axis.
- [angularVelocity](angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [bounce](bounce.md): The particle’s restitution coefficient.
- [charge](charge.md): The particle’s electric charge, in coulombs.
- [color](color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [contactNormal](contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [frame](frame.md): The current frame index of the particle’s image animation.
- [frameRate](framerate.md): The rate, in frames per second, of the particle’s image animation.
- [friction](friction.md): The particle’s friction coefficient.
- [life](life.md): The remaining time in the particle’s life span, in seconds.
- [opacity](opacity.md): The particle’s opacity (or alpha value).
- [position](position.md): The particle’s position vector in scene coordinate space.
- [rotationAxis](rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [size](size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [velocity](velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

# SCNParticlePropertyContactPoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The location, in scene coordinate space, of a collision between a particle and a geometry in the scene.

## Declaration

```objectivec
extern SCNParticleProperty const SCNParticlePropertyContactPoint;
```

<a id="Discussion"></a>

## Discussion

The contact point property only applies to collision handler blocks (see the [handleEvent:forProperties:withBlock:](../handle%28__forproperties_handler_%29.md) method and [SCNParticleEventCollision](../../scnparticleevent/collision.md) constant). Its value is a three-component vector (an array of three `float` values).

## See Also

### Type Properties

- [SCNParticlePropertyAngle](angle.md): The rotation angle, in radians, of the particle about its axis.
- [SCNParticlePropertyAngularVelocity](angularvelocity.md): The particle’s angular velocity (or rate of spin), in radians per second.
- [SCNParticlePropertyBounce](bounce.md): The particle’s restitution coefficient.
- [SCNParticlePropertyCharge](charge.md): The particle’s electric charge, in coulombs.
- [SCNParticlePropertyColor](color.md): The particle’s tint color, as a vector of red, green, blue, and alpha component values.
- [SCNParticlePropertyContactNormal](contactnormal.md): The normal vector, in scene coordinate space, of a collision between a particle and a geometry in the scene.
- [SCNParticlePropertyFrame](frame.md): The current frame index of the particle’s image animation.
- [SCNParticlePropertyFrameRate](framerate.md): The rate, in frames per second, of the particle’s image animation.
- [SCNParticlePropertyFriction](friction.md): The particle’s friction coefficient.
- [SCNParticlePropertyLife](life.md): The remaining time in the particle’s life span, in seconds.
- [SCNParticlePropertyOpacity](opacity.md): The particle’s opacity (or alpha value).
- [SCNParticlePropertyPosition](position.md): The particle’s position vector in scene coordinate space.
- [SCNParticlePropertyRotationAxis](rotationaxis.md): The particle’s axis of rotation, expressed as a vector in the particle’s local coordinate space.
- [SCNParticlePropertySize](size.md): The width and height of the rendered particle image, in units of scene coordinate space.
- [SCNParticlePropertyVelocity](velocity.md): The particle’s velocity vector in units (of scene coordinate space) per second.

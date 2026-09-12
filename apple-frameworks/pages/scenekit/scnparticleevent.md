> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleevent](https://developer.apple.com/documentation/scenekit/scnparticleevent)

# SCNParticleEvent (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Significant events in the life spans of simulate particles, used by the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

## Declaration

```swift
enum SCNParticleEvent
```

## Topics

### Constants

- [SCNParticleEvent.birth](scnparticleevent/birth.md): Occurs when new particles spawn.
- [SCNParticleEvent.death](scnparticleevent/death.md): Occurs when particles reach the end of their life span.
- [SCNParticleEvent.collision](scnparticleevent/collision.md): Occurs when particles collide with scene geometry.

### Initializers

- [init(rawValue:)](scnparticleevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Particles in Response to Particle System Events

- [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.
- [SCNParticleEventBlock](scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

# SCNParticleEvent (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Significant events in the life spans of simulate particles, used by the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

## Declaration

```objectivec
enum SCNParticleEvent : NSInteger;
```

## Topics

### Constants

- [SCNParticleEventBirth](scnparticleevent/birth.md): Occurs when new particles spawn.
- [SCNParticleEventDeath](scnparticleevent/death.md): Occurs when particles reach the end of their life span.
- [SCNParticleEventCollision](scnparticleevent/collision.md): Occurs when particles collide with scene geometry.

## See Also

### Modifying Particles in Response to Particle System Events

- [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.
- [SCNParticleEventBlock](scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

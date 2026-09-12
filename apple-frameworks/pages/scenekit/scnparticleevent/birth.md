> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleevent/birth](https://developer.apple.com/documentation/scenekit/scnparticleevent/birth)

# SCNParticleEvent.birth (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Occurs when new particles spawn.

## Declaration

```swift
case birth
```

<a id="Discussion"></a>

## Discussion

Use a handler for this event to override the initial properties of each particle.

## See Also

### Constants

- [SCNParticleEvent.death](death.md): Occurs when particles reach the end of their life span.
- [SCNParticleEvent.collision](collision.md): Occurs when particles collide with scene geometry.

# SCNParticleEventBirth (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Occurs when new particles spawn.

## Declaration

```objectivec
SCNParticleEventBirth
```

<a id="Discussion"></a>

## Discussion

Use a handler for this event to override the initial properties of each particle.

## See Also

### Constants

- [SCNParticleEventDeath](death.md): Occurs when particles reach the end of their life span.
- [SCNParticleEventCollision](collision.md): Occurs when particles collide with scene geometry.

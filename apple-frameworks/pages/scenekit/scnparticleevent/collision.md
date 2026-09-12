> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleevent/collision](https://developer.apple.com/documentation/scenekit/scnparticleevent/collision)

# SCNParticleEvent.collision (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Occurs when particles collide with scene geometry.

## Declaration

```swift
case collision
```

<a id="Discussion"></a>

## Discussion

SceneKit calls your event handler block immediately after resolving the collision.

## See Also

### Constants

- [SCNParticleEvent.birth](birth.md): Occurs when new particles spawn.
- [SCNParticleEvent.death](death.md): Occurs when particles reach the end of their life span.

# SCNParticleEventCollision (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Occurs when particles collide with scene geometry.

## Declaration

```objectivec
SCNParticleEventCollision
```

<a id="Discussion"></a>

## Discussion

SceneKit calls your event handler block immediately after resolving the collision.

## See Also

### Constants

- [SCNParticleEventBirth](birth.md): Occurs when new particles spawn.
- [SCNParticleEventDeath](death.md): Occurs when particles reach the end of their life span.

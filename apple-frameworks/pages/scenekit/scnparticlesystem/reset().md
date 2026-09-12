> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/reset()](https://developer.apple.com/documentation/scenekit/scnparticlesystem/reset())

# reset() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the particle system to its initial state.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

Calling this method removes all currently live particles from the scene.

## See Also

### Controlling Particle Simulation

- [isLocal](islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [speedFactor](speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

# reset (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns the particle system to its initial state.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

Calling this method removes all currently live particles from the scene.

## See Also

### Controlling Particle Simulation

- [local](islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [speedFactor](speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

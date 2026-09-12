> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/removeallparticlesystems()](https://developer.apple.com/documentation/scenekit/scnscene/removeallparticlesystems())

# removeAllParticleSystems() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes any particle systems directly attached to the scene.

## Declaration

```swift
func removeAllParticleSystems()
```

<a id="Discussion"></a>

## Discussion

Calling this method does not remove particle systems attached to nodes within the scene.

## See Also

### Working with Particle Systems in the Scene

- [addParticleSystem(\_:transform:)](addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [particleSystems](particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem(\_:)](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.

# removeAllParticleSystems (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Removes any particle systems directly attached to the scene.

## Declaration

```objectivec
- (void) removeAllParticleSystems;
```

<a id="Discussion"></a>

## Discussion

Calling this method does not remove particle systems attached to nodes within the scene.

## See Also

### Working with Particle Systems in the Scene

- [addParticleSystem:withTransform:](addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [particleSystems](particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem:](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.

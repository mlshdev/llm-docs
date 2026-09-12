> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/removeparticlesystem(_:)](https://developer.apple.com/documentation/scenekit/scnnode/removeparticlesystem(_:))

# removeParticleSystem(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes a particle system attached to the node.

## Declaration

```swift
func removeParticleSystem(_ system: SCNParticleSystem)
```

## Parameters

- `system`: A particle system.

<a id="Discussion"></a>

## Discussion

This method has no effect if the `system` parameter does not reference a particle system directly attached to the node.

## See Also

### Working with Particle Systems

- [addParticleSystem(\_:)](addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [particleSystems](particlesystems.md): The particle systems attached to the node.
- [removeAllParticleSystems()](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

# removeParticleSystem: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Removes a particle system attached to the node.

## Declaration

```objectivec
- (void) removeParticleSystem:(SCNParticleSystem *) system;
```

## Parameters

- `system`: A particle system.

<a id="Discussion"></a>

## Discussion

This method has no effect if the `system` parameter does not reference a particle system directly attached to the node.

## See Also

### Working with Particle Systems

- [addParticleSystem:](addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [particleSystems](particlesystems.md): The particle systems attached to the node.
- [removeAllParticleSystems](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

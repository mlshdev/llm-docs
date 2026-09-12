> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/particlesystems](https://developer.apple.com/documentation/scenekit/scnscene/particlesystems)

# particleSystems (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The particle systems attached to the scene.

## Declaration

```swift
var particleSystems: [SCNParticleSystem]? { get }
```

<a id="Discussion"></a>

## Discussion

An array of [SCNParticleSystem](../scnparticlesystem.md) objects directly attached to the scene. This array does not include particle systems attached to nodes within the scene.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems in the Scene

- [addParticleSystem(\_:transform:)](addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [removeParticleSystem(\_:)](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems()](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

# particleSystems (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The particle systems attached to the scene.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<SCNParticleSystem *> * particleSystems;
```

<a id="Discussion"></a>

## Discussion

An array of [SCNParticleSystem](../scnparticlesystem.md) objects directly attached to the scene. This array does not include particle systems attached to nodes within the scene.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems in the Scene

- [addParticleSystem:withTransform:](addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [removeParticleSystem:](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

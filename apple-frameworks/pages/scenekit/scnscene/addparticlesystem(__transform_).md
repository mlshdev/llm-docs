> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/addparticlesystem(_:transform:)](https://developer.apple.com/documentation/scenekit/scnscene/addparticlesystem(_:transform:))

# addParticleSystem(\_:transform:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Attaches a particle system to the scene, using the specified transform.

## Declaration

```swift
func addParticleSystem(_ system: SCNParticleSystem, transform: SCNMatrix4)
```

```swift
func addParticleSystem(_ system: SCNParticleSystem, transform: SCNMatrix4)
```

## Parameters

- `system`: A particle system.
- `transform`: A transformation matrix that positions and orients the particle system relative to the world coordinate space of the scene.

<a id="Discussion"></a>

## Discussion

A particle system directly attached to a scene is not related to the coordinate space of any node in the scene. To attach a particle system whose emitter location follows the movement of a node within the scene, use the corresponding [SCNNode](../scnnode.md) method.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems in the Scene

- [particleSystems](particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem(\_:)](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems()](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

# addParticleSystem:withTransform: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Attaches a particle system to the scene, using the specified transform.

## Declaration

```objectivec
- (void) addParticleSystem:(SCNParticleSystem *) system withTransform:(SCNMatrix4) transform;
```

```objectivec
- (void) addParticleSystem:(SCNParticleSystem *) system withTransform:(SCNMatrix4) transform;
```

## Parameters

- `system`: A particle system.
- `transform`: A transformation matrix that positions and orients the particle system relative to the world coordinate space of the scene.

<a id="Discussion"></a>

## Discussion

A particle system directly attached to a scene is not related to the coordinate space of any node in the scene. To attach a particle system whose emitter location follows the movement of a node within the scene, use the corresponding [SCNNode](../scnnode.md) method.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems in the Scene

- [particleSystems](particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem:](removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

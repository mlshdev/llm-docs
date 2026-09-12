> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/addparticlesystem(_:)](https://developer.apple.com/documentation/scenekit/scnnode/addparticlesystem(_:))

# addParticleSystem(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Attaches a particle system to the node.

## Declaration

```swift
func addParticleSystem(_ system: SCNParticleSystem)
```

## Parameters

- `system`: A particle system.

<a id="Discussion"></a>

## Discussion

When attached to a node, a particle system’s emitter location follows that node as it moves through the scene. To instead attach a particle system to a location in the scene’s world coordinate space, use the corresponding method on [SCNScene](../scnscene.md).

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems

- [particleSystems](particlesystems.md): The particle systems attached to the node.
- [removeParticleSystem(\_:)](removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems()](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

# addParticleSystem: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Attaches a particle system to the node.

## Declaration

```objectivec
- (void) addParticleSystem:(SCNParticleSystem *) system;
```

## Parameters

- `system`: A particle system.

<a id="Discussion"></a>

## Discussion

When attached to a node, a particle system’s emitter location follows that node as it moves through the scene. To instead attach a particle system to a location in the scene’s world coordinate space, use the corresponding method on [SCNScene](../scnscene.md).

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems

- [particleSystems](particlesystems.md): The particle systems attached to the node.
- [removeParticleSystem:](removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

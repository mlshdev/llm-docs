> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/particlesystems](https://developer.apple.com/documentation/scenekit/scnnode/particlesystems)

# particleSystems (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The particle systems attached to the node.

## Declaration

```swift
var particleSystems: [SCNParticleSystem]? { get }
```

<a id="Discussion"></a>

## Discussion

An array of [SCNParticleSystem](../scnparticlesystem.md) objects directly attached to the node. This array does not include particle systems attached to the node’s child nodes.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems

- [addParticleSystem(\_:)](addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [removeParticleSystem(\_:)](removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems()](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

# particleSystems (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The particle systems attached to the node.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<SCNParticleSystem *> * particleSystems;
```

<a id="Discussion"></a>

## Discussion

An array of [SCNParticleSystem](../scnparticlesystem.md) objects directly attached to the node. This array does not include particle systems attached to the node’s child nodes.

For details on particle systems, see [SCNParticleSystem](../scnparticlesystem.md).

## See Also

### Working with Particle Systems

- [addParticleSystem:](addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [removeParticleSystem:](removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems](removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

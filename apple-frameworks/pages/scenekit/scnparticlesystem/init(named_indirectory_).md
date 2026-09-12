> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/init(named:indirectory:)](https://developer.apple.com/documentation/scenekit/scnparticlesystem/init(named:indirectory:))

# init(named:inDirectory:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads a particle system from a file in the app’s bundle resources.

## Declaration

```swift
convenience init?(named name: String, inDirectory directory: String?)
```

## Parameters

- `name`: The name of a particle system file in the app’s bundle resources directory, with or without the `.scnp` extension.
- `directory`: The subdirectory path in the app’s bundle resources directory.

<a id="return-value"></a>

## Return Value

A new particle system instantiated from the contents of the file.

<a id="Discussion"></a>

## Discussion

A SceneKit particle file created by Xcode contains an archived [SCNParticleSystem](../scnparticlesystem.md) instance, so you can also use the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) and [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) classes to write and read particle files.

# particleSystemNamed:inDirectory: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Loads a particle system from a file in the app’s bundle resources.

## Declaration

```objectivec
+ (instancetype) particleSystemNamed:(NSString *) name inDirectory:(NSString *) directory;
```

## Parameters

- `name`: The name of a particle system file in the app’s bundle resources directory, with or without the `.scnp` extension.
- `directory`: The subdirectory path in the app’s bundle resources directory.

<a id="return-value"></a>

## Return Value

A new particle system instantiated from the contents of the file.

<a id="Discussion"></a>

## Discussion

A SceneKit particle file created by Xcode contains an archived [SCNParticleSystem](../scnparticlesystem.md) instance, so you can also use the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) and [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) classes to write and read particle files.

## See Also

### Creating a Particle System

- [particleSystem](particlesystem.md): Deprecated. Creates a new particle system.

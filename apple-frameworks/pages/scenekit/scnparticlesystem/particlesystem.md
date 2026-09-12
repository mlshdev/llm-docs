> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlesystem](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlesystem)

# particleSystem

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new particle system.

## Declaration

```objectivec
+ (instancetype) particleSystem;
```

<a id="return-value"></a>

## Return Value

A new particle system object with default values for all of its properties.

<a id="Discussion"></a>

## Discussion

A particle system with default values for all of its properties renders nothing when added to a scene.

To more easily build a new visual effect, use Xcode. Choose SceneKit Particle System in the New File window, then choose one of the preconfigured particle system templates for fire, clouds, and other common visual effects. You can then modify the template particle system to create an effect appropriate to your project. To load a particle system file created in Xcode, see the [particleSystemNamed:inDirectory:](init%28named_indirectory_%29.md) method.

## See Also

### Creating a Particle System

- [particleSystemNamed:inDirectory:](init%28named_indirectory_%29.md): Loads a particle system from a file in the app’s bundle resources.

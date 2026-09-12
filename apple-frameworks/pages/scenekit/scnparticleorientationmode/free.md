> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleorientationmode/free](https://developer.apple.com/documentation/scenekit/scnparticleorientationmode/free)

# SCNParticleOrientationMode.free (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Particle orientations are not restricted; they may rotate freely in all axes.

## Declaration

```swift
case free
```

<a id="Discussion"></a>

## Discussion

When using this mode, you can modify the rotation axis of each particle with the [rotationAxis](../scnparticlesystem/particleproperty/rotationaxis.md) key.

## See Also

### Constants

- [SCNParticleOrientationMode.billboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationMode.billboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationMode.billboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

# SCNParticleOrientationModeFree (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Particle orientations are not restricted; they may rotate freely in all axes.

## Declaration

```objectivec
SCNParticleOrientationModeFree
```

<a id="Discussion"></a>

## Discussion

When using this mode, you can modify the rotation axis of each particle with the [SCNParticlePropertyRotationAxis](../scnparticlesystem/particleproperty/rotationaxis.md) key.

## See Also

### Constants

- [SCNParticleOrientationModeBillboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationModeBillboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationModeBillboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

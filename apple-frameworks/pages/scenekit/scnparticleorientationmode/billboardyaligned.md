> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleorientationmode/billboardyaligned](https://developer.apple.com/documentation/scenekit/scnparticleorientationmode/billboardyaligned)

# SCNParticleOrientationMode.billboardYAligned (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The y-axis direction of each particle is always fixed with respect to the point of view camera.

## Declaration

```swift
case billboardYAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode to allow each particle to rotate freely about its y-axis (as determined by the [particleAngle](../scnparticlesystem/particleangle.md) and [particleAngularVelocity](../scnparticlesystem/particleangularvelocity.md) properties or the [angle](../scnparticlesystem/particleproperty/angle.md) key), but prevent it from rotating around any other axis.

## See Also

### Constants

- [SCNParticleOrientationMode.billboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationMode.billboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationMode.free](free.md): Particle orientations are not restricted; they may rotate freely in all axes.

# SCNParticleOrientationModeBillboardYAligned (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The y-axis direction of each particle is always fixed with respect to the point of view camera.

## Declaration

```objectivec
SCNParticleOrientationModeBillboardYAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode to allow each particle to rotate freely about its y-axis (as determined by the [particleAngle](../scnparticlesystem/particleangle.md) and [particleAngularVelocity](../scnparticlesystem/particleangularvelocity.md) properties or the [SCNParticlePropertyAngle](../scnparticlesystem/particleproperty/angle.md) key), but prevent it from rotating around any other axis.

## See Also

### Constants

- [SCNParticleOrientationModeBillboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationModeBillboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationModeFree](free.md): Particle orientations are not restricted; they may rotate freely in all axes.

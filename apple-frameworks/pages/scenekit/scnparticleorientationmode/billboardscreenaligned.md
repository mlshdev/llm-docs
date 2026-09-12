> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleorientationmode/billboardscreenaligned](https://developer.apple.com/documentation/scenekit/scnparticleorientationmode/billboardscreenaligned)

# SCNParticleOrientationMode.billboardScreenAligned (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Each particle’s orientation is always fixed with respect to the point of view camera.

## Declaration

```swift
case billboardScreenAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode for simple particle images whose individual appearance has no relation to scene space, such as spheres, circles, and “sparkle” artwork.

## See Also

### Constants

- [SCNParticleOrientationMode.billboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationMode.free](free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationMode.billboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

# SCNParticleOrientationModeBillboardScreenAligned (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Each particle’s orientation is always fixed with respect to the point of view camera.

## Declaration

```objectivec
SCNParticleOrientationModeBillboardScreenAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode for simple particle images whose individual appearance has no relation to scene space, such as spheres, circles, and “sparkle” artwork.

## See Also

### Constants

- [SCNParticleOrientationModeBillboardViewAligned](billboardviewaligned.md): Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).
- [SCNParticleOrientationModeFree](free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationModeBillboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

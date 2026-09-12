> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleorientationmode/billboardviewaligned](https://developer.apple.com/documentation/scenekit/scnparticleorientationmode/billboardviewaligned)

# SCNParticleOrientationMode.billboardViewAligned (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).

## Declaration

```swift
case billboardViewAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode for particle images whose individual appearance depends on a location and orientation in scene space, such as “impostor” images representing trees or clouds in a scene.

## See Also

### Constants

- [SCNParticleOrientationMode.billboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationMode.free](free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationMode.billboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

# SCNParticleOrientationModeBillboardViewAligned (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Each particle always faces the point of view camera (but may rotate about an axis parallel to the view direction).

## Declaration

```objectivec
SCNParticleOrientationModeBillboardViewAligned
```

<a id="Discussion"></a>

## Discussion

Use this mode for particle images whose individual appearance depends on a location and orientation in scene space, such as “impostor” images representing trees or clouds in a scene.

## See Also

### Constants

- [SCNParticleOrientationModeBillboardScreenAligned](billboardscreenaligned.md): Each particle’s orientation is always fixed with respect to the point of view camera.
- [SCNParticleOrientationModeFree](free.md): Particle orientations are not restricted; they may rotate freely in all axes.
- [SCNParticleOrientationModeBillboardYAligned](billboardyaligned.md): The y-axis direction of each particle is always fixed with respect to the point of view camera.

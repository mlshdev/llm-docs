> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesortingmode/projecteddepth](https://developer.apple.com/documentation/scenekit/scnparticlesortingmode/projecteddepth)

# SCNParticleSortingMode.projectedDepth (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.

## Declaration

```swift
case projectedDepth
```

<a id="Discussion"></a>

## Discussion

Typically you use this sorting mode in conjunction with the [SCNParticleOrientationMode.billboardScreenAligned](../scnparticleorientationmode/billboardscreenaligned.md) orientation mode.

## See Also

### Constants

- [SCNParticleSortingMode.none](none.md): Particles are not sorted; they may be rendered in any order.
- [SCNParticleSortingMode.distance](distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingMode.oldestFirst](oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingMode.youngestFirst](youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

# SCNParticleSortingModeProjectedDepth (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.

## Declaration

```objectivec
SCNParticleSortingModeProjectedDepth
```

<a id="Discussion"></a>

## Discussion

Typically you use this sorting mode in conjunction with the [SCNParticleOrientationModeBillboardScreenAligned](../scnparticleorientationmode/billboardscreenaligned.md) orientation mode.

## See Also

### Constants

- [SCNParticleSortingModeNone](none.md): Particles are not sorted; they may be rendered in any order.
- [SCNParticleSortingModeDistance](distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingModeOldestFirst](oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingModeYoungestFirst](youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesortingmode/none](https://developer.apple.com/documentation/scenekit/scnparticlesortingmode/none)

# SCNParticleSortingMode.none (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Particles are not sorted; they may be rendered in any order.

## Declaration

```swift
case none
```

## See Also

### Constants

- [SCNParticleSortingMode.projectedDepth](projecteddepth.md): Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.
- [SCNParticleSortingMode.distance](distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingMode.oldestFirst](oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingMode.youngestFirst](youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

# SCNParticleSortingModeNone (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Particles are not sorted; they may be rendered in any order.

## Declaration

```objectivec
SCNParticleSortingModeNone
```

## See Also

### Constants

- [SCNParticleSortingModeProjectedDepth](projecteddepth.md): Particles farther from the point of view (as measured using projected depth) are rendered before closer particles.
- [SCNParticleSortingModeDistance](distance.md): Particles farther from the point of view (as measured using distance from the camera in scene space) are rendered before closer particles.
- [SCNParticleSortingModeOldestFirst](oldestfirst.md): Particles emitted earlier are rendered before particles emitted more recently.
- [SCNParticleSortingModeYoungestFirst](youngestfirst.md): Particles emitted more recently are rendered before particles emitted earlier.

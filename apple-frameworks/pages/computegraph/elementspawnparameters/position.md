> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/elementspawnparameters/position](https://developer.apple.com/documentation/computegraph/elementspawnparameters/position)

# position

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The initial 3D position of the particle in world space coordinates.

## Declaration

```swift
var position: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

This determines where the particle will first appear when spawned. The coordinate system follows RealityKit’s conventions with Y pointing up.

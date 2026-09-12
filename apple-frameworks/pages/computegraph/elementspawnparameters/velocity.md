> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/elementspawnparameters/velocity](https://developer.apple.com/documentation/computegraph/elementspawnparameters/velocity)

# velocity

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The initial velocity vector of the particle in world space units per second.

## Declaration

```swift
var velocity: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

This determines the particle’s initial direction and speed of movement. The magnitude of the vector represents the speed, while the direction represents the movement direction. A zero velocity means the particle starts stationary.

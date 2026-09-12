> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/elementspawnparameters/size](https://developer.apple.com/documentation/computegraph/elementspawnparameters/size)

# size

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The initial size of the particle as a 2D vector representing width and height.

## Declaration

```swift
var size: SIMD2<Float> { get set }
```

<a id="discussion"></a>

## Discussion

For most particle systems, this represents the billboard size in world space units.

- `x` component: width of the particle
- `y` component: height of the particle

Equal values create square particles, while different values create rectangular particles.

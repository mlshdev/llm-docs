> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectparameters/positions](https://developer.apple.com/documentation/realitykit/forceeffectparameters/positions)

# positions

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The positions of all rigid bodies under the influence of the effect, or nil if positional information was not requested.

## Declaration

```swift
let positions: UnsafeForceEffectBuffer<SIMD3<Float>>?
```

<a id="discussion"></a>

## Discussion

The position is located at each body’s center of mass, relative to the origin of the effect.

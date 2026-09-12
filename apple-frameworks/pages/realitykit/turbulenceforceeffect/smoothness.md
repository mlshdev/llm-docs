> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/turbulenceforceeffect/smoothness](https://developer.apple.com/documentation/realitykit/turbulenceforceeffect/smoothness)

# smoothness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A smoothing factor that applies to the force, reducing randomness.

## Declaration

```swift
let smoothness: Float
```

<a id="discussion"></a>

## Discussion

A value of `0.0` specifies maximum noise, and a value of `1.0` specifies no noise at all.

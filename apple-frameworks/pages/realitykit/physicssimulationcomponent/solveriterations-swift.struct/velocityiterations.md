> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicssimulationcomponent/solveriterations-swift.struct/velocityiterations

# velocityIterations

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The number of velocity iterations the solver performs.

## Declaration

```swift
var velocityIterations: Int
```

<a id="discussion"></a>

## Discussion

Use a value in the inclusive range `[1, 255]`. The default value is `1`.

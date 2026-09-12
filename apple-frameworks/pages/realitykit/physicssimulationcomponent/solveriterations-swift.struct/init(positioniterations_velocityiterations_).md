> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssimulationcomponent/solveriterations-swift.struct/init(positioniterations:velocityiterations:)](https://developer.apple.com/documentation/realitykit/physicssimulationcomponent/solveriterations-swift.struct/init(positioniterations:velocityiterations:))

# init(positionIterations:velocityIterations:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a solver iterations configuration.

## Declaration

```swift
init(positionIterations: Int = 6, velocityIterations: Int = 1)
```

## Parameters

- `positionIterations`: The number of position iterations the solver performs, in the inclusive range `[1, 255]`. The default value is `6`.
- `velocityIterations`: The number of velocity iterations the solver performs, in the inclusive range `[1, 255]`. The default value is `1`.

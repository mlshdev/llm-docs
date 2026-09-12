> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/solver/maxiterations](https://developer.apple.com/documentation/realitykit/ikcomponent/solver/maxiterations)

# maxIterations

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The maximum number of iterations the solver is allowed to do per frame.

## Declaration

```swift
var maxIterations: Int { get set }
```

<a id="discussion"></a>

## Discussion

If the pose satisfies all of the demands using less iterations, the solve stops early.

The initial value is from the respective [maxIterations](../../ikrig/maxiterations.md).

> **Note**

> Values of `0` or less, result in the constant output of the last solved pose.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/anyorder(_:)](https://developer.apple.com/documentation/evaluations/toolexpectation/anyorder(_:))

# anyOrder(\_:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a group of expectations that must all be satisfied at the same sequential position, but can occur in any relative order.

## Declaration

```swift
static func anyOrder(_ expectations: [ToolExpectation]) -> ToolExpectation
```

## Parameters

- `expectations`: The expectations that must all be satisfied.

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

You can only use this method within the `ordered` array of a [TrajectoryExpectation](../trajectoryexpectation.md).

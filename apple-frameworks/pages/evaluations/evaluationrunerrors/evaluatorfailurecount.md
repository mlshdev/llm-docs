> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationrunerrors/evaluatorfailurecount](https://developer.apple.com/documentation/evaluations/evaluationrunerrors/evaluatorfailurecount)

# evaluatorFailureCount

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The total number of evaluator invocations that threw.

## Declaration

```swift
var evaluatorFailureCount: Int
```

<a id="discussion"></a>

## Discussion

A single row can contribute more than one when multiple evaluators fail on the same sample.

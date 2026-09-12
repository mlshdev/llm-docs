> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorerror/failed(evaluator:evaluatortype:reason:)](https://developer.apple.com/documentation/evaluations/evaluatorerror/failed(evaluator:evaluatortype:reason:))

# EvaluatorError.failed(evaluator:evaluatorType:reason:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluator threw an error while scoring the subject.

## Declaration

```swift
case failed(evaluator: (any EvaluatorProtocol)?, evaluatorType: String, reason: String)
```

## Parameters

- `evaluator`: The failing evaluator instance — the same one from the evaluation’s `evaluators` — so a recorded failure can be mapped back to its source.
- `evaluatorType`: The failing evaluator’s concrete type name.
- `reason`: The thrown error’s `localizedDescription`.

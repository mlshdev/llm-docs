> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationcontext/current](https://developer.apple.com/documentation/evaluations/evaluationcontext/current)

# current

**Framework:** Evaluations  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The current evaluation context within the active test scope.

## Declaration

```swift
static var current: EvaluationContext { get }
```

<a id="discussion"></a>

## Discussion

Accessing this property outside an evaluation scope triggers a fatal error.

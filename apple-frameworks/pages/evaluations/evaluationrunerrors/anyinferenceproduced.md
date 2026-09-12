> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationrunerrors/anyinferenceproduced](https://developer.apple.com/documentation/evaluations/evaluationrunerrors/anyinferenceproduced)

# anyInferenceProduced

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Whether any sample produced a subject.

## Declaration

```swift
var anyInferenceProduced: Bool
```

<a id="discussion"></a>

## Discussion

False when every `subject(from:)` call threw; aggregate metrics are not meaningful.

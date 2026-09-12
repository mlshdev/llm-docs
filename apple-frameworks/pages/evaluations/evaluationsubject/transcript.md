> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationsubject/transcript](https://developer.apple.com/documentation/evaluations/evaluationsubject/transcript)

# transcript

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The structured transcript captured while producing the value, if any.

## Declaration

```swift
var transcript: StructuredTranscript? { get }
```

<a id="discussion"></a>

## Discussion

Subjects backed by a language model session expose the session transcript here; subjects that don’t involve a model leave it `nil` (the default). The transcript-attachment recorder reads this through the type-erased results column, so any subject type that carries one participates automatically.

## Default Implementations

### EvaluationSubject Implementations

- [transcript](transcript-9s3nn.md): Subjects have no transcript unless they provide one.

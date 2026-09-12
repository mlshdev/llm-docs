> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/subject](https://developer.apple.com/documentation/evaluations/evaluation/subject)

# Subject

**Framework:** Evaluations  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The type of subject the system under test produces.

## Declaration

```swift
associatedtype Subject : EvaluationSubject
```

## See Also

### Testing an intelligent feature

- [subject(from:)](subject%28from_%29.md): Produces the subject of evaluation from a given sample.
- [EvaluationSubject](../evaluationsubject.md): A type that represents the output the system under test produces.
- [ModelSubject](../modelsubject.md): The subject type for language model evaluations.
- [name](name.md): The default name, taken from the type name.

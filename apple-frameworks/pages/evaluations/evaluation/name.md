> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/evaluation/name

# name

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluation’s name in results. Defaults to the type name; override for a custom one.

## Declaration

```swift
var name: String { get }
```

## Default Implementations

### Evaluation Implementations

- [name](name-9jrme.md): The default name, taken from the type name.

## See Also

### Testing an intelligent feature

- [Subject](subject.md): The type of subject the system under test produces.
- [subject(from:)](subject%28from_%29.md): Produces the subject of evaluation from a given sample.
- [EvaluationSubject](../evaluationsubject.md): A type that represents the output the system under test produces.
- [ModelSubject](../modelsubject.md): The subject type for language model evaluations.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationsubject](https://developer.apple.com/documentation/evaluations/evaluationsubject)

# EvaluationSubject

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that represents the output the system under test produces.

## Declaration

```swift
protocol EvaluationSubject<Value>
```

<a id="overview"></a>

## Overview

Conform to this protocol to define custom subject types. The primary concrete conformance is [ModelSubject](modelsubject.md), which carries a value and an optional transcript for tool-call evaluation.

```swift
struct MySubject<Value: Codable>: EvaluationSubject {
    var value: Value
    var transcript: StructuredTranscript?
}
```

## Topics

### Associated Types

- [Value](evaluationsubject/value-swift.associatedtype.md): The type of value the system under test produces.

### Instance Properties

- [transcript](evaluationsubject/transcript.md): The structured transcript captured while producing the value, if any.
- [value](evaluationsubject/value-swift.property.md): The typed value the system under test produces.

## Relationships

### Conforming Types

- [ModelSubject](modelsubject.md)

## See Also

### Testing an intelligent feature

- [Subject](evaluation/subject.md): The type of subject the system under test produces.
- [subject(from:)](evaluation/subject%28from_%29.md): Produces the subject of evaluation from a given sample.
- [ModelSubject](modelsubject.md): The subject type for language model evaluations.
- [name](evaluation/name.md): The default name, taken from the type name.

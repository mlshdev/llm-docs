> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsubject](https://developer.apple.com/documentation/evaluations/modelsubject)

# ModelSubject

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The subject type for language model evaluations.

## Declaration

```swift
struct ModelSubject<Value> where Value : Decodable, Value : Encodable, Value : Sendable
```

## Mentioned In

- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

Carries the value the model produces and an optional structured transcript. The transcript is required for tool-call evaluation. [ToolCallEvaluator](toolcallevaluator.md) performs a runtime check and throws [EvaluationError.missingTranscript(evaluatorType:)](evaluationerror/missingtranscript%28evaluatortype_%29.md) if the transcript is `nil`.

```swift
let subject = ModelSubject(value: "Paris, France")
```

## Topics

### Creating a subject

- [init(value:transcript:)](modelsubject/init%28value_transcript_%29.md): Creates a model subject with a value and optional transcript.

### Accessing the content

- [value](modelsubject/value.md): The typed value the model produces.
- [transcript](modelsubject/transcript.md): The structured transcript from the model session.

### Inspecting tool calls

- [toolCalls](modelsubject/toolcalls.md): Conforms when `Value` conforms to `Decodable`, `Encodable`, and `Sendable`. The tool calls from the transcript, or an empty array if no transcript was provided.
- [StructuredTranscript](structuredtranscript.md)

## Relationships

### Conforms To

- [EvaluationSubject](evaluationsubject.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing an intelligent feature

- [Subject](evaluation/subject.md): The type of subject the system under test produces.
- [subject(from:)](evaluation/subject%28from_%29.md): Produces the subject of evaluation from a given sample.
- [EvaluationSubject](evaluationsubject.md): A type that represents the output the system under test produces.
- [name](evaluation/name.md): The default name, taken from the type name.

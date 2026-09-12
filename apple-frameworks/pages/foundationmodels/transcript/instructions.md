> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/instructions](https://developer.apple.com/documentation/foundationmodels/transcript/instructions)

# Transcript.Instructions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Instructions you provide to the model that define its behavior.

## Declaration

```swift
struct Instructions
```

<a id="overview"></a>

## Overview

Instructions are typically provided to define the role and behavior of the model. The model is typically trained to obey instructions over any commands it receives in prompts. This is a security mechanism to help mitigate prompt injection attacks.

## Topics

### Creating instructions

- [init(id:segments:toolDefinitions:)](instructions/init%28id_segments_tooldefinitions_%29.md): Creates instructions that describe how you want the model to behave, in natural language.

### Inspecting instructions

- [segments](instructions/segments.md): The content of the instructions, in natural language.
- [toolDefinitions](instructions/tooldefinitions.md): A list of tools made available to the model.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transcript entries

- [Transcript.Entry](entry.md): An entry in a transcript.
- [Transcript.Prompt](prompt.md): A prompt from the user to the model.
- [Transcript.Response](response.md): A response from the model.
- [Transcript.Reasoning](reasoning.md): A reasoning entry from the model.

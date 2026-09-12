> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/prompt](https://developer.apple.com/documentation/foundationmodels/transcript/prompt)

# Transcript.Prompt

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A prompt from the user to the model.

## Declaration

```swift
struct Prompt
```

<a id="overview"></a>

## Overview

Prompts typically contain content sourced directly from the user, though you may choose to augment prompts by interpolating content from end users into a template that you control.

## Topics

### Creating a prompt

- [init(id:segments:options:responseFormat:)](prompt/init%28id_segments_options_responseformat_%29.md): Creates a prompt.
- [init(id:metadata:segments:options:responseFormat:contextOptions:)](prompt/init%28id_metadata_segments_options_responseformat_contextoptions_%29.md): Creates a prompt.

### Inspecting a prompt

- [id](prompt/id.md): The identifier of the prompt.
- [responseFormat](prompt/responseformat.md): An optional response format that describes the desired output structure.
- [segments](prompt/segments.md): Ordered prompt segments.
- [options](prompt/options.md): Generation options associated with the prompt.
- [contextOptions](prompt/contextoptions.md): Configuration of the prompt.
- [metadata](prompt/metadata.md): Metadata provided as part of this prompt.

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
- [Transcript.Instructions](instructions.md): Instructions you provide to the model that define its behavior.
- [Transcript.Response](response.md): A response from the model.
- [Transcript.Reasoning](reasoning.md): A reasoning entry from the model.

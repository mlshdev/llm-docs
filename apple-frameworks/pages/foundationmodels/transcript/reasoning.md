> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/reasoning](https://developer.apple.com/documentation/foundationmodels/transcript/reasoning)

# Transcript.Reasoning

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A reasoning entry from the model.

## Declaration

```swift
struct Reasoning
```

## Topics

### Creating a reasoning instance

- [init(id:metadata:segments:signature:)](reasoning/init%28id_metadata_segments_signature_%29.md)

### Inspecting the reasoning

- [description](reasoning/description.md)
- [metadata](reasoning/metadata.md): Metadata produced by the model while generating this reasoning entry.
- [segments](reasoning/segments.md): Ordered reasoning segments.
- [signature](reasoning/signature.md): Opaque producer-supplied signature for this reasoning entry.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transcript entries

- [Transcript.Entry](entry.md): An entry in a transcript.
- [Transcript.Instructions](instructions.md): Instructions you provide to the model that define its behavior.
- [Transcript.Prompt](prompt.md): A prompt from the user to the model.
- [Transcript.Response](response.md): A response from the model.

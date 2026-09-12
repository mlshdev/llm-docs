> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/response](https://developer.apple.com/documentation/foundationmodels/transcript/response)

# Transcript.Response

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A response from the model.

## Declaration

```swift
struct Response
```

## Topics

### Creating a response

- [init(id:assetIDs:segments:)](response/init%28id_assetids_segments_%29.md)
- [init(id:metadata:segments:)](response/init%28id_metadata_segments_%29.md)

### Inspecting a response

- [segments](response/segments.md): Ordered prompt segments.
- [assetIDs](response/assetids.md): Version aware identifiers for all assets used to generate this response.
- [metadata](response/metadata.md): Metadata associated with generating the response.

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
- [Transcript.Prompt](prompt.md): A prompt from the user to the model.
- [Transcript.Reasoning](reasoning.md): A reasoning entry from the model.

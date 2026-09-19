> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/responseformat

# Transcript.ResponseFormat

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A response format that the model must conform its output to.

## Declaration

```swift
struct ResponseFormat
```

## Topics

### Creating a response format

- [init(schema:)](responseformat/init%28schema_%29.md): Creates a response format with a schema.
- [init(type:)](responseformat/init%28type_%29.md): Creates a response format with type you specify.

### Inspecting the name

- [name](responseformat/name.md): A name associated with the response format.

### Accessing the kind of format

- [kind](responseformat/kind-swift.property.md): The way the response format constrains the model’s output.
- [Transcript.ResponseFormat.Kind](responseformat/kind-swift.enum.md): A representation of the different ways a response format can constrain model output.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

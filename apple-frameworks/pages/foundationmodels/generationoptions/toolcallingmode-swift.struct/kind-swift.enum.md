> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/toolcallingmode-swift.struct/kind-swift.enum

# GenerationOptions.ToolCallingMode.Kind

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A representation of the different ways a model can use tools.

## Declaration

```swift
enum Kind
```

## Topics

### Tool calling mode cases

- [GenerationOptions.ToolCallingMode.Kind.allowed](kind-swift.enum/allowed.md): The model may call tools.
- [GenerationOptions.ToolCallingMode.Kind.disallowed](kind-swift.enum/disallowed.md): The model can’t call any tools.
- [GenerationOptions.ToolCallingMode.Kind.required](kind-swift.enum/required.md): The model must call one or more tools.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the content

- [kind](kind-swift.property.md): The tool-calling behavior this mode represents.

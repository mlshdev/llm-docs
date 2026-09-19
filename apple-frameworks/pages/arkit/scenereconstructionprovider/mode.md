> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/scenereconstructionprovider/mode

# SceneReconstructionProvider.Mode

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The additional kinds of information you can request about a person’s surroundings.

## Declaration

```swift
enum Mode
```

## Topics

### Scene reconstruction modes

- [SceneReconstructionProvider.Mode.classification](mode/classification.md): The reconstruction mode that classifies each face of a mesh anchor.

### Instance Properties

- [description](mode/description.md): A textual representation of SceneReconstructionProvider.Mode

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a scene reconstruction provider

- [init(modes:)](init%28modes_%29.md): Creates a provider that reconstructs a person’s surroundings.
- [modes](modes.md): The modes of scene reconstruction a provider supplies.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports scene reconstruction providers.

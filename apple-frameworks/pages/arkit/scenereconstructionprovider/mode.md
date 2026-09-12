> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/scenereconstructionprovider/mode](https://developer.apple.com/documentation/arkit/scenereconstructionprovider/mode)

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

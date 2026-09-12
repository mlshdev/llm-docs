> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/scenereconstructionprovider/issupported](https://developer.apple.com/documentation/arkit/scenereconstructionprovider/issupported)

# isSupported

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the current runtime environment supports scene reconstruction providers.

## Declaration

```swift
static var isSupported: Bool { get }
```

## See Also

### Creating a scene reconstruction provider

- [init(modes:)](init%28modes_%29.md): Creates a provider that reconstructs a person’s surroundings.
- [modes](modes.md): The modes of scene reconstruction a provider supplies.
- [SceneReconstructionProvider.Mode](mode.md): The additional kinds of information you can request about a person’s surroundings.

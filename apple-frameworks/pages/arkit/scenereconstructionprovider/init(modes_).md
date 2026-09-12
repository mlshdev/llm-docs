> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/scenereconstructionprovider/init(modes:)](https://developer.apple.com/documentation/arkit/scenereconstructionprovider/init(modes:))

# init(modes:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a provider that reconstructs a person’s surroundings.

## Declaration

```swift
init(modes: [SceneReconstructionProvider.Mode] = [])
```

## Parameters

- `modes`: The modes of scene reconstruction your app requires.

<a id="Discussion"></a>

## Discussion

You can pass additional modes, such as [SceneReconstructionProvider.Mode.classification](mode/classification.md), if you need more than the default mesh data.

## See Also

### Creating a scene reconstruction provider

- [modes](modes.md): The modes of scene reconstruction a provider supplies.
- [SceneReconstructionProvider.Mode](mode.md): The additional kinds of information you can request about a person’s surroundings.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports scene reconstruction providers.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/scenereconstructionprovider/anchorupdates](https://developer.apple.com/documentation/arkit/scenereconstructionprovider/anchorupdates)

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

An asynchronous sequence of updates to scene meshes that the scene reconstruction provider detects.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<MeshAnchor> { get }
```

## See Also

### Observing scene reconstruction

- [state](state.md): A value that indicates whether the scene reconstruction provider is currently supplying anchor updates.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/scenereconstructionprovider/state

# state

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A value that indicates whether the scene reconstruction provider is currently supplying anchor updates.

## Declaration

```swift
final var state: DataProviderState { get }
```

## See Also

### Observing scene reconstruction

- [anchorUpdates](anchorupdates.md): An asynchronous sequence of updates to scene meshes that the scene reconstruction provider detects.

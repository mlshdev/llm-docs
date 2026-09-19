> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/roomtrackingprovider/state

# state

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The state of a room-tracking provider.

## Declaration

```swift
final var state: DataProviderState { get }
```

## See Also

### Inspecting a room-tracking provider

- [allAnchors](allanchors.md): An array of the room anchors the room-tracking provider is tracking.
- [anchorUpdates](anchorupdates.md): An asynchronous sequence of room anchor updates.
- [currentRoomAnchor](currentroomanchor.md): The room a person is in currently, if any.
- [description](description.md): A textual representation of this room tracking provider.

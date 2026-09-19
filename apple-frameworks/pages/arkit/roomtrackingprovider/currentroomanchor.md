> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/roomtrackingprovider/currentroomanchor

# currentRoomAnchor

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The room a person is in currently, if any.

## Declaration

```swift
final var currentRoomAnchor: RoomAnchor? { get }
```

## See Also

### Inspecting a room-tracking provider

- [allAnchors](allanchors.md): An array of the room anchors the room-tracking provider is tracking.
- [anchorUpdates](anchorupdates.md): An asynchronous sequence of room anchor updates.
- [description](description.md): A textual representation of this room tracking provider.
- [state](state.md): The state of a room-tracking provider.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomtrackingprovider/allanchors](https://developer.apple.com/documentation/arkit/roomtrackingprovider/allanchors)

# allAnchors

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An array of the room anchors the room-tracking provider is tracking.

## Declaration

```swift
final var allAnchors: [RoomAnchor] { get }
```

## See Also

### Inspecting a room-tracking provider

- [anchorUpdates](anchorupdates.md): An asynchronous sequence of room anchor updates.
- [currentRoomAnchor](currentroomanchor.md): The room a person is in currently, if any.
- [description](description.md): A textual representation of this room tracking provider.
- [state](state.md): The state of a room-tracking provider.

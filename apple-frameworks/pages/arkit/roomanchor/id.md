> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/id](https://developer.apple.com/documentation/arkit/roomanchor/id)

# id

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The unique identifier of this anchor.

## Declaration

```swift
var id: UUID { get }
```

## See Also

### Getting information about a room anchor

- [geometry](geometry.md): The geometry of the mesh in an anchor’s coordinate system.
- [isCurrentRoom](iscurrentroom.md): A Boolean value that indicates whether a room is a person’s current location.
- [meshAnchorIDs](meshanchorids.md): An array of IDs of the mesh anchors associated with a room.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the room anchor to the origin coordinate system.
- [planeAnchorIDs](planeanchorids.md): An array of IDs of the plane anchors associated with a room.

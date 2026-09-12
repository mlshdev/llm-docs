> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/meshanchorids](https://developer.apple.com/documentation/arkit/roomanchor/meshanchorids)

# meshAnchorIDs

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An array of IDs of the mesh anchors associated with a room.

## Declaration

```swift
var meshAnchorIDs: [UUID] { get }
```

## See Also

### Getting information about a room anchor

- [geometry](geometry.md): The geometry of the mesh in an anchor’s coordinate system.
- [id](id.md): The unique identifier of this anchor.
- [isCurrentRoom](iscurrentroom.md): A Boolean value that indicates whether a room is a person’s current location.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the room anchor to the origin coordinate system.
- [planeAnchorIDs](planeanchorids.md): An array of IDs of the plane anchors associated with a room.

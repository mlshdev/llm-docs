> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/geometry](https://developer.apple.com/documentation/arkit/roomanchor/geometry)

# geometry

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The geometry of the mesh in an anchor’s coordinate system.

## Declaration

```swift
var geometry: MeshAnchor.Geometry { get }
```

## See Also

### Getting information about a room anchor

- [id](id.md): The unique identifier of this anchor.
- [isCurrentRoom](iscurrentroom.md): A Boolean value that indicates whether a room is a person’s current location.
- [meshAnchorIDs](meshanchorids.md): An array of IDs of the mesh anchors associated with a room.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the room anchor to the origin coordinate system.
- [planeAnchorIDs](planeanchorids.md): An array of IDs of the plane anchors associated with a room.

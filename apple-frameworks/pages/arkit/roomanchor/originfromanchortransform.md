> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/originfromanchortransform](https://developer.apple.com/documentation/arkit/roomanchor/originfromanchortransform)

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The transform from the room anchor to the origin coordinate system.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Getting information about a room anchor

- [geometry](geometry.md): The geometry of the mesh in an anchor’s coordinate system.
- [id](id.md): The unique identifier of this anchor.
- [isCurrentRoom](iscurrentroom.md): A Boolean value that indicates whether a room is a person’s current location.
- [meshAnchorIDs](meshanchorids.md): An array of IDs of the mesh anchors associated with a room.
- [planeAnchorIDs](planeanchorids.md): An array of IDs of the plane anchors associated with a room.

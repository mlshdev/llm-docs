> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/markflagonoffmeshconnections(offmeshconnectionindices:flag:)](https://developer.apple.com/documentation/realitykit/navigationmeshresource/markflagonoffmeshconnections(offmeshconnectionindices:flag:))

# markFlagOnOffMeshConnections(offMeshConnectionIndices:flag:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Marks the off-mesh connections at these indices with a flag.

## Declaration

```swift
func markFlagOnOffMeshConnections(offMeshConnectionIndices: [Int], flag: NavigationMeshResource.Flag)
```

## See Also

### Marking areas and flags

- [markAreaInBox(boundingBox:area:)](markareainbox%28boundingbox_area_%29.md): Marks all polygons in this box with an area.
- [markFlagInBox(boundingBox:flag:)](markflaginbox%28boundingbox_flag_%29.md): Marks all polygons in this box with a flag.
- [markAreaInCylinder(position:radius:halfHeight:area:)](markareaincylinder%28position_radius_halfheight_area_%29.md): Marks all polygons in this cylinder with an area.
- [markFlagInCylinder(position:radius:halfHeight:flag:)](markflagincylinder%28position_radius_halfheight_flag_%29.md): Marks all polygons in this cylinder with a flag.
- [markAreaOnPolygons(polygonIndices:area:)](markareaonpolygons%28polygonindices_area_%29.md): Marks the polygons at these indices with an area.
- [markFlagOnPolygons(polygonIndices:flag:)](markflagonpolygons%28polygonindices_flag_%29.md): Marks the polygons at these indices with a flag.
- [markAreaOnOffMeshConnections(offMeshConnectionIndices:area:)](markareaonoffmeshconnections%28offmeshconnectionindices_area_%29.md): Marks the off-mesh connections at these indices with an area.

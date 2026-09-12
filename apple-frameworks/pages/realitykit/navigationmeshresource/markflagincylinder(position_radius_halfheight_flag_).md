> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/markflagincylinder(position:radius:halfheight:flag:)](https://developer.apple.com/documentation/realitykit/navigationmeshresource/markflagincylinder(position:radius:halfheight:flag:))

# markFlagInCylinder(position:radius:halfHeight:flag:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Marks all polygons in this cylinder with a flag.

## Declaration

```swift
func markFlagInCylinder(position: SIMD3<Float>, radius: Float, halfHeight: Float, flag: NavigationMeshResource.Flag)
```

## See Also

### Marking areas and flags

- [markAreaInBox(boundingBox:area:)](markareainbox%28boundingbox_area_%29.md): Marks all polygons in this box with an area.
- [markFlagInBox(boundingBox:flag:)](markflaginbox%28boundingbox_flag_%29.md): Marks all polygons in this box with a flag.
- [markAreaInCylinder(position:radius:halfHeight:area:)](markareaincylinder%28position_radius_halfheight_area_%29.md): Marks all polygons in this cylinder with an area.
- [markAreaOnPolygons(polygonIndices:area:)](markareaonpolygons%28polygonindices_area_%29.md): Marks the polygons at these indices with an area.
- [markFlagOnPolygons(polygonIndices:flag:)](markflagonpolygons%28polygonindices_flag_%29.md): Marks the polygons at these indices with a flag.
- [markAreaOnOffMeshConnections(offMeshConnectionIndices:area:)](markareaonoffmeshconnections%28offmeshconnectionindices_area_%29.md): Marks the off-mesh connections at these indices with an area.
- [markFlagOnOffMeshConnections(offMeshConnectionIndices:flag:)](markflagonoffmeshconnections%28offmeshconnectionindices_flag_%29.md): Marks the off-mesh connections at these indices with a flag.

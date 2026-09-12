> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/removeareaincylinder(position:radius:halfheight:area:)](https://developer.apple.com/documentation/realitykit/navigationmeshresource/removeareaincylinder(position:radius:halfheight:area:))

# removeAreaInCylinder(position:radius:halfHeight:area:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes the area from all polygons in this cylinder.

## Declaration

```swift
func removeAreaInCylinder(position: SIMD3<Float>, radius: Float, halfHeight: Float, area: NavigationMeshResource.Area)
```

## See Also

### Removing areas and flags

- [removeAreaInBox(boundingBox:area:)](removeareainbox%28boundingbox_area_%29.md): Removes the area from all polygons in this box.
- [removeFlagInBox(boundingBox:flag:)](removeflaginbox%28boundingbox_flag_%29.md): Removes the flag from all polygons in this box.
- [removeFlagInCylinder(position:radius:halfHeight:flag:)](removeflagincylinder%28position_radius_halfheight_flag_%29.md): Removes the flag from all polygons in this cylinder.
- [removeAreaOnPolygons(polygonIndices:area:)](removeareaonpolygons%28polygonindices_area_%29.md): Removes the area from the polygons at these indices.
- [removeFlagOnPolygons(polygonIndices:flag:)](removeflagonpolygons%28polygonindices_flag_%29.md): Removes the flag from the polygons at these indices.
- [removeAreaOnOffMeshConnections(offMeshConnectionIndices:area:)](removeareaonoffmeshconnections%28offmeshconnectionindices_area_%29.md): Removes the area from the off-mesh connections at these indices.
- [removeFlagOnOffMeshConnections(offMeshConnectionIndices:flag:)](removeflagonoffmeshconnections%28offmeshconnectionindices_flag_%29.md): Removes the flag from the off-mesh connections at these indices.

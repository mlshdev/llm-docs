> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/geometries(of:)](https://developer.apple.com/documentation/arkit/roomanchor/geometries(of:))

# geometries(of:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+ (deprecated in 26.0)

Returns the disjoint mesh geometries of a given classification.

> Use geometries(classifiedAs: SurfaceClassification) instead.

## Declaration

```swift
func geometries(of classification: MeshAnchor.MeshClassification) -> [MeshAnchor.Geometry]
```

## Parameters

- `classification`: The mesh classification to look for.

<a id="return-value"></a>

## Return Value

An array of [MeshAnchor.Geometry](../meshanchor/geometry-swift.struct.md) structures that match the provided classification.

<a id="Discussion"></a>

## Discussion

`RoomAnchor.geometries(of:)` supports the [ARMeshClassification.floor](../armeshclassification/floor.md) and [ARMeshClassification.wall](../armeshclassification/wall.md) mesh classifications.

## See Also

### Inspecting a room anchor

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a room contains the provided point.
- [description](description.md): A textual representation of this anchor.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/geometries(classifiedas:)](https://developer.apple.com/documentation/arkit/roomanchor/geometries(classifiedas:))

# geometries(classifiedAs:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Get disjoint mesh geometries of a given surface classification.

## Declaration

```swift
func geometries(classifiedAs classification: SurfaceClassification) -> [MeshAnchor.Geometry]
```

## Parameters

- `classification`: The classification of the geometries. `SurfaceClassification/floor` and `SurfaceClassification/wall` are supported.

<a id="return-value"></a>

## Return Value

The array of mesh geometries.

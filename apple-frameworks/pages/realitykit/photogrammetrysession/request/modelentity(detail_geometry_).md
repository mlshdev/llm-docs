> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/modelentity(detail:geometry:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/modelentity(detail:geometry:))

# PhotogrammetrySession.Request.modelEntity(detail:geometry:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object-creation request stored in-memory for immediate display.

## Declaration

```swift
case modelEntity(detail: PhotogrammetrySession.Request.Detail = .reduced, geometry: PhotogrammetrySession.Request.Geometry? = nil)
```

## Parameters

- `detail`: The level of detail for the created model.
- `geometry`: The bounding box and transforms for the entity the request generates.

## See Also

### Specifying the output

- [PhotogrammetrySession.Request.modelFile(url:detail:geometry:)](modelfile%28url_detail_geometry_%29.md): An object-creation request saved to a USDZ file or a folder (for OBJ output).
- [PhotogrammetrySession.Request.bounds](bounds.md): An object-creation request that returns a box the same size as the created model.
- [PhotogrammetrySession.Request.Detail](detail.md): Supported levels of detail for a request.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/bounds](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/bounds)

# PhotogrammetrySession.Request.bounds

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object-creation request that returns a box the same size as the created model.

## Declaration

```swift
case bounds
```

<a id="discussion"></a>

## Discussion

Use a `bounds` request to quickly retrieve a box the same size as the final created object.

## See Also

### Specifying the output

- [PhotogrammetrySession.Request.modelFile(url:detail:geometry:)](modelfile%28url_detail_geometry_%29.md): An object-creation request saved to a USDZ file or a folder (for OBJ output).
- [PhotogrammetrySession.Request.modelEntity(detail:geometry:)](modelentity%28detail_geometry_%29.md): An object-creation request stored in-memory for immediate display.
- [PhotogrammetrySession.Request.Detail](detail.md): Supported levels of detail for a request.

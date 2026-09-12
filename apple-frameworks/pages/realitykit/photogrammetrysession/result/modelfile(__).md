> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/result/modelfile(_:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/result/modelfile(_:))

# PhotogrammetrySession.Result.modelFile(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The result of a request for a USDZ file.

## Declaration

```swift
case modelFile(URL)
```

## Parameters

- `URL`: A file URL pointing to the created USDZ file.

## See Also

### Types of output

- [PhotogrammetrySession.Result.modelEntity(\_:)](modelentity%28__%29.md): The result of a request for an in-memory entity.
- [PhotogrammetrySession.Result.bounds(\_:)](bounds%28__%29.md): The result of a request for a bounding box.

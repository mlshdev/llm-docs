> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/outputtexturemaps](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/outputtexturemaps)

# outputTextureMaps

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

The set of texture maps to create in the model.

## Declaration

```swift
var outputTextureMaps: PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureMapOutputs
```

<a id="discussion"></a>

## Discussion

This setting can reduce model size by only requesting maps that will be used on the target renderer. Example to get just color and normal maps:

```
var detailSpec = PhotogrammetrySession.Request.Detail.Specification()
detailSpec.outputTextureMaps = [.diffuseColor, .normal]
```

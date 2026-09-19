> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/maximumtexturedimension

# maximumTextureDimension

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

The maximum dimension of the reconstructed texture maps.

## Declaration

```swift
var maximumTextureDimension: PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureDimension
```

<a id="discussion"></a>

## Discussion

The reconstructed texture map will have width and height dimensions both less than or equal to the provided `maxTextureDimension`. This property is useful for fitting within the texture memory resources of the rendering system.

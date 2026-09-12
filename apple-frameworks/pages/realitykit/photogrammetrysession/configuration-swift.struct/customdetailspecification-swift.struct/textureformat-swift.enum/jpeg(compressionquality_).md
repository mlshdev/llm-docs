> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/textureformat-swift.enum/jpeg(compressionquality:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/textureformat-swift.enum/jpeg(compressionquality:))

# PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureFormat.jpeg(compressionQuality:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Textures will be output in JPG format with the given `compressionQuality` in the range of \[0, 1\], where 1.0 is highest quality (least compression, larger size) and 0.0 is the lowest quality (most compression, smallest size).

## Declaration

```swift
case jpeg(compressionQuality: Float = 0.8)
```

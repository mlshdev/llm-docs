> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/textureformat-swift.enum](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/textureformat-swift.enum)

# PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureFormat

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

The output format to use for all textures.

## Declaration

```swift
enum TextureFormat
```

## Topics

### Enumeration Cases

- [PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureFormat.jpeg(compressionQuality:)](textureformat-swift.enum/jpeg%28compressionquality_%29.md): Textures will be output in JPG format with the given `compressionQuality` in the range of \[0, 1\], where 1.0 is highest quality (least compression, larger size) and 0.0 is the lowest quality (most compression, smallest size).
- [PhotogrammetrySession.Configuration.CustomDetailSpecification.TextureFormat.png](textureformat-swift.enum/png.md): Textures will be output in (uncompressed) PNG format.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

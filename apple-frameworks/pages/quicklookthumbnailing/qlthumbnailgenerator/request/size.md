> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/size](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/size)

# size (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The size of the thumbnails.

## Declaration

```swift
var size: CGSize { get }
```

## See Also

### Describing the Requested Thumbnail

- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

# size (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The size of the thumbnails.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize size;
```

## See Also

### Describing the Requested Thumbnail

- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

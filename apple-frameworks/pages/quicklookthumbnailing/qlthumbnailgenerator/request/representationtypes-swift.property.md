> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.property](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.property)

# representationTypes (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail sizes that you provide for a thumbnail request.

## Declaration

```swift
var representationTypes: QLThumbnailGenerator.Request.RepresentationTypes { get }
```

<a id="Discussion"></a>

## Discussion

The representation types provide access to icon, low-quality, and high-quality thumbnails so you can request and show a lower-quality thumbnail quickly while computing a higher-quality thumbnail in the background.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

# representationTypes (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail sizes that you provide for a thumbnail request.

## Declaration

```objectivec
@property (nonatomic, readonly) QLThumbnailGenerationRequestRepresentationTypes representationTypes;
```

<a id="Discussion"></a>

## Discussion

The representation types provide access to icon, low-quality, and high-quality thumbnails so you can request and show a lower-quality thumbnail quickly while computing a higher-quality thumbnail in the background.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/minimumdimension](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/minimumdimension)

# minimumDimension (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The minimum height or width for a generated thumbnail.

## Declaration

```swift
var minimumDimension: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines a minimum dimension for a generated thumbnail, returning a thumbnail with a width or height greater or equal to the value of `minimumDimension` \* [scale](scale.md).

The default value for this property is `0`.

If you set this property, and the system can’t generate a thumbnail of `minimumDimension` for any of the requested types represented by [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md), then [QLThumbnailGenerator](../../qlthumbnailgenerator.md) doesn’t generate a thumbnail.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

# minimumDimension (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The minimum height or width for a generated thumbnail.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat minimumDimension;
```

<a id="Discussion"></a>

## Discussion

This property defines a minimum dimension for a generated thumbnail, returning a thumbnail with a width or height greater or equal to the value of `minimumDimension` \* [scale](scale.md).

The default value for this property is `0`.

If you set this property, and the system can’t generate a thumbnail of `minimumDimension` for any of the requested types represented by [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md), then [QLThumbnailGenerator](../../qlthumbnailgenerator.md) doesn’t generate a thumbnail.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

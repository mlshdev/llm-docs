> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/iconmode](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/iconmode)

# iconMode (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value indicating whether the generated thumbnail request should include icon decorations.

## Declaration

```swift
var iconMode: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to generate a thumbnail that’s appropriate to use as a file icon. Depending on the platform, the thumbnail may be embedded in a frame, show a curled corner, or display a background or drop shadow. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), [QLThumbnailGenerator](../../qlthumbnailgenerator.md) generates a raw, undecorated thumbnail.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

# iconMode (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value indicating whether the generated thumbnail request should include icon decorations.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL iconMode;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to generate a thumbnail that’s appropriate to use as a file icon. Depending on the platform, the thumbnail may be embedded in a frame, show a curled corner, or display a background or drop shadow. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), [QLThumbnailGenerator](../../qlthumbnailgenerator.md) generates a raw, undecorated thumbnail.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

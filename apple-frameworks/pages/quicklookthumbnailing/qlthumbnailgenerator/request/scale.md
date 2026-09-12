> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/scale](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/scale)

# scale (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The pixel density of the display on the intended device.

## Declaration

```swift
var scale: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the scale factor, or pixel density, of the device’s display as described in [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/). For example, the value for a device with a `@2x` display is `2.0`.

You can pass the initializer a screen scale that isn’t the current device’s screen scale. For example, you can create thumbnails for different scales, upload them to a server, and download them later on devices with a different screen scale.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerator.Request.RepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

# scale (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The pixel density of the display on the intended device.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

This property represents the scale factor, or pixel density, of the device’s display as described in [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/). For example, the value for a device with a `@2x` display is `2.0`.

You can pass the initializer a screen scale that isn’t the current device’s screen scale. For example, you can create thumbnails for different scales, upload them to a server, and download them later on devices with a different screen scale.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerationRequestRepresentationTypes](representationtypes-swift.struct.md): The various types of thumbnails that you can request.

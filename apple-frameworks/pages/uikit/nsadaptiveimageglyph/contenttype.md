> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph/contenttype](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph/contenttype)

# contentType (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The image data format to use for this image type.

## Declaration

```swift
class var contentType: UTType { get }
```

<a id="Discussion"></a>

## Discussion

Use this type when you need to specify the type of the image data. Adaptive images are compatible with the HEIC format, but include extra metadata about the supported resolutions and sizes.

## See Also

### Getting the content metadata

- [contentIdentifier](contentidentifier.md): A unique identifier for this image.
- [contentDescription](contentdescription.md): An alternate textual description of the image contents.

# contentType (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The image data format to use for this image type.

## Declaration

```objectivec
@property (class, readonly) UTType * contentType;
```

<a id="Discussion"></a>

## Discussion

Use this type when you need to specify the type of the image data. Adaptive images are compatible with the HEIC format, but include extra metadata about the supported resolutions and sizes.

## See Also

### Getting the content metadata

- [contentIdentifier](contentidentifier.md): A unique identifier for this image.
- [contentDescription](contentdescription.md): An alternate textual description of the image contents.

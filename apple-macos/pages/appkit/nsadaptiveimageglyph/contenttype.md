> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph/contenttype](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph/contenttype)

# contentType (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 15.0+

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

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 15.0+

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

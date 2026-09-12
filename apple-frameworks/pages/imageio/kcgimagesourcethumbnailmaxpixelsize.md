> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagesourcethumbnailmaxpixelsize](https://developer.apple.com/documentation/imageio/kcgimagesourcethumbnailmaxpixelsize)

# kCGImageSourceThumbnailMaxPixelSize (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum width and height of a thumbnail image, specified in pixels.

## Declaration

```swift
let kCGImageSourceThumbnailMaxPixelSize: CFString
```

<a id="Discussion"></a>

## Discussion

If this key is not specified, the width and height of a thumbnail is not limited and thumbnails may be as big as the image itself. If present, this key must be a CFNumber value. This key can be provided in the options dictionary that you pass to the function [CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:)](cgimagesourcecreatethumbnailatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

# kCGImageSourceThumbnailMaxPixelSize (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum width and height of a thumbnail image, specified in pixels.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourceThumbnailMaxPixelSize;
```

<a id="Discussion"></a>

## Discussion

If this key is not specified, the width and height of a thumbnail is not limited and thumbnails may be as big as the image itself. If present, this key must be a CFNumber value. This key can be provided in the options dictionary that you pass to the function [CGImageSourceCreateThumbnailAtIndex](cgimagesourcecreatethumbnailatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

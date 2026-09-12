> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagesourcecreatethumbnailfromimageifabsent](https://developer.apple.com/documentation/imageio/kcgimagesourcecreatethumbnailfromimageifabsent)

# kCGImageSourceCreateThumbnailFromImageIfAbsent (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.

## Declaration

```swift
let kCGImageSourceCreateThumbnailFromImageIfAbsent: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBoolean](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

If you set the value of this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the image source creates the thumbnail from the full image, subject to the limit specified by [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md). If you don’t specify a maximum pixel size, the image soucre creates the thumbnail using the image’s full size, which in most cases is not desirable.

Include this key in the options dictionary you pass to the function [CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:)](cgimagesourcecreatethumbnailatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

# kCGImageSourceCreateThumbnailFromImageIfAbsent (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourceCreateThumbnailFromImageIfAbsent;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBooleanRef](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

If you set the value of this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the image source creates the thumbnail from the full image, subject to the limit specified by [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md). If you don’t specify a maximum pixel size, the image soucre creates the thumbnail using the image’s full size, which in most cases is not desirable.

Include this key in the options dictionary you pass to the function [CGImageSourceCreateThumbnailAtIndex](cgimagesourcecreatethumbnailatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

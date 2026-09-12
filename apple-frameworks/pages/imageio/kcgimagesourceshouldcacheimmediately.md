> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagesourceshouldcacheimmediately](https://developer.apple.com/documentation/imageio/kcgimagesourceshouldcacheimmediately)

# kCGImageSourceShouldCacheImmediately (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether image decoding and caching happens at image creation time.

## Declaration

```swift
let kCGImageSourceShouldCacheImmediately: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBoolean](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which causes decoding and caching to happen only when you render the image.

Include this key in the options dictionary you pass to the functions [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md) and [CGImageSourceCreateImageAtIndex(\_:\_:\_:)](cgimagesourcecreateimageatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

# kCGImageSourceShouldCacheImmediately (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether image decoding and caching happens at image creation time.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourceShouldCacheImmediately;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBooleanRef](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which causes decoding and caching to happen only when you render the image.

Include this key in the options dictionary you pass to the functions [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md) and [CGImageSourceCreateImageAtIndex](cgimagesourcecreateimageatindex%28______%29.md).

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

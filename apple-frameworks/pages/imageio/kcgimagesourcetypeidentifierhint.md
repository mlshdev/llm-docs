> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagesourcetypeidentifierhint](https://developer.apple.com/documentation/imageio/kcgimagesourcetypeidentifierhint)

# kCGImageSourceTypeIdentifierHint (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The uniform type identifier that represents your best guess for the image’s type.

## Declaration

```swift
let kCGImageSourceTypeIdentifierHint: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFString](../corefoundation/cfstring.md) object. Add this key to the options dictionary when you create a [CGImageSource](cgimagesource.md) object.

## See Also

### Specifying the Read Options

- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

# kCGImageSourceTypeIdentifierHint (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The uniform type identifier that represents your best guess for the image’s type.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourceTypeIdentifierHint;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFStringRef](../corefoundation/cfstring.md) object. Add this key to the options dictionary when you create a [CGImageSourceRef](cgimagesource.md) object.

## See Also

### Specifying the Read Options

- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

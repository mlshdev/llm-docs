> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageio/kcgimagesourceallowabletypes

# kCGImageSourceAllowableTypes (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Option key for restricting which image formats can be decoded.

## Declaration

```swift
let kCGImageSourceAllowableTypes: CFString
```

<a id="discussion"></a>

## Discussion

The value is a [CFArray](../corefoundation/cfarray.md) containing [CFString](../corefoundation/cfstring.md) Uniform Type Identifiers (UTIs) of allowed image formats. When specified, ImageIO will only decode images whose format matches one of the entries in the allow list. If no matching reader is found, decoding fails.

Unknown format identifiers are ignored. If not specified, all supported ImageIO formats are allowed (default behavior). If process-wide format restrictions were set via [CGImageSourceSetAllowableTypes(\_:)](cgimagesourcesetallowabletypes%28__%29.md), only formats allowed by both mechanisms are permitted.

See also [System-declared uniform type identifiers](../uniformtypeidentifiers/system-declared-uniform-type-identifiers.md).

<a id="Example"></a>

## Example

**Swift**

```swift
let allowedTypes = ["public.jpeg" as CFString, "public.png" as CFString]
let options = [
    kCGImageSourceAllowableTypes: allowedTypes
] as CFDictionary
```

**Objective-C**

```objc
NSArray *allowedTypes = @[@"public.jpeg", @"public.png"];
NSDictionary *options = @{
    (id)kCGImageSourceAllowableTypes: allowedTypes
};
```

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

# kCGImageSourceAllowableTypes (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Option key for restricting which image formats can be decoded.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourceAllowableTypes;
```

<a id="discussion"></a>

## Discussion

The value is a [CFArrayRef](../corefoundation/cfarray.md) containing [CFStringRef](../corefoundation/cfstring.md) Uniform Type Identifiers (UTIs) of allowed image formats. When specified, ImageIO will only decode images whose format matches one of the entries in the allow list. If no matching reader is found, decoding fails.

Unknown format identifiers are ignored. If not specified, all supported ImageIO formats are allowed (default behavior). If process-wide format restrictions were set via [CGImageSourceSetAllowableTypes](cgimagesourcesetallowabletypes%28__%29.md), only formats allowed by both mechanisms are permitted.

See also [System-declared uniform type identifiers](../uniformtypeidentifiers/system-declared-uniform-type-identifiers.md).

<a id="Example"></a>

## Example

**Swift**

```swift
let allowedTypes = ["public.jpeg" as CFString, "public.png" as CFString]
let options = [
    kCGImageSourceAllowableTypes: allowedTypes
] as CFDictionary
```

**Objective-C**

```objc
NSArray *allowedTypes = @[@"public.jpeg", @"public.png"];
NSDictionary *options = @{
    (id)kCGImageSourceAllowableTypes: allowedTypes
};
```

## See Also

### Specifying the Read Options

- [kCGImageSourceTypeIdentifierHint](kcgimagesourcetypeidentifierhint.md): The uniform type identifier that represents your best guess for the image’s type.
- [kCGImageSourceShouldAllowFloat](kcgimagesourceshouldallowfloat.md): A Boolean that indicates whether to use floating-point values in returned images.
- [kCGImageSourceShouldCache](kcgimagesourceshouldcache.md): A Boolean value that indicates whether to cache the decoded image.
- [kCGImageSourceShouldCacheImmediately](kcgimagesourceshouldcacheimmediately.md): A Boolean value that indicates whether image decoding and caching happens at image creation time.
- [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md): A Boolean value that indicates whether to create a thumbnail image automatically if the data source doesn’t contain one.
- [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md): A Boolean value that indicates whether to always create a thumbnail image.
- [kCGImageSourceThumbnailMaxPixelSize](kcgimagesourcethumbnailmaxpixelsize.md): The maximum width and height of a thumbnail image, specified in pixels.
- [kCGImageSourceCreateThumbnailWithTransform](kcgimagesourcecreatethumbnailwithtransform.md): A Boolean value that indicates whether to rotate and scale the thumbnail image to match the image’s orientation and aspect ratio.
- [kCGImageSourceSubsampleFactor](kcgimagesourcesubsamplefactor.md): The factor by which to scale down any returned images.

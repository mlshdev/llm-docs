> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcesetallowabletypes(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcesetallowabletypes(_:))

# CGImageSourceSetAllowableTypes(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

Restricts which image formats can be decoded in the current process.

## Declaration

```swift
func CGImageSourceSetAllowableTypes(_ allowableTypes: CFArray) -> OSStatus
```

## Parameters

- `allowableTypes`: A [CFArray](../corefoundation/cfarray.md) containing [CFString](../corefoundation/cfstring.md) Uniform Type Identifiers (UTIs) of allowed image formats.

<a id="discussion"></a>

## Discussion

When this method has been called, ImageIO will only decode images whose format matches one of the entries in the allow list for the remaining lifetime of the process.

If per-asset format restrictions are set via [kCGImageSourceAllowableTypes](kcgimagesourceallowabletypes.md), only formats allowed by both mechanisms are permitted. If `allowableTypes` is empty, all image parsing is disabled. Unknown format identifiers are ignored. Can only be called once per process; subsequent calls are ignored.

See also [System-declared uniform type identifiers](../uniformtypeidentifiers/system-declared-uniform-type-identifiers.md).

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata(\_:\_:\_:\_:)](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageDestinationCopyImageSource(\_:\_:\_:\_:)](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex(\_:\_:\_:)](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex(\_:\_:)](cgimagesourceremovecacheatindex%28____%29.md)

# CGImageSourceSetAllowableTypes (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

Restricts which image formats can be decoded in the current process.

## Declaration

```objectivec
extern OSStatus CGImageSourceSetAllowableTypes(CFArrayRef allowableTypes);
```

## Parameters

- `allowableTypes`: A [CFArrayRef](../corefoundation/cfarray.md) containing [CFStringRef](../corefoundation/cfstring.md) Uniform Type Identifiers (UTIs) of allowed image formats.

<a id="discussion"></a>

## Discussion

When this method has been called, ImageIO will only decode images whose format matches one of the entries in the allow list for the remaining lifetime of the process.

If per-asset format restrictions are set via [kCGImageSourceAllowableTypes](kcgimagesourceallowabletypes.md), only formats allowed by both mechanisms are permitted. If `allowableTypes` is empty, all image parsing is disabled. Unknown format identifiers are ignored. Can only be called once per process; subsequent calls are ignored.

See also [System-declared uniform type identifiers](../uniformtypeidentifiers/system-declared-uniform-type-identifiers.md).

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageDestinationCopyImageSource](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex](cgimagesourceremovecacheatindex%28____%29.md)

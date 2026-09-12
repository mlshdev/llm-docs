> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagemetadatashouldexcludexmp](https://developer.apple.com/documentation/imageio/kcgimagemetadatashouldexcludexmp)

# kCGImageMetadataShouldExcludeXMP (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to exclude XMP data from the destination.

## Declaration

```swift
let kCGImageMetadataShouldExcludeXMP: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFBoolean](../corefoundation/cfboolean.md) value. The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which causes the destination to include XMP metadata. If you use this flag in conjunction with the [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md) flag, the image destination preserves EXIF and IPTC tags but doesn’t write XMP packets to the file.

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationDateTime](kcgimagedestinationdatetime.md): The date and time information to associate with the image.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md): The metadata tags to include with the image.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.

# kCGImageMetadataShouldExcludeXMP (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to exclude XMP data from the destination.

## Declaration

```objectivec
extern CFStringRef const kCGImageMetadataShouldExcludeXMP;
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFBooleanRef](../corefoundation/cfboolean.md) value. The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which causes the destination to include XMP metadata. If you use this flag in conjunction with the [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md) flag, the image destination preserves EXIF and IPTC tags but doesn’t write XMP packets to the file.

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationDateTime](kcgimagedestinationdatetime.md): The date and time information to associate with the image.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md): The metadata tags to include with the image.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagedestinationdatetime](https://developer.apple.com/documentation/imageio/kcgimagedestinationdatetime)

# kCGImageDestinationDateTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date and time information to associate with the image.

## Declaration

```swift
let kCGImageDestinationDateTime: CFString
```

<a id="Discussion"></a>

## Discussion

This property puts the specified date and time information into the DateTime parameters of the image’s metadata. Specify the value of this key using a [CFString](../corefoundation/cfstring.md) or [CFData](../corefoundation/cfdata.md). For strings, the value must be in EXIF DateTime or ISO 8601 DateTime format.

This option is mutually exclusive with [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md).

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md): The metadata tags to include with the image.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

# kCGImageDestinationDateTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date and time information to associate with the image.

## Declaration

```objectivec
extern CFStringRef const kCGImageDestinationDateTime;
```

<a id="Discussion"></a>

## Discussion

This property puts the specified date and time information into the DateTime parameters of the image’s metadata. Specify the value of this key using a [CFStringRef](../corefoundation/cfstring.md) or [CFDataRef](../corefoundation/cfdata.md). For strings, the value must be in EXIF DateTime or ISO 8601 DateTime format.

This option is mutually exclusive with [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md).

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMetadata](kcgimagedestinationmetadata.md): The metadata tags to include with the image.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

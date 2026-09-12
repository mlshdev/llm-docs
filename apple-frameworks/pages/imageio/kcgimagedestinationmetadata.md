> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagedestinationmetadata](https://developer.apple.com/documentation/imageio/kcgimagedestinationmetadata)

# kCGImageDestinationMetadata (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata tags to include with the image.

## Declaration

```swift
let kCGImageDestinationMetadata: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CGImageMetadata](cgimagemetadata.md) type. When you specify this key, the image destination ovewrites all EXIF, IPTC, and XMP metadata. If you want to merge the new tags with the existing metadata, include the [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md) key in addition to this key.

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationDateTime](kcgimagedestinationdatetime.md): The date and time information to associate with the image.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

# kCGImageDestinationMetadata (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata tags to include with the image.

## Declaration

```objectivec
extern CFStringRef const kCGImageDestinationMetadata;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CGImageMetadataRef](cgimagemetadata.md) type. When you specify this key, the image destination ovewrites all EXIF, IPTC, and XMP metadata. If you want to merge the new tags with the existing metadata, include the [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md) key in addition to this key.

## See Also

### Configuring the Image Behaviors

- [kCGImageDestinationLossyCompressionQuality](kcgimagedestinationlossycompressionquality.md): The desired compression quality to use when writing the image data.
- [kCGImageDestinationBackgroundColor](kcgimagedestinationbackgroundcolor.md): The background color to use when the image has an alpha component, but the destination format doesn’t support alpha.
- [kCGImageDestinationDateTime](kcgimagedestinationdatetime.md): The date and time information to associate with the image.
- [kCGImageDestinationEmbedThumbnail](kcgimagedestinationembedthumbnail.md): A Boolean value that indicates whether to embed a thumbnail for JPEG and HEIF images.
- [kCGImageDestinationImageMaxPixelSize](kcgimagedestinationimagemaxpixelsize.md): The maximum width and height of the image, in pixels.
- [kCGImageDestinationMergeMetadata](kcgimagedestinationmergemetadata.md): A Boolean value that indicates whether to merge new metadata with the image’s existing metadata.
- [kCGImageDestinationOptimizeColorForSharing](kcgimagedestinationoptimizecolorforsharing.md): A Boolean value that indicates whether to create the image using a colorspace.
- [kCGImageDestinationOrientation](kcgimagedestinationorientation.md): The orientation of the image, specified as an EXIF value in the range 1 to 8.
- [kCGImageDestinationPreserveGainMap](kcgimagedestinationpreservegainmap.md): A Boolean value that indicates whether to include a HEIF-embedded gain map in the image data.
- [kCGImageMetadataShouldExcludeGPS](kcgimagemetadatashouldexcludegps.md): A Boolean value that indicates whether to exclude GPS metadata from EXIF data or the corresponding XMP tags.
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

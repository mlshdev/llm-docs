> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestination](https://developer.apple.com/documentation/imageio/cgimagedestination)

# CGImageDestination (Swift)

**Framework:** Image I/O  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type that you use to write image data to a URL, data object, or data consumer.

## Declaration

```swift
class CGImageDestination
```

<a id="overview"></a>

## Overview

A [CGImageDestination](cgimagedestination.md) object provides an abstract interface for saving image data. Use an image destination to represent a single image, or multiple images packaged together. For example, you might create an image that also contains a thumbnail. You can also use the image destination to add metadata to your images.

An image destination outputs data to a URL, a `CFData` object, or a [CGDataConsumer](../coregraphics/cgdataconsumer.md) object, which you specify at creation time. After you create the image destination, add the image data and properties. When you are done, call [CGImageDestinationFinalize(\_:)](cgimagedestinationfinalize%28__%29.md) to finalize the image data and write it to the output location.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Creating an Image Destination

- [CGImageDestinationCreateWithURL(\_:\_:\_:\_:)](cgimagedestinationcreatewithurl%28________%29.md): Creates an image destination that writes image data to the specified URL.
- [CGImageDestinationCreateWithData(\_:\_:\_:\_:)](cgimagedestinationcreatewithdata%28________%29.md): Creates an image destination that writes to a Core Foundation mutable data object.
- [CGImageDestinationCreateWithDataConsumer(\_:\_:\_:\_:)](cgimagedestinationcreatewithdataconsumer%28________%29.md): Creates an image destination that writes to the specified data consumer.

### Adding Images to the Destination

- [CGImageDestinationAddImage(\_:\_:\_:)](cgimagedestinationaddimage%28______%29.md): Adds an image to an image destination.
- [CGImageDestinationAddImageFromSource(\_:\_:\_:\_:)](cgimagedestinationaddimagefromsource%28________%29.md): Adds an image from an image source to an image destination.

### Adding Metadata to the Image

- [CGImageDestinationSetProperties(\_:\_:)](cgimagedestinationsetproperties%28____%29.md): Applies one or more properties to all images in an image destination.
- [CGImageDestinationAddAuxiliaryDataInfo(\_:\_:\_:)](cgimagedestinationaddauxiliarydatainfo%28______%29.md): Sets the auxiliary data, such as mattes and depth information, that accompany the image.

### Finalizing the Image Data

- [CGImageDestinationFinalize(\_:)](cgimagedestinationfinalize%28__%29.md): Writes image data and properties to the data, URL, or data consumer associated with the image destination.

### Getting the Image Types

- [CGImageDestinationCopyTypeIdentifiers()](cgimagedestinationcopytypeidentifiers%28%29.md): Returns an array of the uniform type identifiers that are supported for image destinations.
- [CGImageDestinationGetTypeID()](cgimagedestinationgettypeid%28%29.md): Returns the unique type identifier of an image destination opaque type.

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
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Image Management

- [CGImageSource](cgimagesource.md): An opaque type that you use to read image data from a URL, data object, or data consumer.

# CGImageDestinationRef (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type that you use to write image data to a URL, data object, or data consumer.

## Declaration

```objectivec
typedef struct CGImageDestination * CGImageDestinationRef;
```

<a id="overview"></a>

## Overview

A [CGImageDestinationRef](cgimagedestination.md) object provides an abstract interface for saving image data. Use an image destination to represent a single image, or multiple images packaged together. For example, you might create an image that also contains a thumbnail. You can also use the image destination to add metadata to your images.

An image destination outputs data to a URL, a `CFData` object, or a [CGDataConsumerRef](../coregraphics/cgdataconsumer.md) object, which you specify at creation time. After you create the image destination, add the image data and properties. When you are done, call [CGImageDestinationFinalize](cgimagedestinationfinalize%28__%29.md) to finalize the image data and write it to the output location.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Creating an Image Destination

- [CGImageDestinationCreateWithURL](cgimagedestinationcreatewithurl%28________%29.md): Creates an image destination that writes image data to the specified URL.
- [CGImageDestinationCreateWithData](cgimagedestinationcreatewithdata%28________%29.md): Creates an image destination that writes to a Core Foundation mutable data object.
- [CGImageDestinationCreateWithDataConsumer](cgimagedestinationcreatewithdataconsumer%28________%29.md): Creates an image destination that writes to the specified data consumer.

### Adding Images to the Destination

- [CGImageDestinationAddImage](cgimagedestinationaddimage%28______%29.md): Adds an image to an image destination.
- [CGImageDestinationAddImageFromSource](cgimagedestinationaddimagefromsource%28________%29.md): Adds an image from an image source to an image destination.

### Adding Metadata to the Image

- [CGImageDestinationSetProperties](cgimagedestinationsetproperties%28____%29.md): Applies one or more properties to all images in an image destination.
- [CGImageDestinationAddAuxiliaryDataInfo](cgimagedestinationaddauxiliarydatainfo%28______%29.md): Sets the auxiliary data, such as mattes and depth information, that accompany the image.

### Finalizing the Image Data

- [CGImageDestinationFinalize](cgimagedestinationfinalize%28__%29.md): Writes image data and properties to the data, URL, or data consumer associated with the image destination.

### Getting the Image Types

- [CGImageDestinationCopyTypeIdentifiers](cgimagedestinationcopytypeidentifiers%28%29.md): Returns an array of the uniform type identifiers that are supported for image destinations.
- [CGImageDestinationGetTypeID](cgimagedestinationgettypeid%28%29.md): Returns the unique type identifier of an image destination opaque type.

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
- [kCGImageMetadataShouldExcludeXMP](kcgimagemetadatashouldexcludexmp.md): A Boolean value that indicates whether to exclude XMP data from the destination.

## See Also

### Image Management

- [CGImageSourceRef](cgimagesource.md): An opaque type that you use to read image data from a URL, data object, or data consumer.

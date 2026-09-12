> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesource](https://developer.apple.com/documentation/imageio/cgimagesource)

# CGImageSource (Swift)

**Framework:** Image I/O  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type that you use to read image data from a URL, data object, or data consumer.

## Declaration

```swift
class CGImageSource
```

<a id="overview"></a>

## Overview

Use a [CGImageSource](cgimagesource.md) type to read data efficiently for most image file formats. The image source object manages the data buffers needed to load the image data and performs any operations on that data to turn it into a usable image. For example, it decompresses data stored in a compressed format. You can also use an image source to fetch or create thumbnail images and access metadata stored with the image.

Create an image source object from a [CFURL](../corefoundation/cfurl.md), [CFData](../corefoundation/cfdata.md), or [CGDataProvider](../coregraphics/cgdataprovider.md) data type. The image source object reads data from the specified type and extracts the image information for you.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Creating an Image Source

- [CGImageSourceCreateWithURL(\_:\_:)](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData(\_:\_:)](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider(\_:\_:)](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental(\_:)](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex(\_:\_:\_:)](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:)](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex(\_:)](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

### Updating an Incremental Image

- [CGImageSourceUpdateData(\_:\_:\_:)](cgimagesourceupdatedata%28______%29.md): Updates the data in an incremental image source.
- [CGImageSourceUpdateDataProvider(\_:\_:\_:)](cgimagesourceupdatedataprovider%28______%29.md): Updates an incremental image source with a new data provider.

### Getting the Image Status

- [CGImageSourceGetStatus(\_:)](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceGetStatusAtIndex(\_:\_:)](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.

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

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Image Management

- [CGImageDestination](cgimagedestination.md): An opaque type that you use to write image data to a URL, data object, or data consumer.

# CGImageSourceRef (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type that you use to read image data from a URL, data object, or data consumer.

## Declaration

```objectivec
typedef struct CGImageSource * CGImageSourceRef;
```

<a id="overview"></a>

## Overview

Use a [CGImageSourceRef](cgimagesource.md) type to read data efficiently for most image file formats. The image source object manages the data buffers needed to load the image data and performs any operations on that data to turn it into a usable image. For example, it decompresses data stored in a compressed format. You can also use an image source to fetch or create thumbnail images and access metadata stored with the image.

Create an image source object from a [CFURLRef](../corefoundation/cfurl.md), [CFDataRef](../corefoundation/cfdata.md), or [CGDataProviderRef](../coregraphics/cgdataprovider.md) data type. The image source object reads data from the specified type and extracts the image information for you.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Creating an Image Source

- [CGImageSourceCreateWithURL](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceCreateThumbnailAtIndex](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

### Updating an Incremental Image

- [CGImageSourceUpdateData](cgimagesourceupdatedata%28______%29.md): Updates the data in an incremental image source.
- [CGImageSourceUpdateDataProvider](cgimagesourceupdatedataprovider%28______%29.md): Updates an incremental image source with a new data provider.

### Getting the Image Status

- [CGImageSourceGetStatus](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceGetStatusAtIndex](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.

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

## See Also

### Image Management

- [CGImageDestinationRef](cgimagedestination.md): An opaque type that you use to write image data to a URL, data object, or data consumer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio](https://developer.apple.com/documentation/imageio)

# Image I/O (Swift)

**Framework:** Image I/O  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Read and write most image file formats, and access an image’s metadata.

<a id="overview"></a>

## Overview

The Image I/O framework allows applications to read and write most image file formats. This framework offers high efficiency, color management, and access to image metadata.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Image Management

- [CGImageSource](imageio/cgimagesource.md): An opaque type that you use to read image data from a URL, data object, or data consumer.
- [CGImageDestination](imageio/cgimagedestination.md): An opaque type that you use to write image data to a URL, data object, or data consumer.

### XMP Metadata

- [CGImageMetadata](imageio/cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadata](imageio/cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTag](imageio/cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](imageio/xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](imageio/kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](imageio/cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.

### Common Image Properties

- [Image Properties](imageio/image-properties.md): Properties that apply to the container in general, and not necessarily to an individual image in the container.
- [EXIF Dictionary Keys](imageio/exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [IPTC Dictionary Keys](imageio/iptc-dictionary-keys.md): Metadata keys for International Press Telecommunications Council (IPTC) data.
- [GPS Dictionary Keys](imageio/gps-dictionary-keys.md): Keys for Global Positioning System (GPS) information.
- [WebP Data](imageio/webp-data.md): Metadata keys for WebP metadata.

### Format-Specific Properties

- [CIFF Image Properties](imageio/ciff-image-properties.md): Metadata keys for the Camera Image File Format (CIFF) image format.
- [DNG Image Properties](imageio/dng-image-properties.md): Metadata keys for the Digital Negative (DNG) archival format.
- [GIF Image Properties](imageio/gif-image-properties.md): Metadata keys for the Graphics Interchange Format (GIF).
- [HEIC Image Properties](imageio/heic-image-properties.md): Metadata keys for the High Efficiency Image Container (HEIC) format.
- [JFIF Image Properties](imageio/jfif-image-properties.md): Metadata keys for the JPEG File Interchange Format (JFIF).
- [PNG Image Properties](imageio/png-image-properties.md): Metadata keys for the Portable Network Graphics (PNG) format.
- [TGA Image Properties](imageio/tga-image-properties.md): Metadata keys for the Truevision Graphics Adapter (TGA) format.
- [TIFF Image Properties](imageio/tiff-image-properties.md): Metadata keys for the Tagged Image File Format (TIFF).
- [8BIM Image Properties](imageio/8bim-image-properties.md): Metadata keys for the Adobe Photoshop image format.

### Manufacturer-Specific Properties

- [Nikon Camera Dictionary Keys](imageio/nikon-camera-dictionary-keys.md): Metadata keys for an image from a Nikon camera.
- [Canon Camera Dictionary Keys](imageio/canon-camera-dictionary-keys.md): Metadata keys for an image from a Canon camera.
- [kCGImagePropertyMakerAppleDictionary](imageio/kcgimagepropertymakerappledictionary.md): A dictionary of key-value pairs for an image from an Apple camera.
- [kCGImagePropertyMakerMinoltaDictionary](imageio/kcgimagepropertymakerminoltadictionary.md): A dictionary of key-value pairs for an image from a Minolta camera.
- [kCGImagePropertyMakerFujiDictionary](imageio/kcgimagepropertymakerfujidictionary.md): A dictionary of key-value pairs for an image from a Fuji camera.
- [kCGImagePropertyMakerOlympusDictionary](imageio/kcgimagepropertymakerolympusdictionary.md): A dictionary of key-value pairs for an image from a Olympus camera.
- [kCGImagePropertyMakerPentaxDictionary](imageio/kcgimagepropertymakerpentaxdictionary.md): A dictionary of key-value pairs for an image from a Pentax camera.
- [kCGImagePropertyRawDictionary](imageio/kcgimagepropertyrawdictionary.md): A dictionary of key-value pairs for an image that contains minimally processed, or raw, data.

### Spatial Photos

- [Writing spatial photos](imageio/writing-spatial-photos.md): Create spatial photos for visionOS by packaging a pair of left- and right-eye images as a stereo HEIC file with related spatial metadata.
- [Creating spatial photos and videos with spatial metadata](imageio/creating-spatial-photos-and-videos-with-spatial-metadata.md): Add spatial metadata to stereo photos and videos to create spatial media for viewing on Apple Vision Pro.

### Animations

- [CGAnimateImageAtURLWithBlock(\_:\_:\_:)](imageio/cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock(\_:\_:\_:)](imageio/cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](imageio/cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](imageio/kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](imageio/kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](imageio/kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](imageio/cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.

### Reference

- [Image I/O Constants](imageio/image-i-o-constants.md)
- [Image I/O Functions](imageio/image-i-o-functions.md)
- [Image I/O Macros](imageio/image-i-o-macros.md)

### Variables

- [kCGComputeHDRStats](imageio/kcgcomputehdrstats.md)
- [kCGImageDestinationEncodeAlternateColorSpace](imageio/kcgimagedestinationencodealternatecolorspace.md)
- [kCGImageDestinationEncodeBaseColorSpace](imageio/kcgimagedestinationencodebasecolorspace.md)
- [kCGImageDestinationEncodeBaseIsSDR](imageio/kcgimagedestinationencodebaseissdr.md)
- [kCGImageDestinationEncodeBasePixelFormatRequest](imageio/kcgimagedestinationencodebasepixelformatrequest.md)
- [kCGImageDestinationEncodeGainMapPixelFormatRequest](imageio/kcgimagedestinationencodegainmappixelformatrequest.md)
- [kCGImageDestinationEncodeGainMapSubsampleFactor](imageio/kcgimagedestinationencodegainmapsubsamplefactor.md)
- [kCGImageDestinationEncodeGenerateGainMapWithBaseImage](imageio/kcgimagedestinationencodegenerategainmapwithbaseimage.md)
- [kCGImageDestinationEncodeIsBaseImage](imageio/kcgimagedestinationencodeisbaseimage.md)
- [kCGImageDestinationEncodeRequest](imageio/kcgimagedestinationencoderequest.md)
- [kCGImageDestinationEncodeRequestOptions](imageio/kcgimagedestinationencoderequestoptions.md)
- [kCGImageDestinationEncodeToISOGainmap](imageio/kcgimagedestinationencodetoisogainmap.md)
- [kCGImageDestinationEncodeToISOHDR](imageio/kcgimagedestinationencodetoisohdr.md)
- [kCGImageDestinationEncodeToSDR](imageio/kcgimagedestinationencodetosdr.md)
- [kCGImageDestinationEncodeTonemapMode](imageio/kcgimagedestinationencodetonemapmode.md)
- [kCGImagePropertyASTCBlockSize](imageio/kcgimagepropertyastcblocksize.md)
- [kCGImagePropertyASTCBlockSize4x4](imageio/kcgimagepropertyastcblocksize4x4.md)
- [kCGImagePropertyASTCBlockSize8x8](imageio/kcgimagepropertyastcblocksize8x8.md)
- [kCGImagePropertyASTCEncoder](imageio/kcgimagepropertyastcencoder.md)
- [kCGImagePropertyBCEncoder](imageio/kcgimagepropertybcencoder.md)
- [kCGImagePropertyBCFormat](imageio/kcgimagepropertybcformat.md)
- [kCGImagePropertyEncoder](imageio/kcgimagepropertyencoder.md)
- [kCGImagePropertyOpenEXRCompression](imageio/kcgimagepropertyopenexrcompression.md)
- [kCGImagePropertyPVREncoder](imageio/kcgimagepropertypvrencoder.md)
- [kCGImageProviderPreferredTileHeight](imageio/kcgimageproviderpreferredtileheight.md)
- [kCGImageProviderPreferredTileWidth](imageio/kcgimageproviderpreferredtilewidth.md)
- [kCGImageSourceAllowableTypes](imageio/kcgimagesourceallowabletypes.md): Option key for restricting which image formats can be decoded.
- [kCGImageSourceGenerateImageSpecificLumaScaling](imageio/kcgimagesourcegenerateimagespecificlumascaling.md)
- [kCGImageSourcePrioritizeQuality](imageio/kcgimagesourceprioritizequality.md): A Boolean value that indicates whether to prioritize image quality over decode speed.

# Image I/O (Objective-C)

**Framework:** Image I/O  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Read and write most image file formats, and access an image’s metadata.

<a id="overview"></a>

## Overview

The Image I/O framework allows applications to read and write most image file formats. This framework offers high efficiency, color management, and access to image metadata.

For more information, see [Image I/O Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageIOGuide/imageio_intro/ikpg_intro.html#//apple_ref/doc/uid/TP40005462).

## Topics

### Image Management

- [CGImageSourceRef](imageio/cgimagesource.md): An opaque type that you use to read image data from a URL, data object, or data consumer.
- [CGImageDestinationRef](imageio/cgimagedestination.md): An opaque type that you use to write image data to a URL, data object, or data consumer.

### XMP Metadata

- [CGImageMetadataRef](imageio/cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadataRef](imageio/cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTagRef](imageio/cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](imageio/xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](imageio/kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](imageio/cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.

### Common Image Properties

- [Image Properties](imageio/image-properties.md): Properties that apply to the container in general, and not necessarily to an individual image in the container.
- [EXIF Dictionary Keys](imageio/exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [IPTC Dictionary Keys](imageio/iptc-dictionary-keys.md): Metadata keys for International Press Telecommunications Council (IPTC) data.
- [GPS Dictionary Keys](imageio/gps-dictionary-keys.md): Keys for Global Positioning System (GPS) information.
- [WebP Data](imageio/webp-data.md): Metadata keys for WebP metadata.

### Format-Specific Properties

- [CIFF Image Properties](imageio/ciff-image-properties.md): Metadata keys for the Camera Image File Format (CIFF) image format.
- [DNG Image Properties](imageio/dng-image-properties.md): Metadata keys for the Digital Negative (DNG) archival format.
- [GIF Image Properties](imageio/gif-image-properties.md): Metadata keys for the Graphics Interchange Format (GIF).
- [HEIC Image Properties](imageio/heic-image-properties.md): Metadata keys for the High Efficiency Image Container (HEIC) format.
- [JFIF Image Properties](imageio/jfif-image-properties.md): Metadata keys for the JPEG File Interchange Format (JFIF).
- [PNG Image Properties](imageio/png-image-properties.md): Metadata keys for the Portable Network Graphics (PNG) format.
- [TGA Image Properties](imageio/tga-image-properties.md): Metadata keys for the Truevision Graphics Adapter (TGA) format.
- [TIFF Image Properties](imageio/tiff-image-properties.md): Metadata keys for the Tagged Image File Format (TIFF).
- [8BIM Image Properties](imageio/8bim-image-properties.md): Metadata keys for the Adobe Photoshop image format.

### Manufacturer-Specific Properties

- [Nikon Camera Dictionary Keys](imageio/nikon-camera-dictionary-keys.md): Metadata keys for an image from a Nikon camera.
- [Canon Camera Dictionary Keys](imageio/canon-camera-dictionary-keys.md): Metadata keys for an image from a Canon camera.
- [kCGImagePropertyMakerAppleDictionary](imageio/kcgimagepropertymakerappledictionary.md): A dictionary of key-value pairs for an image from an Apple camera.
- [kCGImagePropertyMakerMinoltaDictionary](imageio/kcgimagepropertymakerminoltadictionary.md): A dictionary of key-value pairs for an image from a Minolta camera.
- [kCGImagePropertyMakerFujiDictionary](imageio/kcgimagepropertymakerfujidictionary.md): A dictionary of key-value pairs for an image from a Fuji camera.
- [kCGImagePropertyMakerOlympusDictionary](imageio/kcgimagepropertymakerolympusdictionary.md): A dictionary of key-value pairs for an image from a Olympus camera.
- [kCGImagePropertyMakerPentaxDictionary](imageio/kcgimagepropertymakerpentaxdictionary.md): A dictionary of key-value pairs for an image from a Pentax camera.
- [kCGImagePropertyRawDictionary](imageio/kcgimagepropertyrawdictionary.md): A dictionary of key-value pairs for an image that contains minimally processed, or raw, data.

### Spatial Photos

- [Writing spatial photos](imageio/writing-spatial-photos.md): Create spatial photos for visionOS by packaging a pair of left- and right-eye images as a stereo HEIC file with related spatial metadata.
- [Creating spatial photos and videos with spatial metadata](imageio/creating-spatial-photos-and-videos-with-spatial-metadata.md): Add spatial metadata to stereo photos and videos to create spatial media for viewing on Apple Vision Pro.

### Animations

- [CGAnimateImageAtURLWithBlock](imageio/cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock](imageio/cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](imageio/cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](imageio/kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](imageio/kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](imageio/kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](imageio/cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.

### Reference

- [Image I/O Constants](imageio/image-i-o-constants.md)
- [Image I/O Functions](imageio/image-i-o-functions.md)
- [Image I/O Macros](imageio/image-i-o-macros.md)

### Variables

- [kCGComputeHDRStats](imageio/kcgcomputehdrstats.md)
- [kCGImageDestinationEncodeAlternateColorSpace](imageio/kcgimagedestinationencodealternatecolorspace.md)
- [kCGImageDestinationEncodeBaseColorSpace](imageio/kcgimagedestinationencodebasecolorspace.md)
- [kCGImageDestinationEncodeBaseIsSDR](imageio/kcgimagedestinationencodebaseissdr.md)
- [kCGImageDestinationEncodeBasePixelFormatRequest](imageio/kcgimagedestinationencodebasepixelformatrequest.md)
- [kCGImageDestinationEncodeGainMapPixelFormatRequest](imageio/kcgimagedestinationencodegainmappixelformatrequest.md)
- [kCGImageDestinationEncodeGainMapSubsampleFactor](imageio/kcgimagedestinationencodegainmapsubsamplefactor.md)
- [kCGImageDestinationEncodeGenerateGainMapWithBaseImage](imageio/kcgimagedestinationencodegenerategainmapwithbaseimage.md)
- [kCGImageDestinationEncodeIsBaseImage](imageio/kcgimagedestinationencodeisbaseimage.md)
- [kCGImageDestinationEncodeRequest](imageio/kcgimagedestinationencoderequest.md)
- [kCGImageDestinationEncodeRequestOptions](imageio/kcgimagedestinationencoderequestoptions.md)
- [kCGImageDestinationEncodeToISOGainmap](imageio/kcgimagedestinationencodetoisogainmap.md)
- [kCGImageDestinationEncodeToISOHDR](imageio/kcgimagedestinationencodetoisohdr.md)
- [kCGImageDestinationEncodeToSDR](imageio/kcgimagedestinationencodetosdr.md)
- [kCGImageDestinationEncodeTonemapMode](imageio/kcgimagedestinationencodetonemapmode.md)
- [kCGImagePropertyASTCBlockSize](imageio/kcgimagepropertyastcblocksize.md)
- [kCGImagePropertyASTCBlockSize4x4](imageio/kcgimagepropertyastcblocksize4x4.md)
- [kCGImagePropertyASTCBlockSize8x8](imageio/kcgimagepropertyastcblocksize8x8.md)
- [kCGImagePropertyASTCEncoder](imageio/kcgimagepropertyastcencoder.md)
- [kCGImagePropertyBCEncoder](imageio/kcgimagepropertybcencoder.md)
- [kCGImagePropertyBCFormat](imageio/kcgimagepropertybcformat.md)
- [kCGImagePropertyEncoder](imageio/kcgimagepropertyencoder.md)
- [kCGImagePropertyOpenEXRCompression](imageio/kcgimagepropertyopenexrcompression.md)
- [kCGImagePropertyPVREncoder](imageio/kcgimagepropertypvrencoder.md)
- [kCGImageProviderPreferredTileHeight](imageio/kcgimageproviderpreferredtileheight.md)
- [kCGImageProviderPreferredTileWidth](imageio/kcgimageproviderpreferredtilewidth.md)
- [kCGImageSourceAllowableTypes](imageio/kcgimagesourceallowabletypes.md): Option key for restricting which image formats can be decoded.
- [kCGImageSourceGenerateImageSpecificLumaScaling](imageio/kcgimagesourcegenerateimagespecificlumascaling.md)
- [kCGImageSourcePrioritizeQuality](imageio/kcgimagesourceprioritizequality.md): A Boolean value that indicates whether to prioritize image quality over decode speed.

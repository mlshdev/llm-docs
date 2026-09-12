> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer](https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer)

# AVCapturePhotoFileDataRepresentationCustomizer (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A protocol that defines the methods to implement to customize the packaging of photo data.

## Declaration

```swift
protocol AVCapturePhotoFileDataRepresentationCustomizer : NSObjectProtocol
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="overview"></a>

## Overview

AVCapturePhoto is a wrapper representing a photo in a file container. To flatten the photo to an [NSData](../foundation/nsdata.md) object to write to file, call [fileDataRepresentation()](avcapturephoto/filedatarepresentation%28%29.md). For more complex flattening operations such as replacing or stripping metadata, call [fileDataRepresentation(with:)](avcapturephoto/filedatarepresentation%28with_%29.md) and provide a delegate for customized replacement or stripping behavior. This delegate’s methods are called synchronously before the flattening process begins.

## Topics

### Replacing or removing metadata

- [replacementMetadata(for:)](avcapturephotofiledatarepresentationcustomizer/replacementmetadata%28for_%29.md): A callback in which you can provide replacement metadata or direct [AVCapturePhoto](avcapturephoto.md) to strip existing metadata from the flattened file.
- [replacementEmbeddedThumbnailPixelBuffer(withPhotoFormat:for:)](avcapturephotofiledatarepresentationcustomizer/replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthData(for:)](avcapturephotofiledatarepresentationcustomizer/replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatte(for:)](avcapturephotofiledatarepresentationcustomizer/replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementSemanticSegmentationMatte(ofType:for:)](avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte%28oftype_for_%29.md): Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.
- [replacementAppleProRAWCompressionSettings(for:defaultSettings:maximumBitDepth:)](avcapturephotofiledatarepresentationcustomizer/replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Packaging data for file output

- [fileDataRepresentation(with:)](avcapturephoto/filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [fileDataRepresentation()](avcapturephoto/filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [cgImageRepresentation()](avcapturephoto/cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation()](avcapturephoto/previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentation(withReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:)](avcapturephoto/filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

# AVCapturePhotoFileDataRepresentationCustomizer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A protocol that defines the methods to implement to customize the packaging of photo data.

## Declaration

```objectivec
@protocol AVCapturePhotoFileDataRepresentationCustomizer <NSObject>
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="overview"></a>

## Overview

AVCapturePhoto is a wrapper representing a photo in a file container. To flatten the photo to an [NSData](../foundation/nsdata.md) object to write to file, call [fileDataRepresentation](avcapturephoto/filedatarepresentation%28%29.md). For more complex flattening operations such as replacing or stripping metadata, call [fileDataRepresentationWithCustomizer:](avcapturephoto/filedatarepresentation%28with_%29.md) and provide a delegate for customized replacement or stripping behavior. This delegate’s methods are called synchronously before the flattening process begins.

## Topics

### Replacing or removing metadata

- [replacementMetadataForPhoto:](avcapturephotofiledatarepresentationcustomizer/replacementmetadata%28for_%29.md): A callback in which you can provide replacement metadata or direct [AVCapturePhoto](avcapturephoto.md) to strip existing metadata from the flattened file.
- [replacementEmbeddedThumbnailPixelBufferWithPhotoFormat:forPhoto:](avcapturephotofiledatarepresentationcustomizer/replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthDataForPhoto:](avcapturephotofiledatarepresentationcustomizer/replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatteForPhoto:](avcapturephotofiledatarepresentationcustomizer/replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementSemanticSegmentationMatteOfType:forPhoto:](avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte%28oftype_for_%29.md): Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.
- [replacementAppleProRAWCompressionSettingsForPhoto:defaultSettings:maximumBitDepth:](avcapturephotofiledatarepresentationcustomizer/replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Packaging data for file output

- [fileDataRepresentationWithCustomizer:](avcapturephoto/filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [fileDataRepresentation](avcapturephoto/filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [CGImageRepresentation](avcapturephoto/cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation](avcapturephoto/previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:](avcapturephoto/filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/filedatarepresentation()](https://developer.apple.com/documentation/avfoundation/avcapturephoto/filedatarepresentation())

# fileDataRepresentation() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Generates and returns a flat data representation of the photo and its attachments.

## Declaration

```swift
func fileDataRepresentation() -> Data?
```

<a id="return-value"></a>

## Return Value

Data appropriate for writing to a file of the type specified when requesting photo capture, or `nil` if the photo and attachment data cannot be flattened.

## Mentioned In

- [Saving captured photos](../saving-captured-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)
- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)
- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

<a id="Discussion"></a>

## Discussion

When you request a photo capture with the [AVCapturePhotoOutput](../avcapturephotooutput.md) [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you provide specifies image data formats (such as JPEG and HEVC) and container file formats (such as JFIF and HEIF) for the resulting image file. Calling this method formats and packages the image pixel buffer, along with metadata and other attachments created during capture (such as preview photos and depth maps), into data appropriate for writing to a file of that type.

## See Also

### Packaging data for file output

- [fileDataRepresentation(with:)](filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [cgImageRepresentation()](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation()](previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentation(withReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:)](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

# fileDataRepresentation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Generates and returns a flat data representation of the photo and its attachments.

## Declaration

```objectivec
- (NSData *) fileDataRepresentation;
```

<a id="return-value"></a>

## Return Value

Data appropriate for writing to a file of the type specified when requesting photo capture, or `nil` if the photo and attachment data cannot be flattened.

## Mentioned In

- [Saving captured photos](../saving-captured-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)
- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)
- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

<a id="Discussion"></a>

## Discussion

When you request a photo capture with the [AVCapturePhotoOutput](../avcapturephotooutput.md) [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you provide specifies image data formats (such as JPEG and HEVC) and container file formats (such as JFIF and HEIF) for the resulting image file. Calling this method formats and packages the image pixel buffer, along with metadata and other attachments created during capture (such as preview photos and depth maps), into data appropriate for writing to a file of that type.

## See Also

### Packaging data for file output

- [fileDataRepresentationWithCustomizer:](filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [CGImageRepresentation](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation](previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/filedatarepresentation(with:)](https://developer.apple.com/documentation/avfoundation/avcapturephoto/filedatarepresentation(with:))

# fileDataRepresentation(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Gets a customized representation of the photo data.

## Declaration

```swift
func fileDataRepresentation(with customizer: any AVCapturePhotoFileDataRepresentationCustomizer) -> Data?
```

## Parameters

- `customizer`: An object that customizes the returned metadata, image thumbnail, or depth data.

<a id="return-value"></a>

## Return Value

A data representation of the photo.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

## See Also

### Packaging data for file output

- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation()](filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [cgImageRepresentation()](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation()](previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentation(withReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:)](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

# fileDataRepresentationWithCustomizer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Gets a customized representation of the photo data.

## Declaration

```objectivec
- (NSData *) fileDataRepresentationWithCustomizer:(id<AVCapturePhotoFileDataRepresentationCustomizer>) customizer;
```

## Parameters

- `customizer`: An object that customizes the returned metadata, image thumbnail, or depth data.

<a id="return-value"></a>

## Return Value

A data representation of the photo.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

## See Also

### Packaging data for file output

- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation](filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [CGImageRepresentation](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation](previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

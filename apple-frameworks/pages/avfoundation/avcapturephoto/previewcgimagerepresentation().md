> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/previewcgimagerepresentation()](https://developer.apple.com/documentation/avfoundation/avcapturephoto/previewcgimagerepresentation())

# previewCGImageRepresentation() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Extracts and returns the captured photo’s preview image as a Core Graphics image object.

## Declaration

```swift
func previewCGImageRepresentation() -> CGImage?
```

<a id="return-value"></a>

## Return Value

A Core Graphics image representation of the captured photo, or `nil` if either the image cannot be converted or a preview image was not requested as part of the photo capture.

## See Also

### Packaging data for file output

- [fileDataRepresentation(with:)](filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation()](filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [cgImageRepresentation()](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [fileDataRepresentation(withReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:)](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

# previewCGImageRepresentation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Extracts and returns the captured photo’s preview image as a Core Graphics image object.

## Declaration

```objectivec
- (CGImageRef) previewCGImageRepresentation;
```

<a id="return-value"></a>

## Return Value

A Core Graphics image representation of the captured photo, or `nil` if either the image cannot be converted or a preview image was not requested as part of the photo capture.

## See Also

### Packaging data for file output

- [fileDataRepresentationWithCustomizer:](filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](../avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation](filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [CGImageRepresentation](cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:](filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

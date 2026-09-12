> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/dngphotodatarepresentation(forrawsamplebuffer:previewphotosamplebuffer:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/dngphotodatarepresentation(forrawsamplebuffer:previewphotosamplebuffer:))

# dngPhotoDataRepresentation(forRawSampleBuffer:previewPhotoSampleBuffer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

> In iOS 11 and later, implement the [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method in your capture delegate and use the [fileDataRepresentation()](../avcapturephoto/filedatarepresentation%28%29.md) method of the resulting [AVCapturePhoto](../avcapturephoto.md) object.

## Declaration

```swift
class func dngPhotoDataRepresentation(forRawSampleBuffer rawSampleBuffer: CMSampleBuffer, previewPhotoSampleBuffer: CMSampleBuffer?) -> Data?
```

## Parameters

- `rawSampleBuffer`: A sample buffer containing the RAW photo capture result to be formatted for output.
- `previewPhotoSampleBuffer`: An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the DNG output as a thumbnail image. Pass `nil` to skip adding a preview image to the output.

<a id="return-value"></a>

## Return Value

A data object containing a DNG representation of the requested photo capture results, or `nil` if the sample buffers cannot be packaged for output.

<a id="Discussion"></a>

## Discussion

After you request a photo capture with the [capturePhoto(with:delegate:)](capturephoto%28with_delegate_%29.md) method, the photo capture output delivers results to your delegate as one or more [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) objects. (See the [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.) To repackage the sample buffer’s content for output as a DNG file, use this class method. Optionally, you can include metadata in the resulting DNG output by attaching it to the sample buffer before calling this method.

> **Important**

>  The `rawSampleBuffer` parameter must reference a sample buffer from a RAW capture. See the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property for photo capture settings.

## See Also

### Getting formatted output

- [jpegPhotoDataRepresentation(forJPEGSampleBuffer:previewPhotoSampleBuffer:)](jpegphotodatarepresentation%28forjpegsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.

# DNGPhotoDataRepresentationForRawSampleBuffer:previewPhotoSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

> In iOS 11 and later, implement the [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method in your capture delegate and use the [fileDataRepresentation](../avcapturephoto/filedatarepresentation%28%29.md) method of the resulting [AVCapturePhoto](../avcapturephoto.md) object.

## Declaration

```objectivec
+ (NSData *) DNGPhotoDataRepresentationForRawSampleBuffer:(CMSampleBufferRef) rawSampleBuffer previewPhotoSampleBuffer:(CMSampleBufferRef) previewPhotoSampleBuffer;
```

## Parameters

- `rawSampleBuffer`: A sample buffer containing the RAW photo capture result to be formatted for output.
- `previewPhotoSampleBuffer`: An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the DNG output as a thumbnail image. Pass `nil` to skip adding a preview image to the output.

<a id="return-value"></a>

## Return Value

A data object containing a DNG representation of the requested photo capture results, or `nil` if the sample buffers cannot be packaged for output.

<a id="Discussion"></a>

## Discussion

After you request a photo capture with the [capturePhotoWithSettings:delegate:](capturephoto%28with_delegate_%29.md) method, the photo capture output delivers results to your delegate as one or more [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) objects. (See the [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.) To repackage the sample buffer’s content for output as a DNG file, use this class method. Optionally, you can include metadata in the resulting DNG output by attaching it to the sample buffer before calling this method.

> **Important**

>  The `rawSampleBuffer` parameter must reference a sample buffer from a RAW capture. See the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property for photo capture settings.

## See Also

### Getting formatted output

- [JPEGPhotoDataRepresentationForJPEGSampleBuffer:previewPhotoSampleBuffer:](jpegphotodatarepresentation%28forjpegsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.

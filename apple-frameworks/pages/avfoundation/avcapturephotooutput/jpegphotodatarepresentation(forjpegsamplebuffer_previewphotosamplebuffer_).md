> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/jpegphotodatarepresentation(forjpegsamplebuffer:previewphotosamplebuffer:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/jpegphotodatarepresentation(forjpegsamplebuffer:previewphotosamplebuffer:))

# jpegPhotoDataRepresentation(forJPEGSampleBuffer:previewPhotoSampleBuffer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.

> In iOS 11 and later, implement the [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method in your capture delegate and use the [fileDataRepresentation()](../avcapturephoto/filedatarepresentation%28%29.md) method of the resulting [AVCapturePhoto](../avcapturephoto.md) object.

## Declaration

```swift
class func jpegPhotoDataRepresentation(forJPEGSampleBuffer JPEGSampleBuffer: CMSampleBuffer, previewPhotoSampleBuffer: CMSampleBuffer?) -> Data?
```

## Parameters

- `JPEGSampleBuffer`: A sample buffer containing the JPEG photo capture result to be formatted for output.
- `previewPhotoSampleBuffer`: An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the JPEG output as a thumbnail image. Pass `nil` to skip adding a preview image to the output.

<a id="return-value"></a>

## Return Value

A data object containing a JPEG representation of the requested photo capture results, or `nil` if the sample buffers cannot be packaged for output.

<a id="Discussion"></a>

## Discussion

After you request a photo capture with the [capturePhoto(with:delegate:)](capturephoto%28with_delegate_%29.md) method, the photo capture output delivers results to your delegate as one or more [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) objects. (See the [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.) To repackage the sample buffer’s content for output as a JPEG file, use this class method. Optionally, you can include metadata in the resulting JPEG output by attaching it to the sample buffer before calling this method.

> **Important**

>  The `jpegSampleBuffer` parameter must reference a sample buffer from a JPEG capture. See the [format](../avcapturephotosettings/format.md) property for photo capture settings.

## See Also

### Getting formatted output

- [dngPhotoDataRepresentation(forRawSampleBuffer:previewPhotoSampleBuffer:)](dngphotodatarepresentation%28forrawsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

# JPEGPhotoDataRepresentationForJPEGSampleBuffer:previewPhotoSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.

> In iOS 11 and later, implement the [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method in your capture delegate and use the [fileDataRepresentation](../avcapturephoto/filedatarepresentation%28%29.md) method of the resulting [AVCapturePhoto](../avcapturephoto.md) object.

## Declaration

```objectivec
+ (NSData *) JPEGPhotoDataRepresentationForJPEGSampleBuffer:(CMSampleBufferRef) JPEGSampleBuffer previewPhotoSampleBuffer:(CMSampleBufferRef) previewPhotoSampleBuffer;
```

## Parameters

- `JPEGSampleBuffer`: A sample buffer containing the JPEG photo capture result to be formatted for output.
- `previewPhotoSampleBuffer`: An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the JPEG output as a thumbnail image. Pass `nil` to skip adding a preview image to the output.

<a id="return-value"></a>

## Return Value

A data object containing a JPEG representation of the requested photo capture results, or `nil` if the sample buffers cannot be packaged for output.

<a id="Discussion"></a>

## Discussion

After you request a photo capture with the [capturePhotoWithSettings:delegate:](capturephoto%28with_delegate_%29.md) method, the photo capture output delivers results to your delegate as one or more [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) objects. (See the [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.) To repackage the sample buffer’s content for output as a JPEG file, use this class method. Optionally, you can include metadata in the resulting JPEG output by attaching it to the sample buffer before calling this method.

> **Important**

>  The `jpegSampleBuffer` parameter must reference a sample buffer from a JPEG capture. See the [format](../avcapturephotosettings/format.md) property for photo capture settings.

## See Also

### Getting formatted output

- [DNGPhotoDataRepresentationForRawSampleBuffer:previewPhotoSampleBuffer:](dngphotodatarepresentation%28forrawsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

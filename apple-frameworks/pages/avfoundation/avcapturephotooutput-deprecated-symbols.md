> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput-deprecated-symbols](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Getting formatted output

- [jpegPhotoDataRepresentation(forJPEGSampleBuffer:previewPhotoSampleBuffer:)](avcapturephotooutput/jpegphotodatarepresentation%28forjpegsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.
- [dngPhotoDataRepresentation(forRawSampleBuffer:previewPhotoSampleBuffer:)](avcapturephotooutput/dngphotodatarepresentation%28forrawsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

### Configuring dual camera capture

- [isDualCameraFusionSupported](avcapturephotooutput/isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [isDualCameraDualPhotoDeliverySupported](avcapturephotooutput/isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.
- [isDualCameraDualPhotoDeliveryEnabled](avcapturephotooutput/isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

### Configuring high-resolution still capture

- [isHighResolutionCaptureEnabled](avcapturephotooutput/ishighresolutioncaptureenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for high resolution still image capture.

### Monitoring the visible scene

- [isStillImageStabilizationScene](avcapturephotooutput/isstillimagestabilizationscene.md): Deprecated. A Boolean value indicating whether the scene currently being previewed by the camera warrants image stabilization.

### Determining available settings

- [isStillImageStabilizationSupported](avcapturephotooutput/isstillimagestabilizationsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatic stabilization for still image capture.

# Deprecated symbols (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Getting formatted output

- [JPEGPhotoDataRepresentationForJPEGSampleBuffer:previewPhotoSampleBuffer:](avcapturephotooutput/jpegphotodatarepresentation%28forjpegsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.
- [DNGPhotoDataRepresentationForRawSampleBuffer:previewPhotoSampleBuffer:](avcapturephotooutput/dngphotodatarepresentation%28forrawsamplebuffer_previewphotosamplebuffer_%29.md): Deprecated. Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.

### Configuring dual camera capture

- [dualCameraFusionSupported](avcapturephotooutput/isdualcamerafusionsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.
- [dualCameraDualPhotoDeliverySupported](avcapturephotooutput/isdualcameradualphotodeliverysupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.
- [dualCameraDualPhotoDeliveryEnabled](avcapturephotooutput/isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

### Configuring high-resolution still capture

- [highResolutionCaptureEnabled](avcapturephotooutput/ishighresolutioncaptureenabled.md): Deprecated. A Boolean value that specifies whether to configure the capture pipeline for high resolution still image capture.

### Monitoring the visible scene

- [isStillImageStabilizationScene](avcapturephotooutput/isstillimagestabilizationscene.md): Deprecated. A Boolean value indicating whether the scene currently being previewed by the camera warrants image stabilization.

### Determining available settings

- [stillImageStabilizationSupported](avcapturephotooutput/isstillimagestabilizationsupported.md): Deprecated. A Boolean value indicating whether the capture output currently supports automatic stabilization for still image capture.

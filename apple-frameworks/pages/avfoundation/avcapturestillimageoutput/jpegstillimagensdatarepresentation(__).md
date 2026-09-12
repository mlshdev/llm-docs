> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/jpegstillimagensdatarepresentation(_:)](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/jpegstillimagensdatarepresentation(_:))

# jpegStillImageNSDataRepresentation(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Returns an `NSData` representation of a still image data and metadata attachments in a JPEG sample buffer.

> Use AVCapturePhotoOutput instead.

## Declaration

```swift
class func jpegStillImageNSDataRepresentation(_ jpegSampleBuffer: CMSampleBuffer) -> Data?
```

## Parameters

- `jpegSampleBuffer`: The sample buffer carrying JPEG image data, optionally with `Exif` metadata sample buffer attachments.

  This method throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `jpegSampleBuffer` is `NULL` or not in the JPEG format.

<a id="return-value"></a>

## Return Value

An `NSData` representation of `jpegSampleBuffer`.

<a id="Discussion"></a>

## Discussion

This method merges the image data and `Exif` metadata sample buffer attachments without recompressing the image.

The returned `NSData` object is suitable for writing to disk.

# jpegStillImageNSDataRepresentation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Returns an `NSData` representation of a still image data and metadata attachments in a JPEG sample buffer.

> Use AVCapturePhotoOutput instead.

## Declaration

```objectivec
+ (NSData *) jpegStillImageNSDataRepresentation:(CMSampleBufferRef) jpegSampleBuffer;
```

## Parameters

- `jpegSampleBuffer`: The sample buffer carrying JPEG image data, optionally with `Exif` metadata sample buffer attachments.

  This method throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `jpegSampleBuffer` is `NULL` or not in the JPEG format.

<a id="return-value"></a>

## Return Value

An `NSData` representation of `jpegSampleBuffer`.

<a id="Discussion"></a>

## Discussion

This method merges the image data and `Exif` metadata sample buffer attachments without recompressing the image.

The returned `NSData` object is suitable for writing to disk.

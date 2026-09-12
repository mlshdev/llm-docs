> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/outputsettings](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/outputsettings)

# outputSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

The compression settings for the output.

> Use AVCapturePhotoOutput instead.

## Declaration

```swift
var outputSettings: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

Use [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md) and [availableImageDataCodecTypes](availableimagedatacodectypes.md) to determine what codec keys and pixel formats are supported.

In iOS, the only currently supported keys are [AVVideoCodecKey](../avvideocodeckey.md) and [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md). These keys are mutually exclusive—only one may be present. The recommended values are [kCMVideoCodecType_JPEG](../../coremedia/kcmvideocodectype_jpeg.md) for [AVVideoCodecKey](../avvideocodeckey.md) and [kCVPixelFormatType_420YpCbCr8BiPlanarFullRange](../../corevideo/kcvpixelformattype_420ypcbcr8biplanarfullrange.md) and [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) for [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md).

In iOS 6.0 and later, the [AVVideoQualityKey](../avvideoqualitykey.md) is supported, and may only be used when [AVVideoCodecKey](../avvideocodeckey.md) is set to [AVVideoCodecJPEG](../avvideocodecjpeg.md).

## See Also

### Configuring image settings

- [isHighResolutionStillImageOutputEnabled](ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

# outputSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

The compression settings for the output.

> Use AVCapturePhotoOutput instead.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * outputSettings;
```

<a id="Discussion"></a>

## Discussion

Use [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md) and [availableImageDataCodecTypes](availableimagedatacodectypes.md) to determine what codec keys and pixel formats are supported.

In iOS, the only currently supported keys are [AVVideoCodecKey](../avvideocodeckey.md) and [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md). These keys are mutually exclusive—only one may be present. The recommended values are [kCMVideoCodecType_JPEG](../../coremedia/kcmvideocodectype_jpeg.md) for [AVVideoCodecKey](../avvideocodeckey.md) and [kCVPixelFormatType_420YpCbCr8BiPlanarFullRange](../../corevideo/kcvpixelformattype_420ypcbcr8biplanarfullrange.md) and [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) for [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md).

In iOS 6.0 and later, the [AVVideoQualityKey](../avvideoqualitykey.md) is supported, and may only be used when [AVVideoCodecKey](../avvideocodeckey.md) is set to [AVVideoCodecJPEG](../avvideocodecjpeg.md).

## See Also

### Configuring image settings

- [highResolutionStillImageOutputEnabled](ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

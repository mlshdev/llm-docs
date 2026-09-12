> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/ishighresolutionstillimageoutputenabled](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/ishighresolutionstillimageoutputenabled)

# isHighResolutionStillImageOutputEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15)

A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.

## Declaration

```swift
var isHighResolutionStillImageOutputEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureStillImageOutput` emits images with the same dimensions as its source [AVCaptureDevice](../avcapturedevice.md) instance’s `activeFormat.formatDescription`.  However, if you set this property to [true](https://developer.apple.com/documentation/swift/true), the receiver emits still images at the capture device’s [highResolutionStillImageDimensions](../avcapturedevice/format/highresolutionstillimagedimensions.md) value.

> **Note**

>  If you enable video stabilization by setting `preferredVideoStabilizationMode` to [true](https://developer.apple.com/documentation/swift/true) for any output, the high resolution still images emitted by `AVCaptureStillImageOutput` may be smaller by 10% or more.

## See Also

### Configuring image settings

- [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

# highResolutionStillImageOutputEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15)

A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.

## Declaration

```objectivec
@property (nonatomic, getter=isHighResolutionStillImageOutputEnabled) BOOL highResolutionStillImageOutputEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureStillImageOutput` emits images with the same dimensions as its source [AVCaptureDevice](../avcapturedevice.md) instance’s `activeFormat.formatDescription`.  However, if you set this property to [true](https://developer.apple.com/documentation/swift/true), the receiver emits still images at the capture device’s [highResolutionStillImageDimensions](../avcapturedevice/format/highresolutionstillimagedimensions.md) value.

> **Note**

>  If you enable video stabilization by setting `preferredVideoStabilizationMode` to [true](https://developer.apple.com/documentation/swift/true) for any output, the high resolution still images emitted by `AVCaptureStillImageOutput` may be smaller by 10% or more.

## See Also

### Configuring image settings

- [availableImageDataCVPixelFormatTypes](availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

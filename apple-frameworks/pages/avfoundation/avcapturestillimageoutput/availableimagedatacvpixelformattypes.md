> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/availableimagedatacvpixelformattypes](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/availableimagedatacvpixelformattypes)

# availableImageDataCVPixelFormatTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

The supported image pixel formats that can be specified as output settings.

> Use AVCapturePhotoOutput instead.

## Declaration

```swift
var availableImageDataCVPixelFormatTypes: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of `NSNumber` objects that you can use as values for the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the [outputSettings](outputsettings.md) property.

## See Also

### Configuring image settings

- [isHighResolutionStillImageOutputEnabled](ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

# availableImageDataCVPixelFormatTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

The supported image pixel formats that can be specified as output settings.

> Use AVCapturePhotoOutput instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * availableImageDataCVPixelFormatTypes;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of `NSNumber` objects that you can use as values for the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the [outputSettings](outputsettings.md) property.

## See Also

### Configuring image settings

- [highResolutionStillImageOutputEnabled](ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCodecTypes](availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtpixeltransferpropertykey_destinationpixelaspectratio](https://developer.apple.com/documentation/videotoolbox/kvtpixeltransferpropertykey_destinationpixelaspectratio)

# kVTPixelTransferPropertyKey_DestinationPixelAspectRatio (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The pixel aspect ratio for destination image buffers.

## Declaration

```swift
let kVTPixelTransferPropertyKey_DestinationPixelAspectRatio: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFDictionary](../corefoundation/cfdictionary.md) object with same keys as used in the [kCVImageBufferPixelAspectRatioKey](../corevideo/kcvimagebufferpixelaspectratiokey.md) dictionary.

This property is ignored in [kVTScalingMode_Normal](kvtscalingmode_normal.md).  This property defaults to `NULL`, meaning 1:1 (for [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md)) or no change in pixel aspect ratio (for [kVTScalingMode_Letterbox](kvtscalingmode_letterbox.md) and [kVTScalingMode_Trim](kvtscalingmode_trim.md)).

## See Also

### Configuration

- [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md): Scaling mode for images during transfer between source and destination buffers.
- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationICCProfile](kvtpixeltransferpropertykey_destinationiccprofile.md): The International Color Consortium (ICC) profile for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

# kVTPixelTransferPropertyKey_DestinationPixelAspectRatio (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The pixel aspect ratio for destination image buffers.

## Declaration

```objectivec
extern CFStringRef const kVTPixelTransferPropertyKey_DestinationPixelAspectRatio;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFDictionaryRef](../corefoundation/cfdictionary.md) object with same keys as used in the [kCVImageBufferPixelAspectRatioKey](../corevideo/kcvimagebufferpixelaspectratiokey.md) dictionary.

This property is ignored in [kVTScalingMode_Normal](kvtscalingmode_normal.md).  This property defaults to `NULL`, meaning 1:1 (for [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md)) or no change in pixel aspect ratio (for [kVTScalingMode_Letterbox](kvtscalingmode_letterbox.md) and [kVTScalingMode_Trim](kvtscalingmode_trim.md)).

## See Also

### Configuration

- [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md): Scaling mode for images during transfer between source and destination buffers.
- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationICCProfile](kvtpixeltransferpropertykey_destinationiccprofile.md): The International Color Consortium (ICC) profile for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

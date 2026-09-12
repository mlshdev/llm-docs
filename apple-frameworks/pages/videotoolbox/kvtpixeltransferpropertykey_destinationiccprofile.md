> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtpixeltransferpropertykey_destinationiccprofile](https://developer.apple.com/documentation/videotoolbox/kvtpixeltransferpropertykey_destinationiccprofile)

# kVTPixelTransferPropertyKey_DestinationICCProfile (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The International Color Consortium (ICC) profile for destination image buffers.

## Declaration

```swift
let kVTPixelTransferPropertyKey_DestinationICCProfile: CFString
```

<a id="Discussion"></a>

## Discussion

Specifying this value may lead to performance degradation, as a color matching operation may need to be performed between the source and the destination.

See [kCMFormatDescriptionExtension_ICCProfile](../coremedia/kcmformatdescriptionextension_iccprofile.md) in `CMFormatDescription.h` for possible values.

## See Also

### Configuration

- [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md): Scaling mode for images during transfer between source and destination buffers.
- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md): The pixel aspect ratio for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

# kVTPixelTransferPropertyKey_DestinationICCProfile (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The International Color Consortium (ICC) profile for destination image buffers.

## Declaration

```objectivec
extern CFStringRef const kVTPixelTransferPropertyKey_DestinationICCProfile;
```

<a id="Discussion"></a>

## Discussion

Specifying this value may lead to performance degradation, as a color matching operation may need to be performed between the source and the destination.

See [kCMFormatDescriptionExtension_ICCProfile](../coremedia/kcmformatdescriptionextension_iccprofile.md) in `CMFormatDescription.h` for possible values.

## See Also

### Configuration

- [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md): Scaling mode for images during transfer between source and destination buffers.
- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md): The pixel aspect ratio for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

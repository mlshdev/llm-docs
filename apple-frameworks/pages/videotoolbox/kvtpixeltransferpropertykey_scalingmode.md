> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtpixeltransferpropertykey_scalingmode](https://developer.apple.com/documentation/videotoolbox/kvtpixeltransferpropertykey_scalingmode)

# kVTPixelTransferPropertyKey_ScalingMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Scaling mode for images during transfer between source and destination buffers.

## Declaration

```swift
let kVTPixelTransferPropertyKey_ScalingMode: CFString
```

<a id="Discussion"></a>

## Discussion

Depending on the scaling mode, scaling may take into account:

- The full image buffer width and height of the source and destination
- The clean aperture attachment ([kCVImageBufferCleanApertureKey](../corevideo/kcvimagebuffercleanaperturekey.md)) on the source image buffer
- The pixel aspect ratio attachment ([kCVImageBufferPixelAspectRatioKey](../corevideo/kcvimagebufferpixelaspectratiokey.md)) on the source image buffer
- The destination clean aperture ([kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md))
- The destination pixel aspect ratio ([kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md))

The destination image buffer’s clean aperture and pixel aspect ratio attachments are not taken into account, and are overwritten.

## See Also

### Configuration

- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md): The pixel aspect ratio for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationICCProfile](kvtpixeltransferpropertykey_destinationiccprofile.md): The International Color Consortium (ICC) profile for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

# kVTPixelTransferPropertyKey_ScalingMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Scaling mode for images during transfer between source and destination buffers.

## Declaration

```objectivec
extern CFStringRef const kVTPixelTransferPropertyKey_ScalingMode;
```

<a id="Discussion"></a>

## Discussion

Depending on the scaling mode, scaling may take into account:

- The full image buffer width and height of the source and destination
- The clean aperture attachment ([kCVImageBufferCleanApertureKey](../corevideo/kcvimagebuffercleanaperturekey.md)) on the source image buffer
- The pixel aspect ratio attachment ([kCVImageBufferPixelAspectRatioKey](../corevideo/kcvimagebufferpixelaspectratiokey.md)) on the source image buffer
- The destination clean aperture ([kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md))
- The destination pixel aspect ratio ([kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md))

The destination image buffer’s clean aperture and pixel aspect ratio attachments are not taken into account, and are overwritten.

## See Also

### Configuration

- [Scaling Mode Constants](scaling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md): The pixel aspect ratio for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationICCProfile](kvtpixeltransferpropertykey_destinationiccprofile.md): The International Color Consortium (ICC) profile for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

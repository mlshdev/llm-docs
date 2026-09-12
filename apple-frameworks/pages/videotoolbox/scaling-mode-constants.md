> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/scaling-mode-constants](https://developer.apple.com/documentation/videotoolbox/scaling-mode-constants)

# Scaling Mode Constants

**Interface languages:** Swift, Objective-C

**Framework:** Video Toolbox  
**Kind:** API Collection

Supported constant values for the [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md) key.

## Topics

### Scaling Modes

- [kVTScalingMode_Normal](kvtscalingmode_normal.md): The full width and height of the source image buffer is stretched to the full width and height of the destination image buffer.
- [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md): The source image buffer’s clean aperture is scaled to the destination clean aperture.
- [kVTScalingMode_Letterbox](kvtscalingmode_letterbox.md): The source image buffer’s clean aperture is scaled to a rectangle fitted inside the destination clean aperture that preserves the source picture aspect ratio.
- [kVTScalingMode_Trim](kvtscalingmode_trim.md): The source image buffer’s clean aperture is scaled to a rectangle that completely fills the destination clean aperture and preserves the source picture aspect ratio.

## See Also

### Configuration

- [kVTPixelTransferPropertyKey_ScalingMode](kvtpixeltransferpropertykey_scalingmode.md): Scaling mode for images during transfer between source and destination buffers.
- [kVTPixelTransferPropertyKey_DestinationCleanAperture](kvtpixeltransferpropertykey_destinationcleanaperture.md): The clean aperture for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationPixelAspectRatio](kvtpixeltransferpropertykey_destinationpixelaspectratio.md): The pixel aspect ratio for destination image buffers.
- [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md): The specific chroma downsampling technique to be used.
- [Downsampling Mode Constants](downsampling-mode-constants.md): Supported constant values for the [kVTPixelTransferPropertyKey_DownsamplingMode](kvtpixeltransferpropertykey_downsamplingmode.md) key.
- [kVTPixelTransferPropertyKey_DestinationColorPrimaries](kvtpixeltransferpropertykey_destinationcolorprimaries.md): The color primaries to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationTransferFunction](kvtpixeltransferpropertykey_destinationtransferfunction.md): The color transfer function to be used for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationICCProfile](kvtpixeltransferpropertykey_destinationiccprofile.md): The International Color Consortium (ICC) profile for destination image buffers.
- [kVTPixelTransferPropertyKey_DestinationYCbCrMatrix](kvtpixeltransferpropertykey_destinationycbcrmatrix.md): The color matrix to be used for YCbCr to RGB conversions involving the destination image buffers.
- [kVTPixelTransferPropertyKey_RealTime](kvtpixeltransferpropertykey_realtime.md)

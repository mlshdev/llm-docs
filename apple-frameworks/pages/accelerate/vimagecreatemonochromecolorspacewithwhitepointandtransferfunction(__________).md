> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecreatemonochromecolorspacewithwhitepointandtransferfunction(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecreatemonochromecolorspacewithwhitepointandtransferfunction(_:_:_:_:_:))

# vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a monochrome color space based on primitives from Y’CbCr specifications.

## Declaration

```swift
func vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(_ whitePoint: UnsafePointer<vImageWhitePoint>, _ tf: UnsafePointer<vImageTransferFunction>, _ intent: CGColorRenderingIntent, _ flags: vImage_Flags, _ error: UnsafeMutablePointer<vImage_Error>!) -> Unmanaged<CGColorSpace>!
```

## Parameters

- `whitePoint`: Values that define the white point.
- `tf`: The transfer function.
- `intent`: A rendering intent constant that specifies how to handle colors that aren’t within the gamut of the destination color space.
- `flags`: The options to use when performing the operation. This function supports only [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md), which prints diagnostic information to the console in the event of a failure.
- `error`: A pointer to a [vImage_Error](vimage_error.md). The function overwrites the pointer to indicate the success or failure of the operation.

<a id="return-value"></a>

## Return Value

A [CGColorSpace](../coregraphics/cgcolorspace.md) with a reference count of one.

<a id="Discussion"></a>

## Discussion

Use this function to create a [CGColorSpace](../coregraphics/cgcolorspace.md) instance to correspond with a specified white point and a transfer function. The [CGColorSpace](../coregraphics/cgcolorspace.md) instance defines a monochrome color space. (A Y’CbCr color space is an RGB color space and a conversion matrix from RGB to Y’CbCr.) The white point provides the extent of a color space in XYZ space, and the transfer function provides the transformation from linear color to nonlinear color that the pixels reside in.

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

# vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a monochrome color space based on primitives from Y’CbCr specifications.

## Declaration

```objectivec
CGColorSpaceRefvImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(const vImageWhitePoint *whitePoint, const vImageTransferFunction *tf, CGColorRenderingIntent intent, vImage_Flags flags, vImage_Error *error);
```

## Parameters

- `whitePoint`: Values that define the white point.
- `tf`: The transfer function.
- `intent`: A rendering intent constant that specifies how to handle colors that aren’t within the gamut of the destination color space.
- `flags`: The options to use when performing the operation. This function supports only [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md), which prints diagnostic information to the console in the event of a failure.
- `error`: A pointer to a [vImage_Error](vimage_error.md). The function overwrites the pointer to indicate the success or failure of the operation.

<a id="return-value"></a>

## Return Value

A [CGColorSpaceRef](../coregraphics/cgcolorspace.md) with a reference count of one.

<a id="Discussion"></a>

## Discussion

Use this function to create a [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance to correspond with a specified white point and a transfer function. The [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance defines a monochrome color space. (A Y’CbCr color space is an RGB color space and a conversion matrix from RGB to Y’CbCr.) The white point provides the extent of a color space in XYZ space, and the transfer function provides the transformation from linear color to nonlinear color that the pixels reside in.

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

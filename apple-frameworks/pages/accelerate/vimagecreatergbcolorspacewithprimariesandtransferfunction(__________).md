> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecreatergbcolorspacewithprimariesandtransferfunction(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecreatergbcolorspacewithprimariesandtransferfunction(_:_:_:_:_:))

# vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an RGB color space based on primitives from Y’CbCr specifications.

## Declaration

```swift
func vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(_ primaries: UnsafePointer<vImageRGBPrimaries>, _ tf: UnsafePointer<vImageTransferFunction>, _ intent: CGColorRenderingIntent, _ flags: vImage_Flags, _ error: UnsafeMutablePointer<vImage_Error>!) -> Unmanaged<CGColorSpace>!
```

## Parameters

- `primaries`: A set of x, y tristimulus values that define the color primaries for the RGB color space.
- `tf`: The transfer function to convert from linear RGB (using the above primaries) to nonlinear RGB.
- `intent`: A rendering intent constant that specifies how to handle colors that aren’t within the gamut of the destination color space.
- `flags`: The options to use when performing the operation. This function supports only [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md), which prints diagnostic information to the console in the event of a failure.
- `error`: A pointer to a [vImage_Error](vimage_error.md). The function overwrites the pointer to indicate the success or failure of the operation.

<a id="return-value"></a>

## Return Value

A [CGColorSpace](../coregraphics/cgcolorspace.md) with a reference count of one.

<a id="Discussion"></a>

## Discussion

Use this function to create a [CGColorSpace](../coregraphics/cgcolorspace.md) instance to correspond with a specified set of color primaries and a transfer function. The [CGColorSpace](../coregraphics/cgcolorspace.md) instance defines an RGB color space. (A Y’CbCr color space is an RGB color space and a conversion matrix from RGB to Y’CbCr). The color primaries provide the white point in XYZ space, and the transfer function provides the transformation from linear color to nonlinear color that the pixels reside in.

For example, the following code defines the RGB color space for ITU-R BT.709-5:

```swift
var rgbPrimaries = vImageRGBPrimaries(
    red_x: 0.64,
    green_x: 0.3,
    blue_x: 0.15,
    white_x: 0.3127,
    
    red_y: 0.33,
    green_y: 0.6,
    blue_y: 0.06,
    white_y: 0.329)
        
var transferFunction = vImageTransferFunction(
    c0: 1.099,
    c1: 1.0,
    c2: 0.0,
    c3: -0.099,
    gamma: 0.45,
    cutoff: 0.018,
    c4: 4.5,
    c5: 0)
        
let colorSpace = vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(
    &rgbPrimaries,
    &transferFunction,
    .defaultIntent,
    vImage_Flags(kvImageNoFlags),
    nil)
```

## See Also

### Creating Core Graphics color spaces

- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

# vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an RGB color space based on primitives from Y’CbCr specifications.

## Declaration

```objectivec
CGColorSpaceRefvImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(const vImageRGBPrimaries *primaries, const vImageTransferFunction *tf, CGColorRenderingIntent intent, vImage_Flags flags, vImage_Error *error);
```

## Parameters

- `primaries`: A set of x, y tristimulus values that define the color primaries for the RGB color space.
- `tf`: The transfer function to convert from linear RGB (using the above primaries) to nonlinear RGB.
- `intent`: A rendering intent constant that specifies how to handle colors that aren’t within the gamut of the destination color space.
- `flags`: The options to use when performing the operation. This function supports only [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md), which prints diagnostic information to the console in the event of a failure.
- `error`: A pointer to a [vImage_Error](vimage_error.md). The function overwrites the pointer to indicate the success or failure of the operation.

<a id="return-value"></a>

## Return Value

A [CGColorSpaceRef](../coregraphics/cgcolorspace.md) with a reference count of one.

<a id="Discussion"></a>

## Discussion

Use this function to create a [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance to correspond with a specified set of color primaries and a transfer function. The [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance defines an RGB color space. (A Y’CbCr color space is an RGB color space and a conversion matrix from RGB to Y’CbCr). The color primaries provide the white point in XYZ space, and the transfer function provides the transformation from linear color to nonlinear color that the pixels reside in.

For example, the following code defines the RGB color space for ITU-R BT.709-5:

```swift
var rgbPrimaries = vImageRGBPrimaries(
    red_x: 0.64,
    green_x: 0.3,
    blue_x: 0.15,
    white_x: 0.3127,
    
    red_y: 0.33,
    green_y: 0.6,
    blue_y: 0.06,
    white_y: 0.329)
        
var transferFunction = vImageTransferFunction(
    c0: 1.099,
    c1: 1.0,
    c2: 0.0,
    c3: -0.099,
    gamma: 0.45,
    cutoff: 0.018,
    c4: 4.5,
    c5: 0)
        
let colorSpace = vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(
    &rgbPrimaries,
    &transferFunction,
    .defaultIntent,
    vImage_Flags(kvImageNoFlags),
    nil)
```

## See Also

### Creating Core Graphics color spaces

- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

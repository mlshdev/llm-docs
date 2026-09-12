> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagergbprimaries](https://developer.apple.com/documentation/accelerate/vimagergbprimaries)

# vImageRGBPrimaries (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of the chromaticity of primaries that define a color space.

## Declaration

```swift
struct vImageRGBPrimaries
```

<a id="overview"></a>

## Overview

The `x` and `y` values define the chromaticity of each color primary RGB and the white point according to the CIE 1931 color space. For example, the following code defines the RGB primaries for ITU-R BT.709-5:

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
```

## Topics

### Initializers

- [init(red_x:green_x:blue_x:white_x:red_y:green_y:blue_y:white_y:)](vimagergbprimaries/init%28red_x_green_x_blue_x_white_x_red_y_green_y_blue_y_white_y_%29.md): Creates a structure that represents the specified chromaticity of primaries defining a color space.
- [init()](vimagergbprimaries/init%28%29.md): Creates an empty RGB primaries structure.

### Color primary properties

- [red_x](vimagergbprimaries/red_x.md): The red `x` value according to the CIE 1931 color space.
- [green_x](vimagergbprimaries/green_x.md): The green `x` value according to the CIE 1931 color space.
- [blue_x](vimagergbprimaries/blue_x.md): The blue `x` value according to the CIE 1931 color space.
- [white_x](vimagergbprimaries/white_x.md): The white point `x` value according to the CIE 1931 color space.
- [red_y](vimagergbprimaries/red_y.md): The red `y` value according to the CIE 1931 color space.
- [green_y](vimagergbprimaries/green_y.md): The green\_ \_`y` value according to the CIE 1931 color space.
- [blue_y](vimagergbprimaries/blue_y.md): The blue `y` value according to the CIE 1931 color space.
- [white_y](vimagergbprimaries/white_y.md): The white point `y` value according to the CIE 1931 color space.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

# vImageRGBPrimaries (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of the chromaticity of primaries that define a color space.

## Declaration

```objectivec
typedef struct vImageRGBPrimaries { ... } vImageRGBPrimaries;
```

<a id="overview"></a>

## Overview

The `x` and `y` values define the chromaticity of each color primary RGB and the white point according to the CIE 1931 color space. For example, the following code defines the RGB primaries for ITU-R BT.709-5:

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
```

## Topics

### Color primary properties

- [red_x](vimagergbprimaries/red_x.md): The red `x` value according to the CIE 1931 color space.
- [green_x](vimagergbprimaries/green_x.md): The green `x` value according to the CIE 1931 color space.
- [blue_x](vimagergbprimaries/blue_x.md): The blue `x` value according to the CIE 1931 color space.
- [white_x](vimagergbprimaries/white_x.md): The white point `x` value according to the CIE 1931 color space.
- [red_y](vimagergbprimaries/red_y.md): The red `y` value according to the CIE 1931 color space.
- [green_y](vimagergbprimaries/green_y.md): The green\_ \_`y` value according to the CIE 1931 color space.
- [blue_y](vimagergbprimaries/blue_y.md): The blue `y` value according to the CIE 1931 color space.
- [white_y](vimagergbprimaries/white_y.md): The white point `y` value according to the CIE 1931 color space.

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

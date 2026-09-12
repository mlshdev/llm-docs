> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagetransferfunction](https://developer.apple.com/documentation/accelerate/vimagetransferfunction)

# vImageTransferFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A transfer function to convert from linear to nonlinear RGB.

## Declaration

```swift
struct vImageTransferFunction
```

<a id="overview"></a>

## Overview

The transfer function here is in the style of ITU-R BT.709, and is the inverse operation of what appears in an ICC color profile. For example, the following code defines the transfer function for ITU-R BT.709-5:

```swift
var transferFunction = vImageTransferFunction(
    c0: 1.099,
    c1: 1.0,
    c2: 0.0,
    c3: -0.099,
    gamma: 0.45,
    cutoff: 0.018,
    c4: 4.5,
    c5: 0)
```

The following is the conversion:

```c
if (R >= cutoff) {
    R' = c0 * pow( c1 * R + c2, gamma ) + c3
} 
else {
    R' = c4 * R + c5                             
}
```

## Topics

### Initializers

- [init(c0:c1:c2:c3:gamma:cutoff:c4:c5:)](vimagetransferfunction/init%28c0_c1_c2_c3_gamma_cutoff_c4_c5_%29.md): Creates a structure that represents a transfer function to convert from linear to nonlinear RGB.
- [init()](vimagetransferfunction/init%28%29.md): Creates an empty transfer function structure.

### Transfer function properties

- [c0](vimagetransferfunction/c0.md): The `c0` in the transfer function.
- [c1](vimagetransferfunction/c1.md): The `c1` in the transfer function.
- [c2](vimagetransferfunction/c2.md): The `c2` in the transfer function.
- [c3](vimagetransferfunction/c3.md): The `c3` in the transfer function.
- [cutoff](vimagetransferfunction/cutoff.md): The `cutoff` in the transfer function.
- [gamma](vimagetransferfunction/gamma.md): The `gamma` in the transfer function.
- [c4](vimagetransferfunction/c4.md): The `c4` in the transfer function.
- [c5](vimagetransferfunction/c5.md): The `c5` in the transfer function.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

# vImageTransferFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A transfer function to convert from linear to nonlinear RGB.

## Declaration

```objectivec
typedef struct vImageTransferFunction { ... } vImageTransferFunction;
```

<a id="overview"></a>

## Overview

The transfer function here is in the style of ITU-R BT.709, and is the inverse operation of what appears in an ICC color profile. For example, the following code defines the transfer function for ITU-R BT.709-5:

```swift
var transferFunction = vImageTransferFunction(
    c0: 1.099,
    c1: 1.0,
    c2: 0.0,
    c3: -0.099,
    gamma: 0.45,
    cutoff: 0.018,
    c4: 4.5,
    c5: 0)
```

The following is the conversion:

```c
if (R >= cutoff) {
    R' = c0 * pow( c1 * R + c2, gamma ) + c3
} 
else {
    R' = c4 * R + c5                             
}
```

## Topics

### Transfer function properties

- [c0](vimagetransferfunction/c0.md): The `c0` in the transfer function.
- [c1](vimagetransferfunction/c1.md): The `c1` in the transfer function.
- [c2](vimagetransferfunction/c2.md): The `c2` in the transfer function.
- [c3](vimagetransferfunction/c3.md): The `c3` in the transfer function.
- [cutoff](vimagetransferfunction/cutoff.md): The `cutoff` in the transfer function.
- [gamma](vimagetransferfunction/gamma.md): The `gamma` in the transfer function.
- [c4](vimagetransferfunction/c4.md): The `c4` in the transfer function.
- [c5](vimagetransferfunction/c5.md): The `c5` in the transfer function.

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.
- [vImageWhitePoint](vimagewhitepoint.md): A representation of a white point according to the CIE 1931 color space.

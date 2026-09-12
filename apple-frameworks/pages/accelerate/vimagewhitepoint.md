> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagewhitepoint](https://developer.apple.com/documentation/accelerate/vimagewhitepoint)

# vImageWhitePoint (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of a white point according to the CIE 1931 color space.

## Declaration

```swift
struct vImageWhitePoint
```

## Topics

### Initializers

- [init(white_x:white_y:)](vimagewhitepoint/init%28white_x_white_y_%29.md): Creates a structure that represents a white point according to the CIE 1931 color space.
- [init()](vimagewhitepoint/init%28%29.md): Creates an empty structure that represents a white point.

### White point properties

- [white_x](vimagewhitepoint/white_x.md): The white point `x` value according to the CIE 1931 color space.
- [white_y](vimagewhitepoint/white_y.md): The white point `y` value according to the CIE 1931 color space.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.

# vImageWhitePoint (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A representation of a white point according to the CIE 1931 color space.

## Declaration

```objectivec
typedef struct vImageWhitePoint { ... } vImageWhitePoint;
```

## Topics

### White point properties

- [white_x](vimagewhitepoint/white_x.md): The white point `x` value according to the CIE 1931 color space.
- [white_y](vimagewhitepoint/white_y.md): The white point `y` value according to the CIE 1931 color space.

## See Also

### Creating Core Graphics color spaces

- [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md): Creates an RGB color space based on primitives from Y’CbCr specifications.
- [vImageRGBPrimaries](vimagergbprimaries.md): A representation of the chromaticity of primaries that define a color space.
- [vImageTransferFunction](vimagetransferfunction.md): A transfer function to convert from linear to nonlinear RGB.
- [vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction](vimagecreatemonochromecolorspacewithwhitepointandtransferfunction%28__________%29.md): Creates a monochrome color space based on primitives from Y’CbCr specifications.

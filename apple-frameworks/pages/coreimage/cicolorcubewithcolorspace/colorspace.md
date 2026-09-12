> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcubewithcolorspace/colorspace](https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace/colorspace)

# colorSpace (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The working color space.

## Declaration

```swift
var colorSpace: CGColorSpace? { get set }
```

## See Also

### Instance Properties

- [cubeData](cubedata.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](inputimage.md): The image to use as an input image.
- [extrapolate](extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

# colorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The working color space.

## Declaration

```objectivec
@property (nonatomic, nullable) CGColorSpaceRef colorSpace;
```

## See Also

### Instance Properties

- [cubeData](cubedata.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](inputimage.md): The image to use as an input image.
- [extrapolate](extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

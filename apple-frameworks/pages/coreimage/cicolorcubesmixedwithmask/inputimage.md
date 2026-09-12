> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcubesmixedwithmask/inputimage](https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/inputimage)

# inputImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image to use as an input image.

## Declaration

```swift
var inputImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [cube0Data](cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [maskImage](maskimage.md): A masking image.
- [extrapolate](extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

# inputImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image to use as an input image.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * inputImage;
```

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [cube0Data](cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [maskImage](maskimage.md): A masking image.
- [extrapolate](extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

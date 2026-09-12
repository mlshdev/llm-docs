> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcubesmixedwithmask/extrapolate](https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/extrapolate)

# extrapolate (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

## Declaration

```swift
var extrapolate: Bool { get set }
```

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [cube0Data](cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](inputimage.md): The image to use as an input image.
- [maskImage](maskimage.md): A masking image.

# extrapolate (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

## Declaration

```objectivec
@property (nonatomic) bool extrapolate;
```

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [cube0Data](cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](inputimage.md): The image to use as an input image.
- [maskImage](maskimage.md): A masking image.

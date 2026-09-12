> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcubesmixedwithmask](https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask)

# CIColorCubesMixedWithMask (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color cube mixed with mask filter.

## Declaration

```swift
protocol CIColorCubesMixedWithMask : CIFilterProtocol
```

## Topics

### Instance Properties

- [colorSpace](cicolorcubesmixedwithmask/colorspace.md): The working color space.
- [cube0Data](cicolorcubesmixedwithmask/cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cicolorcubesmixedwithmask/cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cicolorcubesmixedwithmask/cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](cicolorcubesmixedwithmask/inputimage.md): The image to use as an input image.
- [maskImage](cicolorcubesmixedwithmask/maskimage.md): A masking image.
- [extrapolate](cicolorcubesmixedwithmask/extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorCubesMixedWithMask()](cifilter-swift.class/colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCurves](cicolorcurves.md): The properties you use to configure a color curves filter.
- [CIColorInvert](cicolorinvert.md): The properties you use to configure a color invert filter.
- [CIColorMap](cicolormap.md): The properties you use to configure a color map filter.
- [CIColorMonochrome](cicolormonochrome.md): The properties you use to configure a color monochrome filter.
- [CIConvertLab](ciconvertlab.md)
- [CIDither](cidither.md): The properties you use to configure a dither filter.
- [CIColorPosterize](cicolorposterize.md): The properties you use to configure a color posterize filter.
- [CIDocumentEnhancer](cidocumentenhancer.md): The properties you use to configure a document enhancer filter.
- [CIFalseColor](cifalsecolor.md): The properties you use to configure a false color filter.
- [CILabDeltaE](cilabdeltae.md): The properties you use to configure a Lab Delta E filter.
- [CIMaskToAlpha](cimasktoalpha.md): The properties you use to configure a mask-to-alpha filter.
- [CIMaximumComponent](cimaximumcomponent.md): The properties you use to configure a maximum component filter.

# CIColorCubesMixedWithMask (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color cube mixed with mask filter.

## Declaration

```objectivec
@protocol CIColorCubesMixedWithMask <CIFilter>
```

## Topics

### Instance Properties

- [colorSpace](cicolorcubesmixedwithmask/colorspace.md): The working color space.
- [cube0Data](cicolorcubesmixedwithmask/cube0data.md): The cube texture data to use as a color lookup table.
- [cube1Data](cicolorcubesmixedwithmask/cube1data.md): The cube texture data to use as a color lookup table.
- [cubeDimension](cicolorcubesmixedwithmask/cubedimension.md): The length, in texels, of each side of the cube texture.
- [inputImage](cicolorcubesmixedwithmask/inputimage.md): The image to use as an input image.
- [maskImage](cicolorcubesmixedwithmask/maskimage.md): A masking image.
- [extrapolate](cicolorcubesmixedwithmask/extrapolate.md): If true, then the filter extrapolates the color cube for any RGB component values outside the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorCubesMixedWithMaskFilter](cifilter-swift.class/colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCurves](cicolorcurves.md): The properties you use to configure a color curves filter.
- [CIColorInvert](cicolorinvert.md): The properties you use to configure a color invert filter.
- [CIColorMap](cicolormap.md): The properties you use to configure a color map filter.
- [CIColorMonochrome](cicolormonochrome.md): The properties you use to configure a color monochrome filter.
- [CIConvertLab](ciconvertlab.md)
- [CIDither](cidither.md): The properties you use to configure a dither filter.
- [CIColorPosterize](cicolorposterize.md): The properties you use to configure a color posterize filter.
- [CIDocumentEnhancer](cidocumentenhancer.md): The properties you use to configure a document enhancer filter.
- [CIFalseColor](cifalsecolor.md): The properties you use to configure a false color filter.
- [CILabDeltaE](cilabdeltae.md): The properties you use to configure a Lab Delta E filter.
- [CIMaskToAlpha](cimasktoalpha.md): The properties you use to configure a mask-to-alpha filter.
- [CIMaximumComponent](cimaximumcomponent.md): The properties you use to configure a maximum component filter.

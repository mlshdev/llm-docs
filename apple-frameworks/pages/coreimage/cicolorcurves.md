> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcurves](https://developer.apple.com/documentation/coreimage/cicolorcurves)

# CIColorCurves (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color curves filter.

## Declaration

```swift
protocol CIColorCurves : CIFilterProtocol
```

## Topics

### Instance Properties

- [colorSpace](cicolorcurves/colorspace.md): The working color space.
- [curvesData](cicolorcurves/curvesdata.md): Color values that determine the color curves transform.
- [curvesDomain](cicolorcurves/curvesdomain.md): A two-element vector that defines the minimum and maximum values of the curve data.
- [inputImage](cicolorcurves/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorCurves()](cifilter-swift.class/colorcurves%28%29.md): Adjusts an image’s color curves.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCubesMixedWithMask](cicolorcubesmixedwithmask.md): The properties you use to configure a color cube mixed with mask filter.
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

# CIColorCurves (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a color curves filter.

## Declaration

```objectivec
@protocol CIColorCurves <CIFilter>
```

## Topics

### Instance Properties

- [colorSpace](cicolorcurves/colorspace.md): The working color space.
- [curvesData](cicolorcurves/curvesdata.md): Color values that determine the color curves transform.
- [curvesDomain](cicolorcurves/curvesdomain.md): A two-element vector that defines the minimum and maximum values of the curve data.
- [inputImage](cicolorcurves/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [colorCurvesFilter](cifilter-swift.class/colorcurves%28%29.md): Adjusts an image’s color curves.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCubesMixedWithMask](cicolorcubesmixedwithmask.md): The properties you use to configure a color cube mixed with mask filter.
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

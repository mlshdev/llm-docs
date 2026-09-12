> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civignette](https://developer.apple.com/documentation/coreimage/civignette)

# CIVignette (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a vignette filter.

## Declaration

```swift
protocol CIVignette : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](civignette/inputimage.md): The image to use as an input image.
- [intensity](civignette/intensity.md): The intensity of the effect.
- [radius](civignette/radius.md): The distance from the center of the effect.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [vignette()](cifilter-swift.class/vignette%28%29.md): Gradually darkens an image’s edges.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCubesMixedWithMask](cicolorcubesmixedwithmask.md): The properties you use to configure a color cube mixed with mask filter.
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

# CIVignette (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a vignette filter.

## Declaration

```objectivec
@protocol CIVignette <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](civignette/inputimage.md): The image to use as an input image.
- [intensity](civignette/intensity.md): The intensity of the effect.
- [radius](civignette/radius.md): The distance from the center of the effect.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [vignetteFilter](cifilter-swift.class/vignette%28%29.md): Gradually darkens an image’s edges.

### Protocols

- [CIColorCrossPolynomial](cicolorcrosspolynomial.md): The properties you use to configure a color cross-polynomial filter.
- [CIColorCube](cicolorcube.md): The properties you use to configure a color cube filter.
- [CIColorCubeWithColorSpace](cicolorcubewithcolorspace.md): The properties you use to configure a color cube with color space filter.
- [CIColorCubesMixedWithMask](cicolorcubesmixedwithmask.md): The properties you use to configure a color cube mixed with mask filter.
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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipalettecentroid](https://developer.apple.com/documentation/coreimage/cipalettecentroid)

# CIPaletteCentroid (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a palette centroid filter.

## Declaration

```swift
protocol CIPaletteCentroid : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cipalettecentroid/inputimage.md): The image to use as an input image.
- [paletteImage](cipalettecentroid/paletteimage.md): The input color palette, obtained by using a k-means clustering filter.
- [perceptual](cipalettecentroid/perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [paletteCentroid()](cifilter-swift.class/palettecentroid%28%29.md): Calculates the location of an image’s colors.

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

# CIPaletteCentroid (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a palette centroid filter.

## Declaration

```objectivec
@protocol CIPaletteCentroid <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cipalettecentroid/inputimage.md): The image to use as an input image.
- [paletteImage](cipalettecentroid/paletteimage.md): The input color palette, obtained by using a k-means clustering filter.
- [perceptual](cipalettecentroid/perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [paletteCentroidFilter](cifilter-swift.class/palettecentroid%28%29.md): Calculates the location of an image’s colors.

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

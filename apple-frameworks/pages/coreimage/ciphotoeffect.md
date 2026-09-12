> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciphotoeffect](https://developer.apple.com/documentation/coreimage/ciphotoeffect)

# CIPhotoEffect (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a photo-effect filter.

## Declaration

```swift
protocol CIPhotoEffect : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](ciphotoeffect/inputimage.md): The image to use as an input image.
- [extrapolate](ciphotoeffect/extrapolate.md): Extrapolate for RGB values outside of the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [photoEffectChrome()](cifilter-swift.class/photoeffectchrome%28%29.md): Exaggerates an image’s colors.
- [photoEffectFade()](cifilter-swift.class/photoeffectfade%28%29.md): Diminishes an image’s colors.
- [photoEffectInstant()](cifilter-swift.class/photoeffectinstant%28%29.md): Desaturates an image’s colors.
- [photoEffectMono()](cifilter-swift.class/photoeffectmono%28%29.md): Adjust an image’s colors to black and white.
- [photoEffectNoir()](cifilter-swift.class/photoeffectnoir%28%29.md): Adjusts an image’s colors to black and white and intensifies the contrast.
- [photoEffectProcess()](cifilter-swift.class/photoeffectprocess%28%29.md): Lowers the contrast of the input image.
- [photoEffectTonal()](cifilter-swift.class/photoeffecttonal%28%29.md): Adjusts an image’s colors to black and white.
- [photoEffectTransfer()](cifilter-swift.class/photoeffecttransfer%28%29.md): Brightens an image’s colors.

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

# CIPhotoEffect (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a photo-effect filter.

## Declaration

```objectivec
@protocol CIPhotoEffect <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](ciphotoeffect/inputimage.md): The image to use as an input image.
- [extrapolate](ciphotoeffect/extrapolate.md): Extrapolate for RGB values outside of the range 0.0 to 1.0.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [photoEffectChromeFilter](cifilter-swift.class/photoeffectchrome%28%29.md): Exaggerates an image’s colors.
- [photoEffectFadeFilter](cifilter-swift.class/photoeffectfade%28%29.md): Diminishes an image’s colors.
- [photoEffectInstantFilter](cifilter-swift.class/photoeffectinstant%28%29.md): Desaturates an image’s colors.
- [photoEffectMonoFilter](cifilter-swift.class/photoeffectmono%28%29.md): Adjust an image’s colors to black and white.
- [photoEffectNoirFilter](cifilter-swift.class/photoeffectnoir%28%29.md): Adjusts an image’s colors to black and white and intensifies the contrast.
- [photoEffectProcessFilter](cifilter-swift.class/photoeffectprocess%28%29.md): Lowers the contrast of the input image.
- [photoEffectTonalFilter](cifilter-swift.class/photoeffecttonal%28%29.md): Adjusts an image’s colors to black and white.
- [photoEffectTransferFilter](cifilter-swift.class/photoeffecttransfer%28%29.md): Brightens an image’s colors.

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

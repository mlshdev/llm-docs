> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cinoisereduction](https://developer.apple.com/documentation/coreimage/cinoisereduction)

# CINoiseReduction (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a noise reduction filter.

## Declaration

```swift
protocol CINoiseReduction : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cinoisereduction/inputimage.md): The image to use as an input image.
- [noiseLevel](cinoisereduction/noiselevel.md): The amount of noise reduction.
- [sharpness](cinoisereduction/sharpness.md): The sharpness of the final image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [noiseReduction()](cifilter-swift.class/noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.

### Protocols

- [CIBokehBlur](cibokehblur.md): The properties you use to configure a bokeh blur filter.
- [CIBoxBlur](ciboxblur.md): The properties you use to configure a box blur filter.
- [CIDiscBlur](cidiscblur.md): The properties you use to configure a disc blur filter.
- [CIGaussianBlur](cigaussianblur.md): The properties you use to configure a Gaussian blur filter.
- [CIMaskedVariableBlur](cimaskedvariableblur.md): The properties you use to configure a masked variable blur filter.
- [CIMedian](cimedian.md): The properties you use to configure a median filter.
- [CIMorphologyGradient](cimorphologygradient.md): The properties you use to configure a morphology gradient filter.
- [CIMorphologyMaximum](cimorphologymaximum.md): The properties you use to configure a morphology maximum filter.
- [CIMorphologyMinimum](cimorphologyminimum.md): The properties you use to configure a morphology minimum filter.
- [CIMorphologyRectangleMaximum](cimorphologyrectanglemaximum.md): The properties you use to configure a morphology rectangle maximum filter.
- [CIMorphologyRectangleMinimum](cimorphologyrectangleminimum.md): The properties you use to configure a morphology rectangle minimum filter.
- [CIMotionBlur](cimotionblur.md): The properties you use to configure a motion blur filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

# CINoiseReduction (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a noise reduction filter.

## Declaration

```objectivec
@protocol CINoiseReduction <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cinoisereduction/inputimage.md): The image to use as an input image.
- [noiseLevel](cinoisereduction/noiselevel.md): The amount of noise reduction.
- [sharpness](cinoisereduction/sharpness.md): The sharpness of the final image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [noiseReductionFilter](cifilter-swift.class/noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.

### Protocols

- [CIBokehBlur](cibokehblur.md): The properties you use to configure a bokeh blur filter.
- [CIBoxBlur](ciboxblur.md): The properties you use to configure a box blur filter.
- [CIDiscBlur](cidiscblur.md): The properties you use to configure a disc blur filter.
- [CIGaussianBlur](cigaussianblur.md): The properties you use to configure a Gaussian blur filter.
- [CIMaskedVariableBlur](cimaskedvariableblur.md): The properties you use to configure a masked variable blur filter.
- [CIMedian](cimedian.md): The properties you use to configure a median filter.
- [CIMorphologyGradient](cimorphologygradient.md): The properties you use to configure a morphology gradient filter.
- [CIMorphologyMaximum](cimorphologymaximum.md): The properties you use to configure a morphology maximum filter.
- [CIMorphologyMinimum](cimorphologyminimum.md): The properties you use to configure a morphology minimum filter.
- [CIMorphologyRectangleMaximum](cimorphologyrectanglemaximum.md): The properties you use to configure a morphology rectangle maximum filter.
- [CIMorphologyRectangleMinimum](cimorphologyrectangleminimum.md): The properties you use to configure a morphology rectangle minimum filter.
- [CIMotionBlur](cimotionblur.md): The properties you use to configure a motion blur filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

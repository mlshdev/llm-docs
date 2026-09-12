> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cimaskedvariableblur](https://developer.apple.com/documentation/coreimage/cimaskedvariableblur)

# CIMaskedVariableBlur (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a masked variable blur filter.

## Declaration

```swift
protocol CIMaskedVariableBlur : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cimaskedvariableblur/inputimage.md): The image to use as an input image.
- [mask](cimaskedvariableblur/mask.md): A grayscale mask that defines the blur amount.
- [radius](cimaskedvariableblur/radius.md): The distance from the center of the effect.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [maskedVariableBlur()](cifilter-swift.class/maskedvariableblur%28%29.md): Blurs a specified portion of an image.

### Protocols

- [CIBokehBlur](cibokehblur.md): The properties you use to configure a bokeh blur filter.
- [CIBoxBlur](ciboxblur.md): The properties you use to configure a box blur filter.
- [CIDiscBlur](cidiscblur.md): The properties you use to configure a disc blur filter.
- [CIGaussianBlur](cigaussianblur.md): The properties you use to configure a Gaussian blur filter.
- [CIMedian](cimedian.md): The properties you use to configure a median filter.
- [CIMorphologyGradient](cimorphologygradient.md): The properties you use to configure a morphology gradient filter.
- [CIMorphologyMaximum](cimorphologymaximum.md): The properties you use to configure a morphology maximum filter.
- [CIMorphologyMinimum](cimorphologyminimum.md): The properties you use to configure a morphology minimum filter.
- [CIMorphologyRectangleMaximum](cimorphologyrectanglemaximum.md): The properties you use to configure a morphology rectangle maximum filter.
- [CIMorphologyRectangleMinimum](cimorphologyrectangleminimum.md): The properties you use to configure a morphology rectangle minimum filter.
- [CIMotionBlur](cimotionblur.md): The properties you use to configure a motion blur filter.
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

# CIMaskedVariableBlur (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a masked variable blur filter.

## Declaration

```objectivec
@protocol CIMaskedVariableBlur <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cimaskedvariableblur/inputimage.md): The image to use as an input image.
- [mask](cimaskedvariableblur/mask.md): A grayscale mask that defines the blur amount.
- [radius](cimaskedvariableblur/radius.md): The distance from the center of the effect.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [maskedVariableBlurFilter](cifilter-swift.class/maskedvariableblur%28%29.md): Blurs a specified portion of an image.

### Protocols

- [CIBokehBlur](cibokehblur.md): The properties you use to configure a bokeh blur filter.
- [CIBoxBlur](ciboxblur.md): The properties you use to configure a box blur filter.
- [CIDiscBlur](cidiscblur.md): The properties you use to configure a disc blur filter.
- [CIGaussianBlur](cigaussianblur.md): The properties you use to configure a Gaussian blur filter.
- [CIMedian](cimedian.md): The properties you use to configure a median filter.
- [CIMorphologyGradient](cimorphologygradient.md): The properties you use to configure a morphology gradient filter.
- [CIMorphologyMaximum](cimorphologymaximum.md): The properties you use to configure a morphology maximum filter.
- [CIMorphologyMinimum](cimorphologyminimum.md): The properties you use to configure a morphology minimum filter.
- [CIMorphologyRectangleMaximum](cimorphologyrectanglemaximum.md): The properties you use to configure a morphology rectangle maximum filter.
- [CIMorphologyRectangleMinimum](cimorphologyrectangleminimum.md): The properties you use to configure a morphology rectangle minimum filter.
- [CIMotionBlur](cimotionblur.md): The properties you use to configure a motion blur filter.
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

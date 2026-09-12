> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cibokehblur](https://developer.apple.com/documentation/coreimage/cibokehblur)

# CIBokehBlur (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a bokeh blur filter.

## Declaration

```swift
protocol CIBokehBlur : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cibokehblur/inputimage.md): The image to use as an input image.
- [radius](cibokehblur/radius.md): The radius of the blur, in pixels.
- [ringAmount](cibokehblur/ringamount.md): The amount of extra emphasis at the ring of the bokeh.
- [ringSize](cibokehblur/ringsize.md): The radius of the extra emphasis at the ring of the bokeh.
- [softness](cibokehblur/softness.md): The softness of the bokeh effect.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [bokehBlur()](cifilter-swift.class/bokehblur%28%29.md): Applies a bokeh effect to an image.

### Protocols

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

# CIBokehBlur (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a bokeh blur filter.

## Declaration

```objectivec
@protocol CIBokehBlur <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cibokehblur/inputimage.md): The image to use as an input image.
- [radius](cibokehblur/radius.md): The radius of the blur, in pixels.
- [ringAmount](cibokehblur/ringamount.md): The amount of extra emphasis at the ring of the bokeh.
- [ringSize](cibokehblur/ringsize.md): The radius of the extra emphasis at the ring of the bokeh.
- [softness](cibokehblur/softness.md): The softness of the bokeh effect.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [bokehBlurFilter](cifilter-swift.class/bokehblur%28%29.md): Applies a bokeh effect to an image.

### Protocols

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

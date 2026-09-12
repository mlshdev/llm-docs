> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cizoomblur](https://developer.apple.com/documentation/coreimage/cizoomblur)

# CIZoomBlur (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a zoom blur filter.

## Declaration

```swift
protocol CIZoomBlur : CIFilterProtocol
```

## Topics

### Instance Properties

- [amount](cizoomblur/amount.md): The zoom-in amount.
- [center](cizoomblur/center.md): The center of the effect, as x and y coordinates.
- [inputImage](cizoomblur/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [zoomBlur()](cifilter-swift.class/zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.

# CIZoomBlur (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a zoom blur filter.

## Declaration

```objectivec
@protocol CIZoomBlur <CIFilter>
```

## Topics

### Instance Properties

- [amount](cizoomblur/amount.md): The zoom-in amount.
- [center](cizoomblur/center.md): The center of the effect, as x and y coordinates.
- [inputImage](cizoomblur/inputimage.md): The image to use as an input image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [zoomBlurFilter](cifilter-swift.class/zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.

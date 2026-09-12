> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cimotionblur](https://developer.apple.com/documentation/coreimage/cimotionblur)

# CIMotionBlur (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a motion blur filter.

## Declaration

```swift
protocol CIMotionBlur : CIFilterProtocol
```

## Topics

### Instance Properties

- [angle](cimotionblur/angle.md): The angle of the motion, in radians, that determines which direction the blur smears.
- [inputImage](cimotionblur/inputimage.md): The image to use as an input image.
- [radius](cimotionblur/radius.md): The radius of the blur, in pixels.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [motionBlur()](cifilter-swift.class/motionblur%28%29.md): Creates motion blur on an image.

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

# CIMotionBlur (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a motion blur filter.

## Declaration

```objectivec
@protocol CIMotionBlur <CIFilter>
```

## Topics

### Instance Properties

- [angle](cimotionblur/angle.md): The angle of the motion, in radians, that determines which direction the blur smears.
- [inputImage](cimotionblur/inputimage.md): The image to use as an input image.
- [radius](cimotionblur/radius.md): The radius of the blur, in pixels.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [motionBlurFilter](cifilter-swift.class/motionblur%28%29.md): Creates motion blur on an image.

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
- [CINoiseReduction](cinoisereduction.md): The properties you use to configure a noise reduction filter.
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

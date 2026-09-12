> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/blur-filters](https://developer.apple.com/documentation/coreimage/blur-filters)

# Blur Filters (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.

## Topics

### Filters

- [bokehBlur()](cifilter-swift.class/bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](cifilter-swift.class/boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlur()](cifilter-swift.class/discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlur()](cifilter-swift.class/gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlur()](cifilter-swift.class/maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [median()](cifilter-swift.class/median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradient()](cifilter-swift.class/morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximum()](cifilter-swift.class/morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimum()](cifilter-swift.class/morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximum()](cifilter-swift.class/morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimum()](cifilter-swift.class/morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlur()](cifilter-swift.class/motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](cifilter-swift.class/noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
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
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

## See Also

### Filter Catalog

- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

# Blur Filters (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.

## Topics

### Filters

- [bokehBlurFilter](cifilter-swift.class/bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](cifilter-swift.class/boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlurFilter](cifilter-swift.class/discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlurFilter](cifilter-swift.class/gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlurFilter](cifilter-swift.class/maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [medianFilter](cifilter-swift.class/median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradientFilter](cifilter-swift.class/morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximumFilter](cifilter-swift.class/morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimumFilter](cifilter-swift.class/morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximumFilter](cifilter-swift.class/morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimumFilter](cifilter-swift.class/morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlurFilter](cifilter-swift.class/motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](cifilter-swift.class/noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
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
- [CIZoomBlur](cizoomblur.md): The properties you use to configure a zoom blur filter.

## See Also

### Filter Catalog

- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

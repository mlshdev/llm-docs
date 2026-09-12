> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/convolution-filters](https://developer.apple.com/documentation/coreimage/convolution-filters)

# Convolution Filters (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Produce effects such as blurring, sharpening, edge detection, translation, and embossing.

<a id="overview"></a>

## Overview

A convolution filter generates each output pixel by summing all elements in the element-wise product of two matrices - the weight matrix and a matrix containing the neighbors of each input pixel. A bias is added to this and the resulting value is clamped to between 0.0 and 1.0. This operation is performed independently for each color component (including the alpha component). You can create many types of image processing effects using different weight matrices, such as blurring, sharpening, edge detection, translation, and embossing.

## Topics

### Filters

- [convolution3X3()](cifilter-swift.class/convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5()](cifilter-swift.class/convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7()](cifilter-swift.class/convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9Horizontal()](cifilter-swift.class/convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolution9Vertical()](cifilter-swift.class/convolution9vertical%28%29.md): Applies a convolution-9 vertical filter to the `RGBA` components of an image.
- [convolutionRGB3X3()](cifilter-swift.class/convolutionrgb3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGB` components of an image.
- [convolutionRGB5X5()](cifilter-swift.class/convolutionrgb5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGB` components of an image.
- [convolutionRGB7X7()](cifilter-swift.class/convolutionrgb7x7%28%29.md): Applies a convolution 7 x 7 filter to the RGB components of an image.
- [convolutionRGB9Horizontal()](cifilter-swift.class/convolutionrgb9horizontal%28%29.md): Applies a convolution 9 x 1 filter to the RGB components of an image.
- [convolutionRGB9Vertical()](cifilter-swift.class/convolutionrgb9vertical%28%29.md): Applies a convolution 1 x 9 filter to the RGB components of an image.

### Protocols

- [CIConvolution](ciconvolution.md): The properties you use to configure a convolution filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
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

# Convolution Filters (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Produce effects such as blurring, sharpening, edge detection, translation, and embossing.

<a id="overview"></a>

## Overview

A convolution filter generates each output pixel by summing all elements in the element-wise product of two matrices - the weight matrix and a matrix containing the neighbors of each input pixel. A bias is added to this and the resulting value is clamped to between 0.0 and 1.0. This operation is performed independently for each color component (including the alpha component). You can create many types of image processing effects using different weight matrices, such as blurring, sharpening, edge detection, translation, and embossing.

## Topics

### Filters

- [convolution3X3Filter](cifilter-swift.class/convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5Filter](cifilter-swift.class/convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7Filter](cifilter-swift.class/convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9HorizontalFilter](cifilter-swift.class/convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolution9VerticalFilter](cifilter-swift.class/convolution9vertical%28%29.md): Applies a convolution-9 vertical filter to the `RGBA` components of an image.
- [convolutionRGB3X3Filter](cifilter-swift.class/convolutionrgb3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGB` components of an image.
- [convolutionRGB5X5Filter](cifilter-swift.class/convolutionrgb5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGB` components of an image.
- [convolutionRGB7X7Filter](cifilter-swift.class/convolutionrgb7x7%28%29.md): Applies a convolution 7 x 7 filter to the RGB components of an image.
- [convolutionRGB9HorizontalFilter](cifilter-swift.class/convolutionrgb9horizontal%28%29.md): Applies a convolution 9 x 1 filter to the RGB components of an image.
- [convolutionRGB9VerticalFilter](cifilter-swift.class/convolutionrgb9vertical%28%29.md): Applies a convolution 1 x 9 filter to the RGB components of an image.

### Protocols

- [CIConvolution](ciconvolution.md): The properties you use to configure a convolution filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
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

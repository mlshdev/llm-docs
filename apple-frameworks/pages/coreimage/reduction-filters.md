> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/reduction-filters](https://developer.apple.com/documentation/coreimage/reduction-filters)

# Reduction Filters (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Create statistical information about an image.

## Topics

### Filters

- [areaAverage()](cifilter-swift.class/areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogram()](cifilter-swift.class/areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogram()](cifilter-swift.class/arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximum()](cifilter-swift.class/areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlpha()](cifilter-swift.class/areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimum()](cifilter-swift.class/areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlpha()](cifilter-swift.class/areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMax()](cifilter-swift.class/areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRed()](cifilter-swift.class/areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverage()](cifilter-swift.class/columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplay()](cifilter-swift.class/histogramdisplay%28%29.md): Generates a histogram map from the image.
- [kMeans()](cifilter-swift.class/kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverage()](cifilter-swift.class/rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

### Protocols

- [CIAreaAverage](ciareaaverage.md)
- [CIAreaHistogram](ciareahistogram.md)
- [CIAreaLogarithmicHistogram](ciarealogarithmichistogram.md)
- [CIAreaMaximum](ciareamaximum.md)
- [CIAreaMaximumAlpha](ciareamaximumalpha.md)
- [CIAreaMinMax](ciareaminmax.md)
- [CIAreaMinMaxRed](ciareaminmaxred.md)
- [CIAreaMinimum](ciareaminimum.md)
- [CIAreaMinimumAlpha](ciareaminimumalpha.md)
- [CIAreaReductionFilter](ciareareductionfilter.md)
- [CIColumnAverage](cicolumnaverage.md)
- [CIHistogramDisplay](cihistogramdisplay.md)
- [CIKMeans](cikmeans.md)
- [CIRowAverage](cirowaverage.md)

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

# Reduction Filters (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Create statistical information about an image.

## Topics

### Filters

- [areaAverageFilter](cifilter-swift.class/areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogramFilter](cifilter-swift.class/areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogramFilter](cifilter-swift.class/arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximumFilter](cifilter-swift.class/areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlphaFilter](cifilter-swift.class/areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimumFilter](cifilter-swift.class/areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlphaFilter](cifilter-swift.class/areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMaxFilter](cifilter-swift.class/areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRedFilter](cifilter-swift.class/areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverageFilter](cifilter-swift.class/columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplayFilter](cifilter-swift.class/histogramdisplay%28%29.md): Generates a histogram map from the image.
- [KMeansFilter](cifilter-swift.class/kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverageFilter](cifilter-swift.class/rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

### Protocols

- [CIAreaAverage](ciareaaverage.md)
- [CIAreaHistogram](ciareahistogram.md)
- [CIAreaLogarithmicHistogram](ciarealogarithmichistogram.md)
- [CIAreaMaximum](ciareamaximum.md)
- [CIAreaMaximumAlpha](ciareamaximumalpha.md)
- [CIAreaMinMax](ciareaminmax.md)
- [CIAreaMinMaxRed](ciareaminmaxred.md)
- [CIAreaMinimum](ciareaminimum.md)
- [CIAreaMinimumAlpha](ciareaminimumalpha.md)
- [CIAreaReductionFilter](ciareareductionfilter.md)
- [CIColumnAverage](cicolumnaverage.md)
- [CIHistogramDisplay](cihistogramdisplay.md)
- [CIKMeans](cikmeans.md)
- [CIRowAverage](cirowaverage.md)

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

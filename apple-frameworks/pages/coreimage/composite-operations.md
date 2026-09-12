> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/composite-operations](https://developer.apple.com/documentation/coreimage/composite-operations)

# Composite Operations (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Composite images by using a range of blend modes and compositing operators.

## Topics

### Filters

- [additionCompositing()](cifilter-swift.class/additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendMode()](cifilter-swift.class/colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorBurnBlendMode()](cifilter-swift.class/colorburnblendmode%28%29.md): Blends color from two images while darkening the image.
- [colorDodgeBlendMode()](cifilter-swift.class/colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendMode()](cifilter-swift.class/darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendMode()](cifilter-swift.class/differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendMode()](cifilter-swift.class/divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendMode()](cifilter-swift.class/exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hardLightBlendMode()](cifilter-swift.class/hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendMode()](cifilter-swift.class/hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendMode()](cifilter-swift.class/lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendMode()](cifilter-swift.class/linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendMode()](cifilter-swift.class/lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendMode()](cifilter-swift.class/linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendMode()](cifilter-swift.class/luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositing()](cifilter-swift.class/minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.
- [maximumCompositing()](cifilter-swift.class/maximumcompositing%28%29.md): Applies a maximum compositing filter to an image.
- [multiplyBlendMode()](cifilter-swift.class/multiplyblendmode%28%29.md): Blends colors from two images by multiplying color components.
- [multiplyCompositing()](cifilter-swift.class/multiplycompositing%28%29.md): Blurs the colors of two images by multiplying color components.
- [overlayBlendMode()](cifilter-swift.class/overlayblendmode%28%29.md): Blends colors by overlaying images.
- [pinLightBlendMode()](cifilter-swift.class/pinlightblendmode%28%29.md): Blends colors of two images by replacing brighter colors.
- [saturationBlendMode()](cifilter-swift.class/saturationblendmode%28%29.md): Blends the colors and saturation values of two images.
- [screenBlendMode()](cifilter-swift.class/screenblendmode%28%29.md): Blends colors of two images by multiplying colors.
- [softLightBlendMode()](cifilter-swift.class/softlightblendmode%28%29.md): Blurs the colors of two images by calculating luminance.
- [sourceAtopCompositing()](cifilter-swift.class/sourceatopcompositing%28%29.md): Overlaps two images to create one cropped image.
- [sourceInCompositing()](cifilter-swift.class/sourceincompositing%28%29.md): Subtracts non-overlapping areas of two images, resulting in one image.
- [sourceOutCompositing()](cifilter-swift.class/sourceoutcompositing%28%29.md): Subtracts overlapping area of two images to create the output image.
- [sourceOverCompositing()](cifilter-swift.class/sourceovercompositing%28%29.md): Places one image over a second image.
- [subtractBlendMode()](cifilter-swift.class/subtractblendmode%28%29.md): Blends colors by subtracting color values from two images.
- [vividLightBlendMode()](cifilter-swift.class/vividlightblendmode%28%29.md): A combination of color-burn and color-dodge blend modes.

### Protocols

- [CICompositeOperation](cicompositeoperation.md): The properties you use to configure a composite operation filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
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

# Composite Operations (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Composite images by using a range of blend modes and compositing operators.

## Topics

### Filters

- [additionCompositingFilter](cifilter-swift.class/additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendModeFilter](cifilter-swift.class/colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorBurnBlendModeFilter](cifilter-swift.class/colorburnblendmode%28%29.md): Blends color from two images while darkening the image.
- [colorDodgeBlendModeFilter](cifilter-swift.class/colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendModeFilter](cifilter-swift.class/darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendModeFilter](cifilter-swift.class/differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendModeFilter](cifilter-swift.class/divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendModeFilter](cifilter-swift.class/exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hardLightBlendModeFilter](cifilter-swift.class/hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendModeFilter](cifilter-swift.class/hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendModeFilter](cifilter-swift.class/lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendModeFilter](cifilter-swift.class/linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendModeFilter](cifilter-swift.class/lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendModeFilter](cifilter-swift.class/linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendModeFilter](cifilter-swift.class/luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositingFilter](cifilter-swift.class/minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.
- [maximumCompositingFilter](cifilter-swift.class/maximumcompositing%28%29.md): Applies a maximum compositing filter to an image.
- [multiplyBlendModeFilter](cifilter-swift.class/multiplyblendmode%28%29.md): Blends colors from two images by multiplying color components.
- [multiplyCompositingFilter](cifilter-swift.class/multiplycompositing%28%29.md): Blurs the colors of two images by multiplying color components.
- [overlayBlendModeFilter](cifilter-swift.class/overlayblendmode%28%29.md): Blends colors by overlaying images.
- [pinLightBlendModeFilter](cifilter-swift.class/pinlightblendmode%28%29.md): Blends colors of two images by replacing brighter colors.
- [saturationBlendModeFilter](cifilter-swift.class/saturationblendmode%28%29.md): Blends the colors and saturation values of two images.
- [screenBlendModeFilter](cifilter-swift.class/screenblendmode%28%29.md): Blends colors of two images by multiplying colors.
- [softLightBlendModeFilter](cifilter-swift.class/softlightblendmode%28%29.md): Blurs the colors of two images by calculating luminance.
- [sourceAtopCompositingFilter](cifilter-swift.class/sourceatopcompositing%28%29.md): Overlaps two images to create one cropped image.
- [sourceInCompositingFilter](cifilter-swift.class/sourceincompositing%28%29.md): Subtracts non-overlapping areas of two images, resulting in one image.
- [sourceOutCompositingFilter](cifilter-swift.class/sourceoutcompositing%28%29.md): Subtracts overlapping area of two images to create the output image.
- [sourceOverCompositingFilter](cifilter-swift.class/sourceovercompositing%28%29.md): Places one image over a second image.
- [subtractBlendModeFilter](cifilter-swift.class/subtractblendmode%28%29.md): Blends colors by subtracting color values from two images.
- [vividLightBlendModeFilter](cifilter-swift.class/vividlightblendmode%28%29.md): A combination of color-burn and color-dodge blend modes.

### Protocols

- [CICompositeOperation](cicompositeoperation.md): The properties you use to configure a composite operation filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
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

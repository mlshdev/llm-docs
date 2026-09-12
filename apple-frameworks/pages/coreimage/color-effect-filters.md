> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/color-effect-filters](https://developer.apple.com/documentation/coreimage/color-effect-filters)

# Color Effect Filters (Swift)

**Framework:** Core Image  
**Kind:** API Collection

Apply color effects, including photo effects, dithering, and color maps.

## Topics

### Color Effect Filters

- [colorCrossPolynomial()](cifilter-swift.class/colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCube()](cifilter-swift.class/colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpace()](cifilter-swift.class/colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMask()](cifilter-swift.class/colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurves()](cifilter-swift.class/colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvert()](cifilter-swift.class/colorinvert%28%29.md): Inverts an image’s colors.
- [colorMap()](cifilter-swift.class/colormap%28%29.md): Performs a transformation of the input image colors to colors from a gradient image.
- [colorMonochrome()](cifilter-swift.class/colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterize()](cifilter-swift.class/colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGB()](cifilter-swift.class/convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLab()](cifilter-swift.class/convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [dither()](cifilter-swift.class/dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancer()](cifilter-swift.class/documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColor()](cifilter-swift.class/falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [labDeltaE()](cifilter-swift.class/labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlpha()](cifilter-swift.class/masktoalpha%28%29.md): Converts an image to a white image with an alpha component.
- [maximumComponent()](cifilter-swift.class/maximumcomponent%28%29.md): Creates a maximum RGB grayscale image.
- [minimumComponent()](cifilter-swift.class/minimumcomponent%28%29.md): Creates a minimum RGB grayscale image.
- [paletteCentroid()](cifilter-swift.class/palettecentroid%28%29.md): Calculates the location of an image’s colors.
- [palettize()](cifilter-swift.class/palettize%28%29.md): Replaces colors with colors from a palette image.
- [photoEffectChrome()](cifilter-swift.class/photoeffectchrome%28%29.md): Exaggerates an image’s colors.
- [photoEffectFade()](cifilter-swift.class/photoeffectfade%28%29.md): Diminishes an image’s colors.
- [photoEffectInstant()](cifilter-swift.class/photoeffectinstant%28%29.md): Desaturates an image’s colors.
- [photoEffectMono()](cifilter-swift.class/photoeffectmono%28%29.md): Adjust an image’s colors to black and white.
- [photoEffectNoir()](cifilter-swift.class/photoeffectnoir%28%29.md): Adjusts an image’s colors to black and white and intensifies the contrast.
- [photoEffectProcess()](cifilter-swift.class/photoeffectprocess%28%29.md): Lowers the contrast of the input image.
- [photoEffectTonal()](cifilter-swift.class/photoeffecttonal%28%29.md): Adjusts an image’s colors to black and white.
- [photoEffectTransfer()](cifilter-swift.class/photoeffecttransfer%28%29.md): Brightens an image’s colors.
- [sepiaTone()](cifilter-swift.class/sepiatone%28%29.md): Adjusts an image’s colors to shades of brown.
- [thermal()](cifilter-swift.class/thermal%28%29.md): Alters the image to make it look like it was taken by a thermal camera.
- [vignette()](cifilter-swift.class/vignette%28%29.md): Gradually darkens an image’s edges.
- [vignetteEffect()](cifilter-swift.class/vignetteeffect%28%29.md): Gradually darkens a specified area of an image.
- [xRay()](cifilter-swift.class/xray%28%29.md): Alters an image to make it look like an X-ray image.

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
- [CIMaximumComponent](cimaximumcomponent.md): The properties you use to configure a maximum component filter.
- [CIMinimumComponent](ciminimumcomponent.md): The properties you use to configure a minimum component filter.
- [CIPaletteCentroid](cipalettecentroid.md): The properties you use to configure a palette centroid filter.
- [CIPalettize](cipalettize.md): The properties you use to configure a palettize filter.
- [CIPhotoEffect](ciphotoeffect.md): The properties you use to configure a photo-effect filter.
- [CISepiaTone](cisepiatone.md): The properties you use to configure a sepia-tone filter.
- [CIThermal](cithermal.md): The properties you use to configure a thermal filter.
- [CIVignette](civignette.md): The properties you use to configure a vignette filter.
- [CIVignetteEffect](civignetteeffect.md): The properties you use to configure a vignette-effect filter.
- [CIXRay](cixray.md): The properties you use to configure an X-ray filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
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

# Color Effect Filters (Objective-C)

**Framework:** Core Image  
**Kind:** API Collection

Apply color effects, including photo effects, dithering, and color maps.

## Topics

### Color Effect Filters

- [colorCrossPolynomialFilter](cifilter-swift.class/colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCubeFilter](cifilter-swift.class/colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpaceFilter](cifilter-swift.class/colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMaskFilter](cifilter-swift.class/colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurvesFilter](cifilter-swift.class/colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvertFilter](cifilter-swift.class/colorinvert%28%29.md): Inverts an image’s colors.
- [colorMapFilter](cifilter-swift.class/colormap%28%29.md): Performs a transformation of the input image colors to colors from a gradient image.
- [colorMonochromeFilter](cifilter-swift.class/colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterizeFilter](cifilter-swift.class/colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGBFilter](cifilter-swift.class/convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLabFilter](cifilter-swift.class/convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [ditherFilter](cifilter-swift.class/dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancerFilter](cifilter-swift.class/documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColorFilter](cifilter-swift.class/falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [LabDeltaE](cifilter-swift.class/labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlphaFilter](cifilter-swift.class/masktoalpha%28%29.md): Converts an image to a white image with an alpha component.
- [maximumComponentFilter](cifilter-swift.class/maximumcomponent%28%29.md): Creates a maximum RGB grayscale image.
- [minimumComponentFilter](cifilter-swift.class/minimumcomponent%28%29.md): Creates a minimum RGB grayscale image.
- [paletteCentroidFilter](cifilter-swift.class/palettecentroid%28%29.md): Calculates the location of an image’s colors.
- [palettizeFilter](cifilter-swift.class/palettize%28%29.md): Replaces colors with colors from a palette image.
- [photoEffectChromeFilter](cifilter-swift.class/photoeffectchrome%28%29.md): Exaggerates an image’s colors.
- [photoEffectFadeFilter](cifilter-swift.class/photoeffectfade%28%29.md): Diminishes an image’s colors.
- [photoEffectInstantFilter](cifilter-swift.class/photoeffectinstant%28%29.md): Desaturates an image’s colors.
- [photoEffectMonoFilter](cifilter-swift.class/photoeffectmono%28%29.md): Adjust an image’s colors to black and white.
- [photoEffectNoirFilter](cifilter-swift.class/photoeffectnoir%28%29.md): Adjusts an image’s colors to black and white and intensifies the contrast.
- [photoEffectProcessFilter](cifilter-swift.class/photoeffectprocess%28%29.md): Lowers the contrast of the input image.
- [photoEffectTonalFilter](cifilter-swift.class/photoeffecttonal%28%29.md): Adjusts an image’s colors to black and white.
- [photoEffectTransferFilter](cifilter-swift.class/photoeffecttransfer%28%29.md): Brightens an image’s colors.
- [sepiaToneFilter](cifilter-swift.class/sepiatone%28%29.md): Adjusts an image’s colors to shades of brown.
- [thermalFilter](cifilter-swift.class/thermal%28%29.md): Alters the image to make it look like it was taken by a thermal camera.
- [vignetteFilter](cifilter-swift.class/vignette%28%29.md): Gradually darkens an image’s edges.
- [vignetteEffectFilter](cifilter-swift.class/vignetteeffect%28%29.md): Gradually darkens a specified area of an image.
- [xRayFilter](cifilter-swift.class/xray%28%29.md): Alters an image to make it look like an X-ray image.

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
- [CIMaximumComponent](cimaximumcomponent.md): The properties you use to configure a maximum component filter.
- [CIMinimumComponent](ciminimumcomponent.md): The properties you use to configure a minimum component filter.
- [CIPaletteCentroid](cipalettecentroid.md): The properties you use to configure a palette centroid filter.
- [CIPalettize](cipalettize.md): The properties you use to configure a palettize filter.
- [CIPhotoEffect](ciphotoeffect.md): The properties you use to configure a photo-effect filter.
- [CISepiaTone](cisepiatone.md): The properties you use to configure a sepia-tone filter.
- [CIThermal](cithermal.md): The properties you use to configure a thermal filter.
- [CIVignette](civignette.md): The properties you use to configure a vignette filter.
- [CIVignetteEffect](civignetteeffect.md): The properties you use to configure a vignette-effect filter.
- [CIXRay](cixray.md): The properties you use to configure an X-ray filter.

## See Also

### Filter Catalog

- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
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

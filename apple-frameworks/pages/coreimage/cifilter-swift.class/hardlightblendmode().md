> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/hardlightblendmode()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/hardlightblendmode())

# hardLightBlendMode() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends colors of two images by screening and multiplying.

## Declaration

```swift
class func hardLightBlendMode() -> any CIFilter & CICompositeOperation
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the hard-light blend mode filter to an image. The effect calculates the brightness of the colors in the background image. Colors that are lighter than 50 percent gray become lighter. If the brightness of the colors in the input image are darker then 50 percent gray, the effect darkens the colors. The filter then uses the calculated results to create the output image.

The hard-light blend mode filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that mixes the colors and results in an output image that’s darker and more saturated:

```swift
func hardLightBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let colorBlendFilter = CIFilter.hardLightBlendMode()
    colorBlendFilter.inputImage = inputImage
    colorBlendFilter.backgroundImage = backgroundImage
    return colorBlendFilter.outputImage!
}
```

![The image on the top left shows a beach with multiple palm trees and a rainbow arching across the blue sky.  The image below is a gradient image displaying a gradual color shift from purple to a dark orange. The image on the right shows the output from applying a hard-light blend mode filter. The result displays a significantly darker image with the gradient image overlaid over the beach rainbow image.](https://developer.apple.com/images/com.apple.coreimage/media-3546419@2x.png)

## See Also

### Filters

- [additionCompositing()](additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendMode()](colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorBurnBlendMode()](colorburnblendmode%28%29.md): Blends color from two images while darkening the image.
- [colorDodgeBlendMode()](colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendMode()](darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendMode()](differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendMode()](divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendMode()](exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hueBlendMode()](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendMode()](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendMode()](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendMode()](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendMode()](linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendMode()](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositing()](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

# hardLightBlendModeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends colors of two images by screening and multiplying.

## Declaration

```objectivec
+ (CIFilter<CICompositeOperation> *) hardLightBlendModeFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the hard-light blend mode filter to an image. The effect calculates the brightness of the colors in the background image. Colors that are lighter than 50 percent gray become lighter. If the brightness of the colors in the input image are darker then 50 percent gray, the effect darkens the colors. The filter then uses the calculated results to create the output image.

The hard-light blend mode filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that mixes the colors and results in an output image that’s darker and more saturated:

```swift
func hardLightBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let colorBlendFilter = CIFilter.hardLightBlendMode()
    colorBlendFilter.inputImage = inputImage
    colorBlendFilter.backgroundImage = backgroundImage
    return colorBlendFilter.outputImage!
}
```

![The image on the top left shows a beach with multiple palm trees and a rainbow arching across the blue sky.  The image below is a gradient image displaying a gradual color shift from purple to a dark orange. The image on the right shows the output from applying a hard-light blend mode filter. The result displays a significantly darker image with the gradient image overlaid over the beach rainbow image.](https://developer.apple.com/images/com.apple.coreimage/media-3546419@2x.png)

## See Also

### Filters

- [additionCompositingFilter](additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendModeFilter](colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorBurnBlendModeFilter](colorburnblendmode%28%29.md): Blends color from two images while darkening the image.
- [colorDodgeBlendModeFilter](colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendModeFilter](darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendModeFilter](differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendModeFilter](divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendModeFilter](exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hueBlendModeFilter](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendModeFilter](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendModeFilter](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendModeFilter](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendModeFilter](linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendModeFilter](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositingFilter](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

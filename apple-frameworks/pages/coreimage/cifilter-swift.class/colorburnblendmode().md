> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorburnblendmode()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorburnblendmode())

# colorBurnBlendMode() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends color from two images while darkening the image.

## Declaration

```swift
class func colorBurnBlendMode() -> any CIFilter & CICompositeOperation
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color-burn blend mode filter to an image. The effect darkens the background image to reflect the input image’s color.

The color-burn blend mode filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that darkens the background image:

```swift
func colorBurnBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let colorBlendFilter = CIFilter.colorBurnBlendMode()
    colorBlendFilter.inputImage = inputImage
    colorBlendFilter.backgroundImage = backgroundImage
    return colorBlendFilter.outputImage!
}
```

![The image on the top left shows a beach with multiple palm trees and a rainbow arching across the blue sky.  The image below is a gradient image displaying a gradual color shift from purple to a dark orange. The image on the right shows the output from applying the color burn blend mode filter. This results in a much darker image  with very little detail visible.](https://developer.apple.com/images/com.apple.coreimage/media-3546399@2x.png)

## See Also

### Filters

- [additionCompositing()](additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendMode()](colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorDodgeBlendMode()](colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendMode()](darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendMode()](differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendMode()](divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendMode()](exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hardLightBlendMode()](hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendMode()](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendMode()](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendMode()](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendMode()](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendMode()](linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendMode()](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositing()](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

# colorBurnBlendModeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends color from two images while darkening the image.

## Declaration

```objectivec
+ (CIFilter<CICompositeOperation> *) colorBurnBlendModeFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color-burn blend mode filter to an image. The effect darkens the background image to reflect the input image’s color.

The color-burn blend mode filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that darkens the background image:

```swift
func colorBurnBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let colorBlendFilter = CIFilter.colorBurnBlendMode()
    colorBlendFilter.inputImage = inputImage
    colorBlendFilter.backgroundImage = backgroundImage
    return colorBlendFilter.outputImage!
}
```

![The image on the top left shows a beach with multiple palm trees and a rainbow arching across the blue sky.  The image below is a gradient image displaying a gradual color shift from purple to a dark orange. The image on the right shows the output from applying the color burn blend mode filter. This results in a much darker image  with very little detail visible.](https://developer.apple.com/images/com.apple.coreimage/media-3546399@2x.png)

## See Also

### Filters

- [additionCompositingFilter](additioncompositing%28%29.md): Blends colors from two images by addition.
- [colorBlendModeFilter](colorblendmode%28%29.md): Blends color from two images using the luminance values from the background image and the hue and saturation values from the input image.
- [colorDodgeBlendModeFilter](colordodgeblendmode%28%29.md): Blends color from two images using dodging.
- [darkenBlendModeFilter](darkenblendmode%28%29.md): Blends colors from two images while darkening lighter pixels.
- [differenceBlendModeFilter](differenceblendmode%28%29.md): Subtracts color values to blend colors.
- [divideBlendModeFilter](divideblendmode%28%29.md): Divides color values to blend colors.
- [exclusionBlendModeFilter](exclusionblendmode%28%29.md): Subtracts color values to blend colors with less contrast.
- [hardLightBlendModeFilter](hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendModeFilter](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendModeFilter](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendModeFilter](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendModeFilter](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [linearLightBlendModeFilter](linearlightblendmode%28%29.md): A combination of linear burn and linear dodge blend modes.
- [luminosityBlendModeFilter](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositingFilter](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

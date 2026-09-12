> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/linearlightblendmode()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/linearlightblendmode())

# linearLightBlendMode() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A combination of linear burn and linear dodge blend modes.

## Declaration

```swift
class func linearLightBlendMode() -> any CIFilter & CICompositeOperation
```

<a id="return-value"></a>

## Return Value

The blended image as a [CIImage](../ciimage.md).

<a id="Discussion"></a>

## Discussion

The linear-light blend mode combines the linear-dodge and linear-burn blend modes (rescaled so that neutral colors become middle gray). If the input image’s values are lighter than middle gray, the filter uses dodge; for darker values, the filter uses burn.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the input image
- **`backgroundImage`**: A [CIImage](../ciimage.md) containing the background image.

The following code sample applies the linear-light blend mode filter to two images:

```swift
func linearLightBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let filter = CIFilter.linearLightBlendMode()
    filter.inputImage = inputImage
    filter.backgroundImage = backgroundImage
    return filter.outputImage!
}
```

![Two images arranged vertically on the left and a third image on the right. The top left image contains a photograph of a vineyard. The lower third of the image contains gravel with a deep shadow in the foreground. The image on the bottom left is a closeup photograph of a cactus. The image on the right shows the result of applying the linear-light blend mode filter.](https://developer.apple.com/images/com.apple.coreimage/media-4407310@2x.png)

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
- [hardLightBlendMode()](hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendMode()](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendMode()](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendMode()](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendMode()](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [luminosityBlendMode()](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositing()](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

# linearLightBlendModeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A combination of linear burn and linear dodge blend modes.

## Declaration

```objectivec
+ (CIFilter<CICompositeOperation> *) linearLightBlendModeFilter;
```

<a id="return-value"></a>

## Return Value

The blended image as a [CIImage](../ciimage.md).

<a id="Discussion"></a>

## Discussion

The linear-light blend mode combines the linear-dodge and linear-burn blend modes (rescaled so that neutral colors become middle gray). If the input image’s values are lighter than middle gray, the filter uses dodge; for darker values, the filter uses burn.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the input image
- **`backgroundImage`**: A [CIImage](../ciimage.md) containing the background image.

The following code sample applies the linear-light blend mode filter to two images:

```swift
func linearLightBlendMode(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let filter = CIFilter.linearLightBlendMode()
    filter.inputImage = inputImage
    filter.backgroundImage = backgroundImage
    return filter.outputImage!
}
```

![Two images arranged vertically on the left and a third image on the right. The top left image contains a photograph of a vineyard. The lower third of the image contains gravel with a deep shadow in the foreground. The image on the bottom left is a closeup photograph of a cactus. The image on the right shows the result of applying the linear-light blend mode filter.](https://developer.apple.com/images/com.apple.coreimage/media-4407310@2x.png)

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
- [hardLightBlendModeFilter](hardlightblendmode%28%29.md): Blends colors of two images by screening and multiplying.
- [hueBlendModeFilter](hueblendmode%28%29.md): Blends colors of two images by computing the sum of image color values.
- [lightenBlendModeFilter](lightenblendmode%28%29.md): Blends colors from two images by brightening colors.
- [linearBurnBlendModeFilter](linearburnblendmode%28%29.md): Blends color from two images while increasing contrast.
- [linearDodgeBlendModeFilter](lineardodgeblendmode%28%29.md): Blends colors of two images with dodging.
- [luminosityBlendModeFilter](luminosityblendmode%28%29.md): Blends color from two images by calculating the color, hue, and saturation.
- [minimumCompositingFilter](minimumcompositing%28%29.md): Blends colors from two images by computing minimum values.

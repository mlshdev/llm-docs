> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/unsharpmask()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/unsharpmask())

# unsharpMask() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Increases an image’s contrast between two colors.

## Declaration

```swift
class func unsharpMask() -> any CIFilter & CIUnsharpMask
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the unsharp mask filter to an image. The effect increases the contrast of the edge between pixels of different colors within the defined radius property.

The unsharp mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`intensity`**: A `float` representing the desired strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the objects within the image becoming darker:

```swift
func unsharp (inputImage: CIImage) -> CIImage? {    
    let unsharpMask = CIFilter.unsharpMask()
    unsharpMask.inputImage = inputImage
    unsharpMask.radius = 5
    unsharpMask.intensity = 2.5
    return unsharpMask.outputImage!
}
```

![Two photographs of a downtown sidewalk with trees, a blue square highlighting the end of the sidewalk with a bike lane and street sign displayed. The photo on the left has no modifications to color. In the photo on the right a unsharp mask filter has been applied resulting in darker color on the tree leafs and street signs. ](https://developer.apple.com/images/com.apple.coreimage/media-3595819@2x.png)

## See Also

### Filters

- [sharpenLuminance()](sharpenluminance%28%29.md): Applies a sharpening effect to an image.

# unsharpMaskFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Increases an image’s contrast between two colors.

## Declaration

```objectivec
+ (CIFilter<CIUnsharpMask> *) unsharpMaskFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the unsharp mask filter to an image. The effect increases the contrast of the edge between pixels of different colors within the defined radius property.

The unsharp mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`intensity`**: A `float` representing the desired strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the objects within the image becoming darker:

```swift
func unsharp (inputImage: CIImage) -> CIImage? {    
    let unsharpMask = CIFilter.unsharpMask()
    unsharpMask.inputImage = inputImage
    unsharpMask.radius = 5
    unsharpMask.intensity = 2.5
    return unsharpMask.outputImage!
}
```

![Two photographs of a downtown sidewalk with trees, a blue square highlighting the end of the sidewalk with a bike lane and street sign displayed. The photo on the left has no modifications to color. In the photo on the right a unsharp mask filter has been applied resulting in darker color on the tree leafs and street signs. ](https://developer.apple.com/images/com.apple.coreimage/media-3595819@2x.png)

## See Also

### Filters

- [sharpenLuminanceFilter](sharpenluminance%28%29.md): Applies a sharpening effect to an image.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/lineargradient()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/lineargradient())

# linearGradient() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a color gradient that varies along a linear axis between two defined endpoints.

## Declaration

```swift
class func linearGradient() -> any CIFilter & CILinearGradient
```

<a id="return-value"></a>

## Return Value

The generated image.

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This method generates a linear-gradient image. The effect creates a gradient that varies linearly between the two input properties of `point0` and `point1`.

The linear-gradient filter uses the following properties:

- **`point0`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the starting position of the gradient.
- **`point1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the ending position of the gradient.
- **`color0`**: A [CIColor](../cicolor.md) representing the first color to use in the gradient.
- **`color1`**: A [CIColor](../cicolor.md) representing the second color to use the gradient.

The following code creates a filter that generates a gradient image:

```swift
func linear() -> CIImage {
    let linearGradient = CIFilter.linearGradient()
    linearGradient.point0 = CGPoint(x: 0, y: 0)
    linearGradient.point1 = CGPoint(x: 200, y: 200)
    linearGradient.color0 = CIColor(red: 216/255, green: 232/255, blue: 146/255)
    linearGradient.color1 = CIColor(red: 0/255, green: 112/255, blue: 201/255)
    return linearGradient.outputImage!
}
```

![An image that gradually changes in color from yellow in the top left corner to light blue in the bottom right corner.](https://developer.apple.com/images/com.apple.coreimage/media-3558797@2x.png)

## See Also

### Filters

- [gaussianGradient()](gaussiangradient%28%29.md): Generates a gradient that varies from one color to another using a Gaussian distribution.
- [hueSaturationValueGradient()](huesaturationvaluegradient%28%29.md): Generates a gradient representing a specified color space.
- [radialGradient()](radialgradient%28%29.md): Generates a gradient that varies radially between two circles having the same center.
- [smoothLinearGradient()](smoothlineargradient%28%29.md): Generates a gradient that blends colors along a linear axis between two defined endpoints.

# linearGradientFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a color gradient that varies along a linear axis between two defined endpoints.

## Declaration

```objectivec
+ (CIFilter<CILinearGradient> *) linearGradientFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This method generates a linear-gradient image. The effect creates a gradient that varies linearly between the two input properties of `point0` and `point1`.

The linear-gradient filter uses the following properties:

- **`point0`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the starting position of the gradient.
- **`point1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the ending position of the gradient.
- **`color0`**: A [CIColor](../cicolor.md) representing the first color to use in the gradient.
- **`color1`**: A [CIColor](../cicolor.md) representing the second color to use the gradient.

The following code creates a filter that generates a gradient image:

```swift
func linear() -> CIImage {
    let linearGradient = CIFilter.linearGradient()
    linearGradient.point0 = CGPoint(x: 0, y: 0)
    linearGradient.point1 = CGPoint(x: 200, y: 200)
    linearGradient.color0 = CIColor(red: 216/255, green: 232/255, blue: 146/255)
    linearGradient.color1 = CIColor(red: 0/255, green: 112/255, blue: 201/255)
    return linearGradient.outputImage!
}
```

![An image that gradually changes in color from yellow in the top left corner to light blue in the bottom right corner.](https://developer.apple.com/images/com.apple.coreimage/media-3558797@2x.png)

## See Also

### Filters

- [gaussianGradientFilter](gaussiangradient%28%29.md): Generates a gradient that varies from one color to another using a Gaussian distribution.
- [hueSaturationValueGradientFilter](huesaturationvaluegradient%28%29.md): Generates a gradient representing a specified color space.
- [radialGradientFilter](radialgradient%28%29.md): Generates a gradient that varies radially between two circles having the same center.
- [smoothLinearGradientFilter](smoothlineargradient%28%29.md): Generates a gradient that blends colors along a linear axis between two defined endpoints.

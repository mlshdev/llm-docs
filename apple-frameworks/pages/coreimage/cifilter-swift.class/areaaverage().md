> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/areaaverage()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/areaaverage())

# areaAverage() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a 1 x 1 pixel image that contains the average color for the region of interest.

## Declaration

```swift
class func areaAverage() -> any CIFilter & CIAreaAverage
```

<a id="return-value"></a>

## Return Value

A 1 x 1 pixel image containing the average color for the region of interest.

<a id="Discussion"></a>

## Discussion

This filter calculates the average color of the area defined by `extent` and creates a 1 x 1 pixel image with the result. The filter processes each color component (red, green, blue, alpha) of the input image independently.

The area average filter uses the following properties:

- **`inputImage`**: The [CIImage](../ciimage.md) containing the image you want to process.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the region of the image that you want to process.

The following code creates a filter that calculates the average color of a 500 x 500 set of pixels from the center of the image:

```swift
func averageArea(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaAverage()
    filter.inputImage = inputImage
    filter.extent = CGRect(
        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. A 500 x 500 pixel square in the center of the image is highlighted using a square outline. The image on the right shows the result of applying the area average filter to the 500 x 500 pixel square. The result is a 1 x 1 pixel image containing the average color from the highlighted square of the left image.](https://developer.apple.com/images/com.apple.coreimage/media-4331783@2x.png)

## See Also

### Filters

- [areaHistogram()](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogram()](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximum()](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlpha()](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimum()](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlpha()](areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMax()](areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRed()](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverage()](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplay()](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [kMeans()](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverage()](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

# areaAverageFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a 1 x 1 pixel image that contains the average color for the region of interest.

## Declaration

```objectivec
+ (CIFilter<CIAreaAverage> *) areaAverageFilter;
```

<a id="return-value"></a>

## Return Value

A 1 x 1 pixel image containing the average color for the region of interest.

<a id="Discussion"></a>

## Discussion

This filter calculates the average color of the area defined by `extent` and creates a 1 x 1 pixel image with the result. The filter processes each color component (red, green, blue, alpha) of the input image independently.

The area average filter uses the following properties:

- **`inputImage`**: The [CIImage](../ciimage.md) containing the image you want to process.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the region of the image that you want to process.

The following code creates a filter that calculates the average color of a 500 x 500 set of pixels from the center of the image:

```swift
func averageArea(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaAverage()
    filter.inputImage = inputImage
    filter.extent = CGRect(
        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. A 500 x 500 pixel square in the center of the image is highlighted using a square outline. The image on the right shows the result of applying the area average filter to the 500 x 500 pixel square. The result is a 1 x 1 pixel image containing the average color from the highlighted square of the left image.](https://developer.apple.com/images/com.apple.coreimage/media-4331783@2x.png)

## See Also

### Filters

- [areaHistogramFilter](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogramFilter](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximumFilter](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlphaFilter](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimumFilter](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlphaFilter](areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMaxFilter](areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRedFilter](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverageFilter](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplayFilter](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [KMeansFilter](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverageFilter](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

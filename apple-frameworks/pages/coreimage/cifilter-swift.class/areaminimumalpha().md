> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/areaminimumalpha()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/areaminimumalpha())

# areaMinimumAlpha() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the pixel within a specified area that has the smallest alpha value.

## Declaration

```swift
class func areaMinimumAlpha() -> any CIFilter & CIAreaMinimumAlpha
```

<a id="return-value"></a>

## Return Value

A 1 x 1 pixel image containing the color with the smallest alpha value.

<a id="Discussion"></a>

## Discussion

This method applies the area minimum alpha filter to an image. This effect finds and returns the pixel with the lowest alpha value in the region defined by `extent`.

The area minimum alpha filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the subregion of the image that you want to process.

The following code creates a filter that results in a 1 x 1 pixel image containing the color with the lowest alpha value:

```swift
func areaMinimumAlpha(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaMinimumAlpha()
    filter.inputImage = inputImage
    filter.extent = CGRect(
        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
     return filter.outputImage!
}
```

![Two images side by side arranged horizontally. The left image is a photograph of a modern brick building. An outlined square highlights a 500 x 500 pixel region in the image. The right image contains the result of running the area minimum alpha filter. It contains the color from the highlighted square that has the minimum alpha value.](https://developer.apple.com/images/com.apple.coreimage/media-4332169@2x.png)

## See Also

### Filters

- [areaAverage()](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogram()](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogram()](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximum()](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlpha()](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimum()](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinMax()](areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRed()](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverage()](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplay()](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [kMeans()](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverage()](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

# areaMinimumAlphaFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the pixel within a specified area that has the smallest alpha value.

## Declaration

```objectivec
+ (CIFilter<CIAreaMinimumAlpha> *) areaMinimumAlphaFilter;
```

<a id="return-value"></a>

## Return Value

A 1 x 1 pixel image containing the color with the smallest alpha value.

<a id="Discussion"></a>

## Discussion

This method applies the area minimum alpha filter to an image. This effect finds and returns the pixel with the lowest alpha value in the region defined by `extent`.

The area minimum alpha filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the subregion of the image that you want to process.

The following code creates a filter that results in a 1 x 1 pixel image containing the color with the lowest alpha value:

```swift
func areaMinimumAlpha(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaMinimumAlpha()
    filter.inputImage = inputImage
    filter.extent = CGRect(
        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
     return filter.outputImage!
}
```

![Two images side by side arranged horizontally. The left image is a photograph of a modern brick building. An outlined square highlights a 500 x 500 pixel region in the image. The right image contains the result of running the area minimum alpha filter. It contains the color from the highlighted square that has the minimum alpha value.](https://developer.apple.com/images/com.apple.coreimage/media-4332169@2x.png)

## See Also

### Filters

- [areaAverageFilter](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogramFilter](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogramFilter](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximumFilter](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlphaFilter](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimumFilter](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinMaxFilter](areaminmax%28%29.md): Calculates minimum and maximum color components for a specified area of the image.
- [areaMinMaxRedFilter](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverageFilter](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplayFilter](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [KMeansFilter](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverageFilter](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

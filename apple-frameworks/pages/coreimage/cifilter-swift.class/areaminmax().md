> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/areaminmax()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/areaminmax())

# areaMinMax() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates minimum and maximum color components for a specified area of the image.

## Declaration

```swift
class func areaMinMax() -> any CIFilter & CIAreaMinMax
```

<a id="return-value"></a>

## Return Value

A 2 x 1 pixel image containing the minimum and maximum color components.

<a id="Discussion"></a>

## Discussion

This filter returns the maximum and minimum color components in the region defined by `extent`. The result is a 2 x 1 pixel image with the left pixel containing the minimum components and the right pixel containing the maximum components.

The area min max filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the subregion of the image that you want to process.

The following code creates a filter that results in a 2 x 1 image where the minimum components are in the left pixel and the maximum components are in the right pixel.

```swift
func areaMinMax(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaMinMax()
    filter.inputImage = inputImage
    filter.extent = CGRect(        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. A 500 x 500 pixel square in the center of the image is highlighted using an outlined box. The image on the right shows the result of applying the area min-max filter to the 500 x 500 pixel square. This is a 2 x 1 pixel image. The left pixel contains a color made up from the minimum color components. The right pixel contains a color made up from the maximum color components.](https://developer.apple.com/images/com.apple.coreimage/media-4331786@2x.png)

## See Also

### Filters

- [areaAverage()](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogram()](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogram()](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximum()](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlpha()](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimum()](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlpha()](areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMaxRed()](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverage()](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplay()](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [kMeans()](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverage()](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

# areaMinMaxFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates minimum and maximum color components for a specified area of the image.

## Declaration

```objectivec
+ (CIFilter<CIAreaMinMax> *) areaMinMaxFilter;
```

<a id="return-value"></a>

## Return Value

A 2 x 1 pixel image containing the minimum and maximum color components.

<a id="Discussion"></a>

## Discussion

This filter returns the maximum and minimum color components in the region defined by `extent`. The result is a 2 x 1 pixel image with the left pixel containing the minimum components and the right pixel containing the maximum components.

The area min max filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that specifies the subregion of the image that you want to process.

The following code creates a filter that results in a 2 x 1 image where the minimum components are in the left pixel and the maximum components are in the right pixel.

```swift
func areaMinMax(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.areaMinMax()
    filter.inputImage = inputImage
    filter.extent = CGRect(        x: inputImage.extent.width/2-250,
        y: inputImage.extent.height/2-250,
        width: 500,
        height: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. A 500 x 500 pixel square in the center of the image is highlighted using an outlined box. The image on the right shows the result of applying the area min-max filter to the 500 x 500 pixel square. This is a 2 x 1 pixel image. The left pixel contains a color made up from the minimum color components. The right pixel contains a color made up from the maximum color components.](https://developer.apple.com/images/com.apple.coreimage/media-4331786@2x.png)

## See Also

### Filters

- [areaAverageFilter](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
- [areaHistogramFilter](areahistogram%28%29.md): Returns a histogram of a specified area of the image.
- [areaLogarithmicHistogramFilter](arealogarithmichistogram%28%29.md): Returns a logarithmic histogram of a specified area of the image.
- [areaMaximumFilter](areamaximum%28%29.md): Calculates the maximum color components of a specified area of the image.
- [areaMaximumAlphaFilter](areamaximumalpha%28%29.md): Finds the pixel with the highest alpha value.
- [areaMinimumFilter](areaminimum%28%29.md): Calculates the minimum color component values for a specified area of the image.
- [areaMinimumAlphaFilter](areaminimumalpha%28%29.md): Calculates the pixel within a specified area that has the smallest alpha value.
- [areaMinMaxRedFilter](areaminmaxred%28%29.md): Calculates the minimum and maximum red component value.
- [columnAverageFilter](columnaverage%28%29.md): Calculates the average color for a specified column of an image.
- [histogramDisplayFilter](histogramdisplay%28%29.md): Generates a histogram map from the image.
- [KMeansFilter](kmeans%28%29.md): Applies the k-means algorithm to find the most common colors in an image.
- [rowAverageFilter](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

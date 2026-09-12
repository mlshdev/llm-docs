> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/kmeans()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/kmeans())

# kMeans() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Applies the k-means algorithm to find the most common colors in an image.

## Declaration

```swift
class func kMeans() -> any CIFilter & CIKMeans
```

<a id="return-value"></a>

## Return Value

A one-dimensional [CIImage](../ciimage.md) containing the colors.

<a id="Discussion"></a>

## Discussion

This filter uses the k-means clustering algorithm to find the most common colors in an input image. The result is a [CIImage](../ciimage.md) with `count` x 1 dimensions. Each `RGBA` pixel in the result image represents the center of a k-means cluster. The `RGB` components contain the color and the alpha component represents the weight of the color. You typically use the [kMeans()](kmeans%28%29.md) filter in conjunction with the [palettize()](palettize%28%29.md) filter to produce an image with a reduced number of colors.

- **`inputImage`**: A [CIImage](../ciimage.md) to process.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) specifying the area of the image to analyze.
- **`means`**: An optional [CIImage](../ciimage.md) containing a set of colors to use as seeds for the k-means clustering.
- **`count`**: The number of k-means color clusters that should be created. Maximum is `128`, and default is `8`.
- **`passes`**: The number of k-means passes that should run. Maximum is `20`, and default is `5`.
- **`perceptual`**: Whether the k-means color palette should use a perceptual color space.

> **Tip**

>  The colors in the result of the [kMeans()](kmeans%28%29.md) filter have an alpha component that indicates the weight of the color. You should set this value one using [settingAlphaOne(in:)](../ciimage/settingalphaone%28in_%29.md) before using the palette.

The following code example uses the [kMeans()](kmeans%28%29.md) filter followed by the [palettize()](palettize%28%29.md) filter to reduce the colors in the image to four:

```swift
func kMeans(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.kMeans()
    filter.inputImage = inputImage
    filter.extent = inputImage.extent
    filter.count = 4
    filter.passes = 5
    return filter.outputImage!
}

func palettize(inputImage: CIImage, paletteImage: CIImage) -> CIImage {
    let palettize = CIFilter.palettize()
    palettize.inputImage = inputImage
    palettize.paletteImage = paletteImage
    return palettize.outputImage!
}

let palette = kMeans(inputImage: image)
let palettized = palettize(inputImage: image, palette.settingAlphaOne(in: palette.extent))
```

![Three images arranged horizontally. The image on the left is a closeup photograph of a cactus. The center image consists of squares arranged vertically showing the four main colors from the left image. The image on the right shows the image with the reduced colors.](https://developer.apple.com/images/com.apple.coreimage/media-4332587@2x.png)

## See Also

### Filters

- [areaAverage()](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
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
- [rowAverage()](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

# KMeansFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Applies the k-means algorithm to find the most common colors in an image.

## Declaration

```objectivec
+ (CIFilter<CIKMeans> *) KMeansFilter;
```

<a id="return-value"></a>

## Return Value

A one-dimensional [CIImage](../ciimage.md) containing the colors.

<a id="Discussion"></a>

## Discussion

This filter uses the k-means clustering algorithm to find the most common colors in an input image. The result is a [CIImage](../ciimage.md) with `count` x 1 dimensions. Each `RGBA` pixel in the result image represents the center of a k-means cluster. The `RGB` components contain the color and the alpha component represents the weight of the color. You typically use the [KMeansFilter](kmeans%28%29.md) filter in conjunction with the [palettizeFilter](palettize%28%29.md) filter to produce an image with a reduced number of colors.

- **`inputImage`**: A [CIImage](../ciimage.md) to process.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) specifying the area of the image to analyze.
- **`means`**: An optional [CIImage](../ciimage.md) containing a set of colors to use as seeds for the k-means clustering.
- **`count`**: The number of k-means color clusters that should be created. Maximum is `128`, and default is `8`.
- **`passes`**: The number of k-means passes that should run. Maximum is `20`, and default is `5`.
- **`perceptual`**: Whether the k-means color palette should use a perceptual color space.

> **Tip**

>  The colors in the result of the [KMeansFilter](kmeans%28%29.md) filter have an alpha component that indicates the weight of the color. You should set this value one using [imageBySettingAlphaOneInExtent:](../ciimage/settingalphaone%28in_%29.md) before using the palette.

The following code example uses the [KMeansFilter](kmeans%28%29.md) filter followed by the [palettizeFilter](palettize%28%29.md) filter to reduce the colors in the image to four:

```swift
func kMeans(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.kMeans()
    filter.inputImage = inputImage
    filter.extent = inputImage.extent
    filter.count = 4
    filter.passes = 5
    return filter.outputImage!
}

func palettize(inputImage: CIImage, paletteImage: CIImage) -> CIImage {
    let palettize = CIFilter.palettize()
    palettize.inputImage = inputImage
    palettize.paletteImage = paletteImage
    return palettize.outputImage!
}

let palette = kMeans(inputImage: image)
let palettized = palettize(inputImage: image, palette.settingAlphaOne(in: palette.extent))
```

![Three images arranged horizontally. The image on the left is a closeup photograph of a cactus. The center image consists of squares arranged vertically showing the four main colors from the left image. The image on the right shows the image with the reduced colors.](https://developer.apple.com/images/com.apple.coreimage/media-4332587@2x.png)

## See Also

### Filters

- [areaAverageFilter](areaaverage%28%29.md): Returns a 1 x 1 pixel image that contains the average color for the region of interest.
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
- [rowAverageFilter](rowaverage%28%29.md): Calculates the average color for the specified row of pixels in an image.

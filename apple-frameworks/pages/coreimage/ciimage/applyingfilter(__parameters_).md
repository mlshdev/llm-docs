> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/applyingfilter(_:parameters:)](https://developer.apple.com/documentation/coreimage/ciimage/applyingfilter(_:parameters:))

# applyingFilter(\_:parameters:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a new image created by applying a filter to the original image with the specified name and parameters.

## Declaration

```swift
func applyingFilter(_ filterName: String, parameters params: [String : Any]) -> CIImage
```

## Parameters

- `filterName`: The name of the filter to apply, as used when creating a [CIFilter](../cifilter-swift.class.md) instance with the [init(name:)](../cifilter-swift.class/init%28name_%29.md) method.
- `params`: A dictionary whose key-value pairs are set as input values to the filter. Each key is a constant that specifies the name of an input parameter for the filter, and the corresponding value is the value for that parameter. See [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346) for built-in filters and their allowed parameters.

<a id="return-value"></a>

## Return Value

An image object representing the result of applying the filter.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to the following sequence of steps:

1. Creating a [CIFilter](../cifilter-swift.class.md) instance
2. Setting the original image as the filter’s `inputImage` parameter
3. Setting the remaining filter parameters from the `params` dictionary
4. Retrieving the [outputImage](../cifilter-swift.class/outputimage.md) object from the filter

> **Important**

>  This method, though convenient, is inefficient if used multiple times in succession. Achieve better performance by chaining filters without asking for the outputs of individual filters. For more information, see [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md).

## See Also

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:)](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](transformed%28by_highqualitydownsample_%29.md)
- [cropped(to:)](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [oriented(forExifOrientation:)](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [clampedToExtent()](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [clamped(to:)](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [composited(over:)](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [convertingWorkingSpaceToLab()](convertingworkingspacetolab%28%29.md)
- [convertingLabToWorkingSpace()](convertinglabtoworkingspace%28%29.md)
- [matchedToWorkingSpace(from:)](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [matchedFromWorkingSpace(to:)](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [premultiplyingAlpha()](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [unpremultiplyingAlpha()](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [settingAlphaOne(in:)](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

# imageByApplyingFilter:withInputParameters: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a new image created by applying a filter to the original image with the specified name and parameters.

## Declaration

```objectivec
- (CIImage *) imageByApplyingFilter:(NSString *) filterName withInputParameters:(NSDictionary<NSString *,id> *) params;
```

## Parameters

- `filterName`: The name of the filter to apply, as used when creating a [CIFilter](../cifilter-swift.class.md) instance with the [filterWithName:](../cifilter-swift.class/init%28name_%29.md) method.
- `params`: A dictionary whose key-value pairs are set as input values to the filter. Each key is a constant that specifies the name of an input parameter for the filter, and the corresponding value is the value for that parameter. See [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346) for built-in filters and their allowed parameters.

<a id="return-value"></a>

## Return Value

An image object representing the result of applying the filter.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to the following sequence of steps:

1. Creating a [CIFilter](../cifilter-swift.class.md) instance
2. Setting the original image as the filter’s `inputImage` parameter
3. Setting the remaining filter parameters from the `params` dictionary
4. Retrieving the [outputImage](../cifilter-swift.class/outputimage.md) object from the filter

> **Important**

>  This method, though convenient, is inefficient if used multiple times in succession. Achieve better performance by chaining filters without asking for the outputs of individual filters. For more information, see [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md).

## See Also

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](transformed%28by_highqualitydownsample_%29.md)
- [imageByCroppingToRect:](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [imageByApplyingOrientation:](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [imageByClampingToExtent](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [imageByClampingToRect:](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [imageByCompositingOverImage:](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [imageByConvertingWorkingSpaceToLab](convertingworkingspacetolab%28%29.md)
- [imageByConvertingLabToWorkingSpace](convertinglabtoworkingspace%28%29.md)
- [imageByColorMatchingColorSpaceToWorkingSpace:](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [imageByColorMatchingWorkingSpaceToColorSpace:](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [imageByPremultiplyingAlpha](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [imageByUnpremultiplyingAlpha](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [imageBySettingAlphaOneInExtent:](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

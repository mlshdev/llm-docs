> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/composited(over:)](https://developer.apple.com/documentation/coreimage/ciimage/composited(over:))

# composited(over:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a new image created by compositing the original image over the specified destination image.

## Declaration

```swift
func composited(over dest: CIImage) -> CIImage
```

## Parameters

- `dest`: An image to serve as the destination of the compositing operation.

<a id="return-value"></a>

## Return Value

An image object representing the result of the compositing operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [CISourceOverCompositing](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CISourceOverCompositing) filter. To use other compositing operations and blending modes, create a [CIFilter](../cifilter-swift.class.md) object using one of the built-in filters from the [CICategoryCompositeOperation](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP30000136-SW71) category. For details, see [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346).

## See Also

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:parameters:)](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [applyingFilter(\_:)](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](transformed%28by_highqualitydownsample_%29.md)
- [cropped(to:)](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [oriented(forExifOrientation:)](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [clampedToExtent()](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [clamped(to:)](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [convertingWorkingSpaceToLab()](convertingworkingspacetolab%28%29.md)
- [convertingLabToWorkingSpace()](convertinglabtoworkingspace%28%29.md)
- [matchedToWorkingSpace(from:)](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [matchedFromWorkingSpace(to:)](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [premultiplyingAlpha()](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [unpremultiplyingAlpha()](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [settingAlphaOne(in:)](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

# imageByCompositingOverImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a new image created by compositing the original image over the specified destination image.

## Declaration

```objectivec
- (CIImage *) imageByCompositingOverImage:(CIImage *) dest;
```

## Parameters

- `dest`: An image to serve as the destination of the compositing operation.

<a id="return-value"></a>

## Return Value

An image object representing the result of the compositing operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [CISourceOverCompositing](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CISourceOverCompositing) filter. To use other compositing operations and blending modes, create a [CIFilter](../cifilter-swift.class.md) object using one of the built-in filters from the [CICategoryCompositeOperation](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP30000136-SW71) category. For details, see [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346).

## See Also

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:withInputParameters:](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [imageByApplyingFilter:](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](transformed%28by_highqualitydownsample_%29.md)
- [imageByCroppingToRect:](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [imageByApplyingOrientation:](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [imageByClampingToExtent](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [imageByClampingToRect:](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [imageByConvertingWorkingSpaceToLab](convertingworkingspacetolab%28%29.md)
- [imageByConvertingLabToWorkingSpace](convertinglabtoworkingspace%28%29.md)
- [imageByColorMatchingColorSpaceToWorkingSpace:](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [imageByColorMatchingWorkingSpaceToColorSpace:](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [imageByPremultiplyingAlpha](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [imageByUnpremultiplyingAlpha](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [imageBySettingAlphaOneInExtent:](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

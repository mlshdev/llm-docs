> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/clamped(to:)](https://developer.apple.com/documentation/coreimage/ciimage/clamped(to:))

# clamped(to:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.

## Declaration

```swift
func clamped(to rect: CGRect) -> CIImage
```

## Parameters

- `rect`: The rectangle, in image coordinates, to which to crop the image.

<a id="return-value"></a>

## Return Value

An image object representing the result of the clamp operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to cropping the image (with the [cropped(to:)](cropped%28to_%29.md) method or the [CICrop](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CICrop) filter), then using the [clampedToExtent()](clampedtoextent%28%29.md) method (or the [CIAffineClamp](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAffineClamp) filter), which creates an image of infinite extent by repeating pixel colors from the edges of the cropped image.

## See Also

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:parameters:)](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [applyingFilter(\_:)](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](transformed%28by_highqualitydownsample_%29.md)
- [cropped(to:)](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [oriented(forExifOrientation:)](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [clampedToExtent()](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [composited(over:)](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [convertingWorkingSpaceToLab()](convertingworkingspacetolab%28%29.md)
- [convertingLabToWorkingSpace()](convertinglabtoworkingspace%28%29.md)
- [matchedToWorkingSpace(from:)](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [matchedFromWorkingSpace(to:)](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [premultiplyingAlpha()](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [unpremultiplyingAlpha()](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [settingAlphaOne(in:)](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

# imageByClampingToRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.

## Declaration

```objectivec
- (CIImage *) imageByClampingToRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle, in image coordinates, to which to crop the image.

<a id="return-value"></a>

## Return Value

An image object representing the result of the clamp operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to cropping the image (with the [imageByCroppingToRect:](cropped%28to_%29.md) method or the [CICrop](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CICrop) filter), then using the [imageByClampingToExtent](clampedtoextent%28%29.md) method (or the [CIAffineClamp](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAffineClamp) filter), which creates an image of infinite extent by repeating pixel colors from the edges of the cropped image.

## See Also

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:withInputParameters:](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [imageByApplyingFilter:](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](transformed%28by_highqualitydownsample_%29.md)
- [imageByCroppingToRect:](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [imageByApplyingOrientation:](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [imageByClampingToExtent](clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [imageByCompositingOverImage:](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [imageByConvertingWorkingSpaceToLab](convertingworkingspacetolab%28%29.md)
- [imageByConvertingLabToWorkingSpace](convertinglabtoworkingspace%28%29.md)
- [imageByColorMatchingColorSpaceToWorkingSpace:](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [imageByColorMatchingWorkingSpaceToColorSpace:](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [imageByPremultiplyingAlpha](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [imageByUnpremultiplyingAlpha](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [imageBySettingAlphaOneInExtent:](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/clampedtoextent()](https://developer.apple.com/documentation/coreimage/ciimage/clampedtoextent())

# clampedToExtent() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.

## Declaration

```swift
func clampedToExtent() -> CIImage
```

<a id="return-value"></a>

## Return Value

An image object representing the result of the clamp operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [CIAffineClamp](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAffineClamp) filter, which creates an image of infinite extent by repeating pixel colors from the edges of the original image.

This operation can be useful when using the image as input to other filters. When an image has finite extent, Core Image treats the area outside the extent as if it were filled with empty (black, zero alpha) pixels. If you apply a filter that samples from outside the image’s extent, those empty pixels affect the result of the filter.

For example, applying the `CIGaussianBlur` filter to an image softens the edges of the blurred image, because the opaque pixels at the edges of the image blur into the transparent pixels outside the image’s extent. Applying a clamp effect before the blur filter avoids edge softening by making the original image opaque in all directions. (However, the blurred image will also have infinite extent. Use the [cropped(to:)](cropped%28to_%29.md) method to return to the original image’s dimensions while retaining hard edges.)

## See Also

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:parameters:)](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [applyingFilter(\_:)](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](transformed%28by_highqualitydownsample_%29.md)
- [cropped(to:)](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [oriented(forExifOrientation:)](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [clamped(to:)](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [composited(over:)](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [convertingWorkingSpaceToLab()](convertingworkingspacetolab%28%29.md)
- [convertingLabToWorkingSpace()](convertinglabtoworkingspace%28%29.md)
- [matchedToWorkingSpace(from:)](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [matchedFromWorkingSpace(to:)](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [premultiplyingAlpha()](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [unpremultiplyingAlpha()](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [settingAlphaOne(in:)](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

# imageByClampingToExtent (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.

## Declaration

```objectivec
- (CIImage *) imageByClampingToExtent;
```

<a id="return-value"></a>

## Return Value

An image object representing the result of the clamp operation.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [CIAffineClamp](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAffineClamp) filter, which creates an image of infinite extent by repeating pixel colors from the edges of the original image.

This operation can be useful when using the image as input to other filters. When an image has finite extent, Core Image treats the area outside the extent as if it were filled with empty (black, zero alpha) pixels. If you apply a filter that samples from outside the image’s extent, those empty pixels affect the result of the filter.

For example, applying the `CIGaussianBlur` filter to an image softens the edges of the blurred image, because the opaque pixels at the edges of the image blur into the transparent pixels outside the image’s extent. Applying a clamp effect before the blur filter avoids edge softening by making the original image opaque in all directions. (However, the blurred image will also have infinite extent. Use the [imageByCroppingToRect:](cropped%28to_%29.md) method to return to the original image’s dimensions while retaining hard edges.)

## See Also

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:withInputParameters:](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [imageByApplyingFilter:](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](transformed%28by_highqualitydownsample_%29.md)
- [imageByCroppingToRect:](cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [imageByApplyingOrientation:](oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [imageByClampingToRect:](clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [imageByCompositingOverImage:](composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [imageByConvertingWorkingSpaceToLab](convertingworkingspacetolab%28%29.md)
- [imageByConvertingLabToWorkingSpace](convertinglabtoworkingspace%28%29.md)
- [imageByColorMatchingColorSpaceToWorkingSpace:](matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [imageByColorMatchingWorkingSpaceToColorSpace:](matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [imageByPremultiplyingAlpha](premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [imageByUnpremultiplyingAlpha](unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [imageBySettingAlphaOneInExtent:](settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.

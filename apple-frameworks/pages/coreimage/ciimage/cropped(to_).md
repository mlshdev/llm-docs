> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/cropped(to:)](https://developer.apple.com/documentation/coreimage/ciimage/cropped(to:))

# cropped(to:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a new image with a cropped portion of the original image.

## Declaration

```swift
func cropped(to rect: CGRect) -> CIImage
```

## Parameters

- `rect`: The rectangle, in image coordinates, to which to crop the image.

<a id="return-value"></a>

## Return Value

An image object cropped to the specified rectangle.

<a id="discussion"></a>

## Discussion

![Butterfly photo with background cropped out](https://developer.apple.com/images/com.apple.coreimage/media-2951307@2x.png)

<a id="Discussion"></a>

## Discussion

Due to Core Image’s coordinate system mismatch with [UIKit](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewIniOS/Articles/iOS5.html#//apple_ref/doc/uid/TP30915195-SW41), this filtering approach may yield unexpected results when displayed in a [UIImageView](../../uikit/uiimageview.md) with [contentMode](../../uikit/uiview/contentmode-swift.property.md). Be sure to back it with a [cgImage](cgimage.md) so that it handles [contentMode](../../uikit/uiview/contentmode-swift.property.md) properly.

```swift
CIContext* context = [CIContext context];
CGImageRef cgCroppedImage = [context createCGImage:ciCroppedImage fromRect:ciCroppedImage.extent];
UIImage* croppedImage = [UIImage imageWithCGImage:cgCroppedImage];
CGImageRelease(cgCroppedImage);
```

If you are displaying or processing your image primarily as a [CGImage](../../coregraphics/cgimage.md) or [UIImage](../../uikit/uiimage.md), with no additional Core Image application, consider cropping in Core Graphics using the [cropping(to:)](../../coregraphics/cgimage/cropping%28to_%29.md) function to save processing overhead from conversion of images to [CIImage](../ciimage.md).  It makes most sense to use [cropped(to:)](cropped%28to_%29.md) when you already have [CIImage](../ciimage.md) in your pipeline.

## See Also

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:parameters:)](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [applyingFilter(\_:)](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](transformed%28by_highqualitydownsample_%29.md)
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

# imageByCroppingToRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a new image with a cropped portion of the original image.

## Declaration

```objectivec
- (CIImage *) imageByCroppingToRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle, in image coordinates, to which to crop the image.

<a id="return-value"></a>

## Return Value

An image object cropped to the specified rectangle.

<a id="discussion"></a>

## Discussion

![Butterfly photo with background cropped out](https://developer.apple.com/images/com.apple.coreimage/media-2951307@2x.png)

<a id="Discussion"></a>

## Discussion

Due to Core Image’s coordinate system mismatch with [UIKit](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewIniOS/Articles/iOS5.html#//apple_ref/doc/uid/TP30915195-SW41), this filtering approach may yield unexpected results when displayed in a [UIImageView](../../uikit/uiimageview.md) with [contentMode](../../uikit/uiview/contentmode-swift.property.md). Be sure to back it with a [CGImage](cgimage.md) so that it handles [contentMode](../../uikit/uiview/contentmode-swift.property.md) properly.

```swift
CIContext* context = [CIContext context];
CGImageRef cgCroppedImage = [context createCGImage:ciCroppedImage fromRect:ciCroppedImage.extent];
UIImage* croppedImage = [UIImage imageWithCGImage:cgCroppedImage];
CGImageRelease(cgCroppedImage);
```

If you are displaying or processing your image primarily as a [CGImageRef](../../coregraphics/cgimage.md) or [UIImage](../../uikit/uiimage.md), with no additional Core Image application, consider cropping in Core Graphics using the [CGImageCreateWithImageInRect](../../coregraphics/cgimage/cropping%28to_%29.md) function to save processing overhead from conversion of images to [CIImage](../ciimage.md).  It makes most sense to use [imageByCroppingToRect:](cropped%28to_%29.md) when you already have [CIImage](../ciimage.md) in your pipeline.

## See Also

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:withInputParameters:](applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [imageByApplyingFilter:](applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](transformed%28by_highqualitydownsample_%29.md)
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

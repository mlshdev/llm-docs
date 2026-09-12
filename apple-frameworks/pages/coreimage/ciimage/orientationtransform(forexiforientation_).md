> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/orientationtransform(forexiforientation:)](https://developer.apple.com/documentation/coreimage/ciimage/orientationtransform(forexiforientation:))

# orientationTransform(forExifOrientation:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns the transformation needed to reorient the image to the specified orientation.

## Declaration

```swift
func orientationTransform(forExifOrientation orientation: Int32) -> CGAffineTransform
```

## Parameters

- `orientation`: An integer specifying an image orientation according to the EXIF specification. For details, see [kCGImagePropertyOrientation](../../imageio/kcgimagepropertyorientation.md).

<a id="return-value"></a>

## Return Value

An affine transform that will rotate or mirror the image to match the specified orientation when applied.

<a id="Discussion"></a>

## Discussion

This method determines the transformation needed to match the specified orientation, but does not apply that transformation to the image. To apply the transformation (possibly after concatenating it with other transformations), use the [transformed(by:)](transformed%28by_%29.md) method or the `CIAffineTransform` filter. To determine and apply the transformation in a single step, use the [oriented(forExifOrientation:)](oriented%28forexiforientation_%29.md) method.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.

# imageTransformForOrientation: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns the transformation needed to reorient the image to the specified orientation.

## Declaration

```objectivec
- (CGAffineTransform) imageTransformForOrientation:(int) orientation;
```

## Parameters

- `orientation`: An integer specifying an image orientation according to the EXIF specification. For details, see [kCGImagePropertyOrientation](../../imageio/kcgimagepropertyorientation.md).

<a id="return-value"></a>

## Return Value

An affine transform that will rotate or mirror the image to match the specified orientation when applied.

<a id="Discussion"></a>

## Discussion

This method determines the transformation needed to match the specified orientation, but does not apply that transformation to the image. To apply the transformation (possibly after concatenating it with other transformations), use the [imageByApplyingTransform:](transformed%28by_%29.md) method or the `CIAffineTransform` filter. To determine and apply the transformation in a single step, use the [imageByApplyingOrientation:](oriented%28forexiforientation_%29.md) method.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.

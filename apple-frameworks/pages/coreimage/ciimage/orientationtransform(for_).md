> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/orientationtransform(for:)](https://developer.apple.com/documentation/coreimage/ciimage/orientationtransform(for:))

# orientationTransform(for:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The affine transform for changing the image to the given orientation.

## Declaration

```swift
func orientationTransform(for orientation: CGImagePropertyOrientation) -> CGAffineTransform
```

<a id="Discussion"></a>

## Discussion

Returns a [CGAffineTransform](../../corefoundation/cgaffinetransform.md) for the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) value to apply to the image.

## See Also

### Working with Orientation

- [oriented(\_:)](oriented%28__%29.md): Transforms the original image by a given orientation.

# imageTransformForCGOrientation: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The affine transform for changing the image to the given orientation.

## Declaration

```objectivec
- (CGAffineTransform) imageTransformForCGOrientation:(CGImagePropertyOrientation) orientation;
```

<a id="Discussion"></a>

## Discussion

Returns a [CGAffineTransform](../../corefoundation/cgaffinetransform.md) for the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) value to apply to the image.

## See Also

### Working with Orientation

- [imageByApplyingCGOrientation:](oriented%28__%29.md): Transforms the original image by a given orientation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/oriented(_:)](https://developer.apple.com/documentation/coreimage/ciimage/oriented(_:))

# oriented(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Transforms the original image by a given orientation.

## Declaration

```swift
func oriented(_ orientation: CGImagePropertyOrientation) -> CIImage
```

<a id="Discussion"></a>

## Discussion

Returns a new image representing the original image transformed for the given [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md).

## See Also

### Working with Orientation

- [orientationTransform(for:)](orientationtransform%28for_%29.md): The affine transform for changing the image to the given orientation.

# imageByApplyingCGOrientation: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Transforms the original image by a given orientation.

## Declaration

```objectivec
- (CIImage *) imageByApplyingCGOrientation:(CGImagePropertyOrientation) orientation;
```

<a id="Discussion"></a>

## Discussion

Returns a new image representing the original image transformed for the given [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md).

## See Also

### Working with Orientation

- [imageTransformForCGOrientation:](orientationtransform%28for_%29.md): The affine transform for changing the image to the given orientation.

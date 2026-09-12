> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imagerestrictedtostandarddynamicrange()](https://developer.apple.com/documentation/uikit/uiimage/imagerestrictedtostandarddynamicrange())

# imageRestrictedToStandardDynamicRange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new image that will render within the standard range.

## Declaration

```swift
func imageRestrictedToStandardDynamicRange() -> UIImage
```

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [heicData()](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImage.DynamicRange](dynamicrange.md)

# imageRestrictedToStandardDynamicRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new image that will render within the standard range.

## Declaration

```objectivec
- (UIImage *) imageRestrictedToStandardDynamicRange;
```

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [UIImageHEICRepresentation](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImageDynamicRange](dynamicrange.md)

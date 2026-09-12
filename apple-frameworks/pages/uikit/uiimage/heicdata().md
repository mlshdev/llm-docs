> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/heicdata()](https://developer.apple.com/documentation/uikit/uiimage/heicdata())

# heicData() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.

## Declaration

```swift
func heicData() -> Data?
```

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange()](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [UIImage.DynamicRange](dynamicrange.md)

# UIImageHEICRepresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.

## Declaration

```objectivec
extern NSData *UIImageHEICRepresentation(UIImage *image);
```

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [UIImageDynamicRange](dynamicrange.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/ishighdynamicrange](https://developer.apple.com/documentation/uikit/uiimage/ishighdynamicrange)

# isHighDynamicRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Indicates that this image is tagged for display of high dynamic range content.

## Declaration

```swift
var isHighDynamicRange: Bool { get }
```

## See Also

### Specifying the dynamic range

- [imageRestrictedToStandardDynamicRange()](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [heicData()](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImage.DynamicRange](dynamicrange.md)

# isHighDynamicRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Indicates that this image is tagged for display of high dynamic range content.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isHighDynamicRange;
```

## See Also

### Specifying the dynamic range

- [imageRestrictedToStandardDynamicRange](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [UIImageHEICRepresentation](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImageDynamicRange](dynamicrange.md)

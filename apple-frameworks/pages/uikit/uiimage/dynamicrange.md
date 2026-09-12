> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/dynamicrange](https://developer.apple.com/documentation/uikit/uiimage/dynamicrange)

# UIImage.DynamicRange (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
enum DynamicRange
```

## Topics

### Enumeration Cases

- [UIImage.DynamicRange.constrainedHigh](dynamicrange/constrainedhigh.md): Allow image content to use some extended range. This is appropriate for mixing content with standard and high dynamic ranges.
- [UIImage.DynamicRange.high](dynamicrange/high.md): Allow image content to use unrestricted extended range.
- [UIImage.DynamicRange.standard](dynamicrange/standard.md): Restrict the image content dynamic range to the standard range.
- [UIImage.DynamicRange.unspecified](dynamicrange/unspecified.md): Do not specify a preferred dynamic range.

### Initializers

- [init(rawValue:)](dynamicrange/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange()](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [heicData()](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.

# UIImageDynamicRange (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
enum UIImageDynamicRange : NSInteger;
```

## Topics

### Enumeration Cases

- [UIImageDynamicRangeConstrainedHigh](dynamicrange/constrainedhigh.md): Allow image content to use some extended range. This is appropriate for mixing content with standard and high dynamic ranges.
- [UIImageDynamicRangeHigh](dynamicrange/high.md): Allow image content to use unrestricted extended range.
- [UIImageDynamicRangeStandard](dynamicrange/standard.md): Restrict the image content dynamic range to the standard range.
- [UIImageDynamicRangeUnspecified](dynamicrange/unspecified.md): Do not specify a preferred dynamic range.

## See Also

### Specifying the dynamic range

- [isHighDynamicRange](ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange](imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [UIImageHEICRepresentation](heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.

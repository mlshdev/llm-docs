> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrange](https://developer.apple.com/documentation/uikit/uifloatrange)

# UIFloatRange (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The range of motion for attached objects.

## Declaration

```swift
struct UIFloatRange
```

## Topics

### Creating a float range

- [init()](uifloatrange/init%28%29.md)
- [init(minimum:maximum:)](uifloatrange/init%28minimum_maximum_%29-8dzgq.md): Returns a new float range structure from the given components.
- [infinite](uifloatrange/infinite.md): A range whose range is minus infinity to infinity.
- [zero](uifloatrange/zero.md): A range whose minimum and maximum are both `0.0`.

### Getting the range values

- [maximum](uifloatrange/maximum.md): The maximum range of motion for sliding and pin attachments.
- [minimum](uifloatrange/minimum.md): The minimum range of motion for sliding and pin attachments.

### Testing the range values

- [isInfinite](uifloatrange/isinfinite.md): Returns a Boolean indicating whether the specified float range is infinitely large.
- [UIFloatRangeIsEqualToRange(\_:\_:)](uifloatrangeisequaltorange%28____%29.md): Deprecated. Returns a Boolean indicating whether two float ranges are equivalent.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIAttachmentBehavior.AttachmentType](uiattachmentbehavior/attachmenttype.md): Constants indicating the type of the attachment behavior object.
- [Float range constants](float-range-constants.md): Constants for specifying standard ranges.
- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.

# UIFloatRange (Objective-C)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The range of motion for attached objects.

## Declaration

```objectivec
typedef struct { ... } UIFloatRange;
```

## Topics

### Creating a float range

- [UIFloatRangeMake](uifloatrange/init%28minimum_maximum_%29-1vgoo.md): Returns a new float range structure from the given components.
- [UIFloatRangeInfinite](uifloatrange/infinite.md): A range whose range is minus infinity to infinity.
- [UIFloatRangeZero](uifloatrange/zero.md): A range whose minimum and maximum are both `0.0`.

### Getting the range values

- [maximum](uifloatrange/maximum.md): The maximum range of motion for sliding and pin attachments.
- [minimum](uifloatrange/minimum.md): The minimum range of motion for sliding and pin attachments.

### Testing the range values

- [UIFloatRangeIsInfinite](uifloatrange/isinfinite.md): Returns a Boolean indicating whether the specified float range is infinitely large.
- [UIFloatRangeIsEqualToRange](uifloatrangeisequaltorange.md): Returns a Boolean indicating whether two float ranges are equivalent.

## See Also

### Constants

- [UIAttachmentBehaviorType](uiattachmentbehavior/attachmenttype.md): Constants indicating the type of the attachment behavior object.
- [Float range constants](float-range-constants.md): Constants for specifying standard ranges.
- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrolltype](https://developer.apple.com/documentation/uikit/uiscrolltype)

# UIScrollType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Constants that define the type of the scroll.

## Declaration

```swift
enum UIScrollType
```

## Topics

### Constants

- [UIScrollType.discrete](uiscrolltype/discrete.md): A discrete scroll type that originates from a device like a mouse with a scroll wheel.
- [UIScrollType.continuous](uiscrolltype/continuous.md): A continuous scroll type that originates from a device like a trackpad.

### Initializers

- [init(rawValue:)](uiscrolltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollTypeMask](uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.

# UIScrollType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Constants that define the type of the scroll.

## Declaration

```objectivec
enum UIScrollType : NSUInteger;
```

## Topics

### Constants

- [UIScrollTypeDiscrete](uiscrolltype/discrete.md): A discrete scroll type that originates from a device like a mouse with a scroll wheel.
- [UIScrollTypeContinuous](uiscrolltype/continuous.md): A continuous scroll type that originates from a device like a trackpad.

## See Also

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollTypeMask](uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.

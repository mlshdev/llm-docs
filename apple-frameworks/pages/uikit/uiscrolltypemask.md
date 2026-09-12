> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrolltypemask](https://developer.apple.com/documentation/uikit/uiscrolltypemask)

# UIScrollTypeMask (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A bit mask identifying the scroll type of a pan gesture.

## Declaration

```swift
struct UIScrollTypeMask
```

## Topics

### Scroll types

- [all](uiscrolltypemask/all.md): A scroll type that’s either discrete or continuous.
- [continuous](uiscrolltypemask/continuous.md): A continuous scroll type from a device, like a trackpad.
- [discrete](uiscrolltypemask/discrete.md): A discrete scroll type from a device, like a mouse.

### Initializer

- [init(rawValue:)](uiscrolltypemask/init%28rawvalue_%29.md): Creates a new scroll type mask from the raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollType](uiscrolltype.md): Constants that define the type of the scroll.

# UIScrollTypeMask (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A bit mask identifying the scroll type of a pan gesture.

## Declaration

```objectivec
enum UIScrollTypeMask : NSInteger;
```

## Topics

### Scroll types

- [UIScrollTypeMaskAll](uiscrolltypemask/all.md): A scroll type that’s either discrete or continuous.
- [UIScrollTypeMaskContinuous](uiscrolltypemask/continuous.md): A continuous scroll type from a device, like a trackpad.
- [UIScrollTypeMaskDiscrete](uiscrolltypemask/discrete.md): A discrete scroll type from a device, like a mouse.

## See Also

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollType](uiscrolltype.md): Constants that define the type of the scroll.

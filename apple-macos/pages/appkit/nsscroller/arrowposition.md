> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/arrowposition](https://developer.apple.com/documentation/appkit/nsscroller/arrowposition)

# NSScroller.ArrowPosition (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.

> Scroller arrows are not used anymore.

## Declaration

```swift
enum ArrowPosition
```

## Topics

### Constants

- [NSScroller.ArrowPosition.scrollerArrowsMaxEnd](arrowposition/scrollerarrowsmaxend.md): Deprecated. Buttons at bottom or right. This constant has been deprecated.
- [NSScroller.ArrowPosition.scrollerArrowsMinEnd](arrowposition/scrollerarrowsminend.md): Deprecated. Buttons at top or left. This has been deprecated.
- [scrollerArrowsDefaultSetting](arrowposition/scrollerarrowsdefaultsetting.md): Deprecated. Buttons are displayed according to the system-wide appearance preferences.
- [NSScroller.ArrowPosition.scrollerArrowsNone](arrowposition/scrollerarrowsnone.md): Deprecated. No buttons.

### Initializers

- [init(rawValue:)](arrowposition/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSScroller.Style](style.md): Constants to specify the scroller style.
- [NSScroller.KnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScroller.Part](part.md): These constants specify the different parts of the scroller:
- [NSScroller.Arrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md).
- [NSScroller.UsableParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

# NSScrollArrowPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.

> Scroller arrows are not used anymore.

## Declaration

```objectivec
enum NSScrollArrowPosition : NSUInteger;
```

## Topics

### Constants

- [NSScrollerArrowsMaxEnd](arrowposition/scrollerarrowsmaxend.md): Deprecated. Buttons at bottom or right. This constant has been deprecated.
- [NSScrollerArrowsMinEnd](arrowposition/scrollerarrowsminend.md): Deprecated. Buttons at top or left. This has been deprecated.
- [NSScrollerArrowsDefaultSetting](arrowposition/scrollerarrowsdefaultsetting.md): Deprecated. Buttons are displayed according to the system-wide appearance preferences.
- [NSScrollerArrowsNone](arrowposition/scrollerarrowsnone.md): Deprecated. No buttons.

## See Also

### Constants

- [NSScrollerStyle](style.md): Constants to specify the scroller style.
- [NSScrollerKnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerPart](part.md): These constants specify the different parts of the scroller:
- [NSScrollerArrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow:highlight:](drawarrow%28__highlight_%29.md).
- [NSUsableScrollerParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

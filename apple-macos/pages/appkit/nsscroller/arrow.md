> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/arrow](https://developer.apple.com/documentation/appkit/nsscroller/arrow)

# NSScroller.Arrow (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

These constants describe the two scroller buttons and are used by [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md).

> Scroller arrows are not used anymore.

## Declaration

```swift
enum Arrow
```

## Topics

### Constants

- [NSScroller.Arrow.incrementArrow](arrow/incrementarrow.md): Deprecated. The down or right scroll button.
- [NSScroller.Arrow.decrementArrow](arrow/decrementarrow.md): Deprecated. The up or left scroll button.

### Initializers

- [init(rawValue:)](arrow/init%28rawvalue_%29.md): Deprecated.

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
- [NSScroller.ArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSScroller.UsableParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

# NSScrollerArrow (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

These constants describe the two scroller buttons and are used by [drawArrow:highlight:](drawarrow%28__highlight_%29.md).

> Scroller arrows are not used anymore.

## Declaration

```objectivec
enum NSScrollerArrow : NSUInteger;
```

## Topics

### Constants

- [NSScrollerIncrementArrow](arrow/incrementarrow.md): Deprecated. The down or right scroll button.
- [NSScrollerDecrementArrow](arrow/decrementarrow.md): Deprecated. The up or left scroll button.

## See Also

### Constants

- [NSScrollerStyle](style.md): Constants to specify the scroller style.
- [NSScrollerKnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerPart](part.md): These constants specify the different parts of the scroller:
- [NSScrollArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSUsableScrollerParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

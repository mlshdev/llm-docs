> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/style](https://developer.apple.com/documentation/appkit/nsscroller/style)

# NSScroller.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants to specify the scroller style.

## Declaration

```swift
enum Style
```

## Topics

### Constants

- [NSScroller.Style.legacy](style/legacy.md): Specifies legacy-style scrollers as prior to macOS 10.7.
- [NSScroller.Style.overlay](style/overlay.md): Specifies overlay-style scrollers in macOS 10.7 and later.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

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

- [NSScroller.KnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScroller.Part](part.md): These constants specify the different parts of the scroller:
- [NSScroller.Arrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md).
- [NSScroller.ArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSScroller.UsableParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

# NSScrollerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants to specify the scroller style.

## Declaration

```objectivec
enum NSScrollerStyle : NSInteger;
```

## Topics

### Constants

- [NSScrollerStyleLegacy](style/legacy.md): Specifies legacy-style scrollers as prior to macOS 10.7.
- [NSScrollerStyleOverlay](style/overlay.md): Specifies overlay-style scrollers in macOS 10.7 and later.

## See Also

### Constants

- [NSScrollerKnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerPart](part.md): These constants specify the different parts of the scroller:
- [NSScrollerArrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow:highlight:](drawarrow%28__highlight_%29.md).
- [NSScrollArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSUsableScrollerParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

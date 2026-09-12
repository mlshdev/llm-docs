> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/usableparts-swift.enum](https://developer.apple.com/documentation/appkit/nsscroller/usableparts-swift.enum)

# NSScroller.UsableParts (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify which parts of the scroller are visible.

## Declaration

```swift
enum UsableParts
```

## Topics

### Constants

- [NSScroller.UsableParts.noScrollerParts](usableparts-swift.enum/noscrollerparts.md): Deprecated. Specifies that the scroller has neither a knob nor scroll buttons, only the knob slot.
- [NSScroller.UsableParts.onlyScrollerArrows](usableparts-swift.enum/onlyscrollerarrows.md): Deprecated. Specifies that the scroller has only scroll buttons, no knob.
- [NSScroller.UsableParts.allScrollerParts](usableparts-swift.enum/allscrollerparts.md): Specifies that the scroller has at least a knob, possibly also scroll buttons.

### Initializers

- [init(rawValue:)](usableparts-swift.enum/init%28rawvalue_%29.md)

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
- [NSScroller.ArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.

# NSUsableScrollerParts (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify which parts of the scroller are visible.

## Declaration

```objectivec
enum NSUsableScrollerParts : NSUInteger;
```

## Topics

### Constants

- [NSNoScrollerParts](usableparts-swift.enum/noscrollerparts.md): Deprecated. Specifies that the scroller has neither a knob nor scroll buttons, only the knob slot.
- [NSOnlyScrollerArrows](usableparts-swift.enum/onlyscrollerarrows.md): Deprecated. Specifies that the scroller has only scroll buttons, no knob.
- [NSAllScrollerParts](usableparts-swift.enum/allscrollerparts.md): Specifies that the scroller has at least a knob, possibly also scroll buttons.

## See Also

### Constants

- [NSScrollerStyle](style.md): Constants to specify the scroller style.
- [NSScrollerKnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerPart](part.md): These constants specify the different parts of the scroller:
- [NSScrollerArrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow:highlight:](drawarrow%28__highlight_%29.md).
- [NSScrollArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.

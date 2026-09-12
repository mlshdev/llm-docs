> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/part](https://developer.apple.com/documentation/appkit/nsscroller/part)

# NSScroller.Part (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the different parts of the scroller:

## Declaration

```swift
enum Part
```

## Topics

### Constants

- [NSScroller.Part.knob](part/knob.md): Directly to the scroller’s value, as given by [floatValue](../nscontrol/floatvalue.md).
- [NSScroller.Part.knobSlot](part/knobslot.md): Directly to the scroller’s value, as given by [floatValue](../nscontrol/floatvalue.md).
- [NSScroller.Part.decrementLine](part/decrementline.md): Deprecated. Up or left by a small amount.
- [NSScroller.Part.decrementPage](part/decrementpage.md): Up or left by a large amount.
- [NSScroller.Part.incrementLine](part/incrementline.md): Deprecated. Down or right by a small amount.
- [NSScroller.Part.incrementPage](part/incrementpage.md): Down or right by a large amount.
- [NSScroller.Part.noPart](part/nopart.md): Don’t scroll at all.

### Initializers

- [init(rawValue:)](part/init%28rawvalue_%29.md)

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
- [NSScroller.Arrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md).
- [NSScroller.ArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSScroller.UsableParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

# NSScrollerPart (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the different parts of the scroller:

## Declaration

```objectivec
enum NSScrollerPart : NSUInteger;
```

## Topics

### Constants

- [NSScrollerKnob](part/knob.md): Directly to the scroller’s value, as given by [floatValue](../nscontrol/floatvalue.md).
- [NSScrollerKnobSlot](part/knobslot.md): Directly to the scroller’s value, as given by [floatValue](../nscontrol/floatvalue.md).
- [NSScrollerDecrementLine](part/decrementline.md): Deprecated. Up or left by a small amount.
- [NSScrollerDecrementPage](part/decrementpage.md): Up or left by a large amount.
- [NSScrollerIncrementLine](part/incrementline.md): Deprecated. Down or right by a small amount.
- [NSScrollerIncrementPage](part/incrementpage.md): Down or right by a large amount.
- [NSScrollerNoPart](part/nopart.md): Don’t scroll at all.

## See Also

### Constants

- [NSScrollerStyle](style.md): Constants to specify the scroller style.
- [NSScrollerKnobStyle](knobstyle-swift.enum.md): Specify different knob styles.
- [NSScrollerArrow](arrow.md): Deprecated. These constants describe the two scroller buttons and are used by [drawArrow:highlight:](drawarrow%28__highlight_%29.md).
- [NSScrollArrowPosition](arrowposition.md): Deprecated. These constants specify where the scroller’s buttons appear and are used by the [arrowsPosition](arrowsposition.md) property.
- [NSUsableScrollerParts](usableparts-swift.enum.md): These constants specify which parts of the scroller are visible.

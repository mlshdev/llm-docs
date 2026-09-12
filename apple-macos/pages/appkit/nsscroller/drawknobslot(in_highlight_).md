> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/drawknobslot(in:highlight:)](https://developer.apple.com/documentation/appkit/nsscroller/drawknobslot(in:highlight:))

# drawKnobSlot(in:highlight:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.

## Declaration

```swift
func drawKnobSlot(in slotRect: NSRect, highlight flag: Bool)
```

## Parameters

- `slotRect`: The rectangle in which to draw the knob slot.
- `flag`: If `flag` is [true](https://developer.apple.com/documentation/swift/true), any scroll arrow button that falls within `slotRect` is drawn highlighted; otherwise it’s drawn normally.

<a id="Discussion"></a>

## Discussion

Only one arrow button will be shown highlighted at a time, so you can expect this method to sometimes be invoked with a `slotRect` that encompasses only one arrow.

## See Also

### Drawing Scroller Parts

- [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnob()](drawknob%28%29.md): Draws the knob.
- [highlight(\_:)](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

# drawKnobSlotInRect:highlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.

## Declaration

```objectivec
- (void) drawKnobSlotInRect:(NSRect) slotRect highlight:(BOOL) flag;
```

## Parameters

- `slotRect`: The rectangle in which to draw the knob slot.
- `flag`: If `flag` is [true](https://developer.apple.com/documentation/swift/true), any scroll arrow button that falls within `slotRect` is drawn highlighted; otherwise it’s drawn normally.

<a id="Discussion"></a>

## Discussion

Only one arrow button will be shown highlighted at a time, so you can expect this method to sometimes be invoked with a `slotRect` that encompasses only one arrow.

## See Also

### Drawing Scroller Parts

- [drawArrow:highlight:](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnob](drawknob%28%29.md): Draws the knob.
- [drawParts](drawparts.md): Deprecated. Caches images for the scroll buttons and knob.
- [highlight:](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

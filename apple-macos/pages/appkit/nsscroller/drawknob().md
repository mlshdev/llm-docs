> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/drawknob()](https://developer.apple.com/documentation/appkit/nsscroller/drawknob())

# drawKnob() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the knob.

## Declaration

```swift
func drawKnob()
```

<a id="Discussion"></a>

## Discussion

You should never need to invoke this method directly, but may wish to override it to customize the appearance of the knob.

## See Also

### Related Documentation

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlot(in:highlight:)](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [highlight(\_:)](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

# drawKnob (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the knob.

## Declaration

```objectivec
- (void) drawKnob;
```

<a id="Discussion"></a>

## Discussion

You should never need to invoke this method directly, but may wish to override it to customize the appearance of the knob.

## See Also

### Related Documentation

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawArrow:highlight:](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlotInRect:highlight:](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawParts](drawparts.md): Deprecated. Caches images for the scroll buttons and knob.
- [highlight:](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

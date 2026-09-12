> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/drawparts](https://developer.apple.com/documentation/appkit/nsscroller/drawparts)

# drawParts

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Caches images for the scroll buttons and knob.

## Declaration

```objectivec
- (void) drawParts;
```

<a id="Discussion"></a>

## Discussion

It’s invoked only once when the scroller is created. You may want to override this method if you alter the look of the scroller, but you should never invoke it directly.

## See Also

### Drawing Scroller Parts

- [drawArrow:highlight:](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlotInRect:highlight:](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob](drawknob%28%29.md): Draws the knob.
- [highlight:](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

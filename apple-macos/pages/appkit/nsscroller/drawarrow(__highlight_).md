> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/drawarrow(_:highlight:)](https://developer.apple.com/documentation/appkit/nsscroller/drawarrow(_:highlight:))

# drawArrow(\_:highlight:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).

> Scrollers don't have arrows as of 10.7

## Declaration

```swift
func drawArrow(_ whichArrow: NSScroller.Arrow, highlight flag: Bool)
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the button is drawn highlighted; otherwise it’s drawn normally. You should never need to invoke this method directly, but may wish to override it to customize the appearance of scroll buttons.

> **Note**

>  The [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md) method is not invoked in macOS 10.7 and later.

## See Also

### Related Documentation

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawKnobSlot(in:highlight:)](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob()](drawknob%28%29.md): Draws the knob.
- [highlight(\_:)](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

# drawArrow:highlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).

> Scrollers don't have arrows as of 10.7

## Declaration

```objectivec
- (void) drawArrow:(NSScrollerArrow) whichArrow highlight:(BOOL) flag;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the button is drawn highlighted; otherwise it’s drawn normally. You should never need to invoke this method directly, but may wish to override it to customize the appearance of scroll buttons.

> **Note**

>  The [drawArrow:highlight:](drawarrow%28__highlight_%29.md) method is not invoked in macOS 10.7 and later.

## See Also

### Related Documentation

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawKnobSlotInRect:highlight:](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob](drawknob%28%29.md): Draws the knob.
- [drawParts](drawparts.md): Deprecated. Caches images for the scroll buttons and knob.
- [highlight:](highlight%28__%29.md): Deprecated. Highlights or unhighlights the scroll button the user clicked.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/highlight(_:)](https://developer.apple.com/documentation/appkit/nsscroller/highlight(_:))

# highlight(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Highlights or unhighlights the scroll button the user clicked.

> Has had no effect since 10.7

## Declaration

```swift
func highlight(_ flag: Bool)
```

<a id="Discussion"></a>

## Discussion

The receiver invokes this method while tracking the mouse; you should not invoke it directly. If `flag` is [true](https://developer.apple.com/documentation/swift/true), the appropriate part is drawn highlighted; otherwise it’s drawn normally.

<a id="Special-Considerations"></a>

### Special Considerations

This method has no effect in macOS 10.7 and later.

## See Also

### Related Documentation

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawArrow(\_:highlight:)](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlot(in:highlight:)](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob()](drawknob%28%29.md): Draws the knob.

# highlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Highlights or unhighlights the scroll button the user clicked.

> Has had no effect since 10.7

## Declaration

```objectivec
- (void) highlight:(BOOL) flag;
```

<a id="Discussion"></a>

## Discussion

The receiver invokes this method while tracking the mouse; you should not invoke it directly. If `flag` is [true](https://developer.apple.com/documentation/swift/true), the appropriate part is drawn highlighted; otherwise it’s drawn normally.

<a id="Special-Considerations"></a>

### Special Considerations

This method has no effect in macOS 10.7 and later.

## See Also

### Related Documentation

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.

### Drawing Scroller Parts

- [drawArrow:highlight:](drawarrow%28__highlight_%29.md): Deprecated. Draws the scroll button indicated by `arrow`, which is either `NSScrollerIncrementArrow` (the down or right scroll button) or `NSScrollerDecrementArrow` (up or left).
- [drawKnobSlotInRect:highlight:](drawknobslot%28in_highlight_%29.md): Draws the portion of the scroller’s track, possibly including the line increment and decrement arrow buttons, that falls in the given rectangle.
- [drawKnob](drawknob%28%29.md): Draws the knob.
- [drawParts](drawparts.md): Deprecated. Caches images for the scroll buttons and knob.

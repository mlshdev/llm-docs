> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/scrollerwidth](https://developer.apple.com/documentation/appkit/nsscroller/scrollerwidth)

# scrollerWidth

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](../nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](style/legacy.md).

> Use [scrollerWidthForControlSize:scrollerStyle:](scrollerwidth%28for_scrollerstyle_%29.md) instead.

## Declaration

```objectivec
+ (CGFloat) scrollerWidth;
```

<a id="Discussion"></a>

## Discussion

`NSScrollView` uses this value to lay out its components. Subclasses that use a different width should override this method.

## See Also

### Determining Scroller Size

- [scrollerWidthForControlSize:scrollerStyle:](scrollerwidth%28for_scrollerstyle_%29.md): Returns the width for scrollers of the receiving class for a given control size and scroller style.
- [scrollerWidthForControlSize:](scrollerwidthforcontrolsize_.md): Deprecated. Returns the width of the scroller based on `controlSize` and assuming a scroller style of [NSScrollerStyleLegacy](style/legacy.md).
- [controlSize](controlsize.md): The size of the scroller.

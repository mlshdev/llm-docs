> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/scrollerwidth(for:scrollerstyle:)](https://developer.apple.com/documentation/appkit/nsscroller/scrollerwidth(for:scrollerstyle:))

# scrollerWidth(for:scrollerStyle:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the width for scrollers of the receiving class for a given control size and scroller style.

## Declaration

```swift
class func scrollerWidth(for controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> CGFloat
```

## Parameters

- `controlSize`: A control size.
- `scrollerStyle`: A scroller style.

<a id="return-value"></a>

## Return Value

The width for scrollers of the receiving class for `controlSize` and `scrollerStyle`.

<a id="Discussion"></a>

## Discussion

You should use this method in preference to [scrollerWidthForControlSize:](scrollerwidthforcontrolsize_.md), which assumes a scroller style of [NSScroller.Style.legacy](style/legacy.md), and [scrollerWidth](scrollerwidth.md) which in addition assumes a control size of [NSRegularControlSize](../nsregularcontrolsize.md).

## See Also

### Determining Scroller Size

- [controlSize](controlsize.md): The size of the scroller.

# scrollerWidthForControlSize:scrollerStyle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the width for scrollers of the receiving class for a given control size and scroller style.

## Declaration

```objectivec
+ (CGFloat) scrollerWidthForControlSize:(NSControlSize) controlSize scrollerStyle:(NSScrollerStyle) scrollerStyle;
```

## Parameters

- `controlSize`: A control size.
- `scrollerStyle`: A scroller style.

<a id="return-value"></a>

## Return Value

The width for scrollers of the receiving class for `controlSize` and `scrollerStyle`.

<a id="Discussion"></a>

## Discussion

You should use this method in preference to [scrollerWidthForControlSize:](scrollerwidthforcontrolsize_.md), which assumes a scroller style of [NSScrollerStyleLegacy](style/legacy.md), and [scrollerWidth](scrollerwidth.md) which in addition assumes a control size of [NSRegularControlSize](../nsregularcontrolsize.md).

## See Also

### Determining Scroller Size

- [scrollerWidth](scrollerwidth.md): Deprecated. Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](../nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](style/legacy.md).
- [scrollerWidthForControlSize:](scrollerwidthforcontrolsize_.md): Deprecated. Returns the width of the scroller based on `controlSize` and assuming a scroller style of [NSScrollerStyleLegacy](style/legacy.md).
- [controlSize](controlsize.md): The size of the scroller.

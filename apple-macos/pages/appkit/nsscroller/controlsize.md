> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/controlsize](https://developer.apple.com/documentation/appkit/nsscroller/controlsize)

# controlSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the scroller.

## Declaration

```swift
var controlSize: NSControl.ControlSize { get set }
```

<a id="Discussion"></a>

## Discussion

Valid values for `controlSize` are described in [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md) (`NSCell`).

## See Also

### Determining Scroller Size

- [scrollerWidth(for:scrollerStyle:)](scrollerwidth%28for_scrollerstyle_%29.md): Returns the width for scrollers of the receiving class for a given control size and scroller style.

# controlSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the scroller.

## Declaration

```objectivec
@property NSControlSize controlSize;
```

<a id="Discussion"></a>

## Discussion

Valid values for `controlSize` are described in [NSControlSize](../nscontrol/controlsize-swift.enum.md) (`NSCell`).

## See Also

### Determining Scroller Size

- [scrollerWidthForControlSize:scrollerStyle:](scrollerwidth%28for_scrollerstyle_%29.md): Returns the width for scrollers of the receiving class for a given control size and scroller style.
- [scrollerWidth](scrollerwidth.md): Deprecated. Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](../nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](style/legacy.md).
- [scrollerWidthForControlSize:](scrollerwidthforcontrolsize_.md): Deprecated. Returns the width of the scroller based on `controlSize` and assuming a scroller style of [NSScrollerStyleLegacy](style/legacy.md).

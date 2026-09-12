> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthrottledescriptor/snapstobasevalue](https://developer.apple.com/documentation/touchcontroller/tcthrottledescriptor/snapstobasevalue)

# snapsToBaseValue (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the control reverts to it’s base value.

## Declaration

```swift
var snapsToBaseValue: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, the control’s value will revert to its base value when no longer pressed.

## See Also

### Inspecting the descriptor

- [backgroundContents](backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [label](label.md): The label associated with the throttle.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [orientation](orientation.md): The orientation of the throttle.
- [size](size.md): The size (width, height) of the throttle in points.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.
- [zIndex](zindex.md): The z-index of the throttle. A lower z-index is drawn first.

# snapsToBaseValue (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether the control reverts to it’s base value.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL snapsToBaseValue;
```

<a id="discussion"></a>

## Discussion

If `YES`, the control’s value will revert to its base value when no longer pressed.

## See Also

### Inspecting the descriptor

- [backgroundContents](backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [label](label.md): The label associated with the throttle.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [orientation](orientation.md): The orientation of the throttle.
- [size](size.md): The size (width, height) of the throttle in points.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.
- [zIndex](zindex.md): The z-index of the throttle. A lower z-index is drawn first.

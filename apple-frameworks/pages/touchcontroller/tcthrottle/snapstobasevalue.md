> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthrottle/snapstobasevalue](https://developer.apple.com/documentation/touchcontroller/tcthrottle/snapstobasevalue)

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

### Inspecting the throttle

- [backgroundContents](backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

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

### Inspecting the throttle

- [backgroundContents](backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

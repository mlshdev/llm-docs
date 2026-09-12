> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthrottle/backgroundcontents](https://developer.apple.com/documentation/touchcontroller/tcthrottle/backgroundcontents)

# backgroundContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the background of the throttle.

## Declaration

```swift
var backgroundContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the throttle

- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [snapsToBaseValue](snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

# backgroundContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the background of the throttle.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * backgroundContents;
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the throttle

- [baseValue](basevalue.md): The initial value of this control.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](indicatorsize.md): The size (width, height) of the indicator itself in points.
- [snapsToBaseValue](snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

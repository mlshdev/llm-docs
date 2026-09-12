> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrol/isenabled](https://developer.apple.com/documentation/touchcontroller/tccontrol/isenabled)

# isEnabled (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the control is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If disabled, it won’t respond to touches.

## See Also

### Inspecting a control

- [highlightDuration](highlightduration.md): The duration of the highlight animation.
- [label](label.md): The label associated with the control.
- [TCControlLabel](../tccontrollabel.md): A label you associate with a touch control and provides a semantic description.
- [isPressed](ispressed.md): Indicates whether the control is currently pressed.

# enabled (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether the control is enabled.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

If disabled, it won’t respond to touches.

## See Also

### Inspecting a control

- [highlightDuration](highlightduration.md): The duration of the highlight animation.
- [label](label.md): The label associated with the control.
- [TCControlLabel](../tccontrollabel.md): A label you associate with a touch control and provides a semantic description.
- [pressed](ispressed.md): Indicates whether the control is currently pressed.

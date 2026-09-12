> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.property](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.property)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The state of the control, specified as a bit mask value.

## Declaration

```swift
var state: UIControl.State { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a bitmask of the constants in the [UIControl.State](state-swift.struct.md) type. A control can be in more than one state at a time. For example, it can be focused and highlighted at the same time. You can also get the values for individual states using the properties of this class.

## See Also

### Managing state

- [UIControl.State](state-swift.struct.md): Constants describing the state of a control.
- [isEnabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [isSelected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

# state (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The state of the control, specified as a bit mask value.

## Declaration

```objectivec
@property (nonatomic, readonly) UIControlState state;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a bitmask of the constants in the [UIControlState](state-swift.struct.md) type. A control can be in more than one state at a time. For example, it can be focused and highlighted at the same time. You can also get the values for individual states using the properties of this class.

## See Also

### Managing state

- [UIControlState](state-swift.struct.md): Constants describing the state of a control.
- [enabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [selected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/isenabled](https://developer.apple.com/documentation/uikit/uicontrol/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control is in the enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to enable the control or [false](https://developer.apple.com/documentation/swift/false) to disable it. An enabled control is capable of responding to user interactions, whereas a disabled control ignores touch events and may draw itself differently. Setting this property to [false](https://developer.apple.com/documentation/swift/false) adds the [disabled](state-swift.struct/disabled.md) flag to the control’s [state](state-swift.property.md) bitmask; enabling the control again removes that flag.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true) for a newly created control. You can set a control’s initial enabled state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControl.State](state-swift.struct.md): Constants describing the state of a control.
- [isSelected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control is in the enabled state.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to enable the control or [false](https://developer.apple.com/documentation/swift/false) to disable it. An enabled control is capable of responding to user interactions, whereas a disabled control ignores touch events and may draw itself differently. Setting this property to [false](https://developer.apple.com/documentation/swift/false) adds the [UIControlStateDisabled](state-swift.struct/disabled.md) flag to the control’s [state](state-swift.property.md) bitmask; enabling the control again removes that flag.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true) for a newly created control. You can set a control’s initial enabled state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControlState](state-swift.struct.md): Constants describing the state of a control.
- [selected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/ishighlighted](https://developer.apple.com/documentation/uikit/uicontrol/ishighlighted)

# isHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control draws a highlight.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the control draws a highlight; otherwise, the control doesn’t draw a highlight. Controls automatically set and clear this state in response to appropriate touch events. You can change the value of this property as needed to apply or remove a highlight programmatically

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for a newly created control. You can set a control’s initial selected state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControl.State](state-swift.struct.md): Constants describing the state of a control.
- [isEnabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [isSelected](isselected.md): A Boolean value indicating whether the control is in the selected state.

# highlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control draws a highlight.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the control draws a highlight; otherwise, the control doesn’t draw a highlight. Controls automatically set and clear this state in response to appropriate touch events. You can change the value of this property as needed to apply or remove a highlight programmatically

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for a newly created control. You can set a control’s initial selected state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControlState](state-swift.struct.md): Constants describing the state of a control.
- [enabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [selected](isselected.md): A Boolean value indicating whether the control is in the selected state.

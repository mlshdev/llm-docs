> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/isselected](https://developer.apple.com/documentation/uikit/uicontrol/isselected)

# isSelected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control is in the selected state.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to select it or [false](https://developer.apple.com/documentation/swift/false) to deselect it. Most controls don’t modify their appearance or behavior when selected, but some do. For example, the [UISegmentedControl](../uisegmentedcontrol.md) class tracks whether a segment is selected and draws it differently when it is.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for a newly created control. You can set a control’s initial selected state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControl.State](state-swift.struct.md): Constants describing the state of a control.
- [isEnabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

# selected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the control is in the selected state.

## Declaration

```objectivec
@property (nonatomic, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to select it or [false](https://developer.apple.com/documentation/swift/false) to deselect it. Most controls don’t modify their appearance or behavior when selected, but some do. For example, the [UISegmentedControl](../uisegmentedcontrol.md) class tracks whether a segment is selected and draws it differently when it is.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for a newly created control. You can set a control’s initial selected state in your storyboard file.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [UIControlState](state-swift.struct.md): Constants describing the state of a control.
- [enabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

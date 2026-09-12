> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.struct/selected](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.struct/selected)

# selected (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The selected state of a control.

## Declaration

```swift
static var selected: UIControl.State { get }
```

<a id="Discussion"></a>

## Discussion

For many controls, this state has no effect on behavior or appearance. Some subclasses, like the [UISegmentedControl](../../uisegmentedcontrol.md) class, use this state to change their appearance. You can retrieve and set this value through the [isSelected](../isselected.md) property.

## See Also

### Constants

- [normal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [highlighted](highlighted.md): The highlighted state of a control.
- [disabled](disabled.md): The disabled state of a control.
- [focused](focused.md): The focused state of a control.
- [application](application.md): Additional control-state flags available for app use.
- [reserved](reserved.md): Control-state flags reserved for internal framework use.

# UIControlStateSelected (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The selected state of a control.

## Declaration

```objectivec
UIControlStateSelected
```

<a id="Discussion"></a>

## Discussion

For many controls, this state has no effect on behavior or appearance. Some subclasses, like the [UISegmentedControl](../../uisegmentedcontrol.md) class, use this state to change their appearance. You can retrieve and set this value through the [selected](../isselected.md) property.

## See Also

### Constants

- [UIControlStateNormal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [UIControlStateHighlighted](highlighted.md): The highlighted state of a control.
- [UIControlStateDisabled](disabled.md): The disabled state of a control.
- [UIControlStateFocused](focused.md): The focused state of a control.
- [UIControlStateApplication](application.md): Additional control-state flags available for app use.
- [UIControlStateReserved](reserved.md): Control-state flags reserved for internal framework use.

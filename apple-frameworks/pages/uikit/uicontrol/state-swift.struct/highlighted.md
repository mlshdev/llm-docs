> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.struct/highlighted](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.struct/highlighted)

# highlighted (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The highlighted state of a control.

## Declaration

```swift
static var highlighted: UIControl.State { get }
```

<a id="Discussion"></a>

## Discussion

A control becomes highlighted when a touch event enters the control’s bounds, and it loses that highlight when there’s a touch-up event or when the touch event exits the control’s bounds. You can retrieve and set this value through the [isHighlighted](../ishighlighted.md) property.

## See Also

### Constants

- [normal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [disabled](disabled.md): The disabled state of a control.
- [selected](selected.md): The selected state of a control.
- [focused](focused.md): The focused state of a control.
- [application](application.md): Additional control-state flags available for app use.
- [reserved](reserved.md): Control-state flags reserved for internal framework use.

# UIControlStateHighlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The highlighted state of a control.

## Declaration

```objectivec
UIControlStateHighlighted
```

<a id="Discussion"></a>

## Discussion

A control becomes highlighted when a touch event enters the control’s bounds, and it loses that highlight when there’s a touch-up event or when the touch event exits the control’s bounds. You can retrieve and set this value through the [highlighted](../ishighlighted.md) property.

## See Also

### Constants

- [UIControlStateNormal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [UIControlStateDisabled](disabled.md): The disabled state of a control.
- [UIControlStateSelected](selected.md): The selected state of a control.
- [UIControlStateFocused](focused.md): The focused state of a control.
- [UIControlStateApplication](application.md): Additional control-state flags available for app use.
- [UIControlStateReserved](reserved.md): Control-state flags reserved for internal framework use.

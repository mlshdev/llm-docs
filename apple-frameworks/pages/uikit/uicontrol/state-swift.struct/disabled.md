> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.struct/disabled](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.struct/disabled)

# disabled (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The disabled state of a control.

## Declaration

```swift
static var disabled: UIControl.State { get }
```

<a id="Discussion"></a>

## Discussion

User interactions with disabled control have no effect and the control draws itself with a dimmed appearance to reflect that it’s disabled. You can retrieve and set this value through the [isEnabled](../isenabled.md) property.

## See Also

### Constants

- [normal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [highlighted](highlighted.md): The highlighted state of a control.
- [selected](selected.md): The selected state of a control.
- [focused](focused.md): The focused state of a control.
- [application](application.md): Additional control-state flags available for app use.
- [reserved](reserved.md): Control-state flags reserved for internal framework use.

# UIControlStateDisabled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The disabled state of a control.

## Declaration

```objectivec
UIControlStateDisabled
```

<a id="Discussion"></a>

## Discussion

User interactions with disabled control have no effect and the control draws itself with a dimmed appearance to reflect that it’s disabled. You can retrieve and set this value through the [enabled](../isenabled.md) property.

## See Also

### Constants

- [UIControlStateNormal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [UIControlStateHighlighted](highlighted.md): The highlighted state of a control.
- [UIControlStateSelected](selected.md): The selected state of a control.
- [UIControlStateFocused](focused.md): The focused state of a control.
- [UIControlStateApplication](application.md): Additional control-state flags available for app use.
- [UIControlStateReserved](reserved.md): Control-state flags reserved for internal framework use.

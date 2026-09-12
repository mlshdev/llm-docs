> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.struct/focused](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.struct/focused)

# focused (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The focused state of a control.

## Declaration

```swift
static var focused: UIControl.State { get }
```

<a id="Discussion"></a>

## Discussion

In focus-based navigation systems, a control enters this state when it receives the focus. A focused control changes its appearance to indicate that it has focus, and this appearance differs from the appearance of the control when it’s highlighted or selected. Further interactions with the control can result in it also becoming highlighted or selected.

## See Also

### Constants

- [normal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [highlighted](highlighted.md): The highlighted state of a control.
- [disabled](disabled.md): The disabled state of a control.
- [selected](selected.md): The selected state of a control.
- [application](application.md): Additional control-state flags available for app use.
- [reserved](reserved.md): Control-state flags reserved for internal framework use.

# UIControlStateFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The focused state of a control.

## Declaration

```objectivec
UIControlStateFocused
```

<a id="Discussion"></a>

## Discussion

In focus-based navigation systems, a control enters this state when it receives the focus. A focused control changes its appearance to indicate that it has focus, and this appearance differs from the appearance of the control when it’s highlighted or selected. Further interactions with the control can result in it also becoming highlighted or selected.

## See Also

### Constants

- [UIControlStateNormal](normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [UIControlStateHighlighted](highlighted.md): The highlighted state of a control.
- [UIControlStateDisabled](disabled.md): The disabled state of a control.
- [UIControlStateSelected](selected.md): The selected state of a control.
- [UIControlStateApplication](application.md): Additional control-state flags available for app use.
- [UIControlStateReserved](reserved.md): Control-state flags reserved for internal framework use.

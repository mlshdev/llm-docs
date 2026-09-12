> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axmenuitemmodifiers](https://developer.apple.com/documentation/applicationservices/axmenuitemmodifiers)

# AXMenuItemModifiers (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.9+

Values that indicate the keyboard shortcut modifiers for a menu item (used with the kAXMenuItemCmdModifiersAttribute attribute).

## Declaration

```swift
struct AXMenuItemModifiers
```

## Topics

### Initializers

- [init(rawValue:)](axmenuitemmodifiers/1460320-init.md)

### Type Properties

- [control](axmenuitemmodifiers/1464333-control.md)
- [noCommand](axmenuitemmodifiers/1464506-nocommand.md)
- [option](axmenuitemmodifiers/1462352-option.md)
- [shift](axmenuitemmodifiers/1461092-shift.md)

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [AXMenuItemModifiers](axmenuitemmodifiers.md): Values that indicate the keyboard shortcut modifiers for a menu item (used with the kAXMenuItemCmdModifiersAttribute attribute).

# AXMenuItemModifiers (Objective-C)

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Values that indicate the keyboard shortcut modifiers for a menu item (used with the kAXMenuItemCmdModifiersAttribute attribute).

## Declaration

```objectivec
typedef enum AXMenuItemModifiers : UInt32 {
    ...
} AXMenuItemModifiers;
```

## Topics

### Type Properties

- [kAXMenuItemModifierControl](axmenuitemmodifiers/kaxmenuitemmodifiercontrol.md)
- [kAXMenuItemModifierNoCommand](axmenuitemmodifiers/kaxmenuitemmodifiernocommand.md)
- [kAXMenuItemModifierOption](axmenuitemmodifiers/kaxmenuitemmodifieroption.md)
- [kAXMenuItemModifierShift](axmenuitemmodifiers/kaxmenuitemmodifiershift.md)
- [kAXMenuItemModifierNone](axmenuitemmodifiers/kaxmenuitemmodifiernone.md)

## See Also

### Related Documentation

- [AXMenuItemModifiers](axmenuitemmodifiers.md): Values that indicate the keyboard shortcut modifiers for a menu item (used with the kAXMenuItemCmdModifiersAttribute attribute).

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldaction](https://developer.apple.com/documentation/managedsettings/shieldaction)

# ShieldAction

**Framework:** Managed Settings  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constants that describe a user’s action for your extension to handle.

## Declaration

```swift
enum ShieldAction
```

## Topics

### Responding to primary button actions

- [ShieldAction.primaryButtonPressed](shieldaction/primarybuttonpressed.md): The user pressed the top button of the buttons on a shield.

### Responding to secondary button actions

- [ShieldAction.secondaryButtonPressed](shieldaction/secondarybuttonpressed.md): The user pressed the optional secondary button underneath the primary button of a shield.
- [ShieldAction.firstSecondarySubmenuItemPressed](shieldaction/firstsecondarysubmenuitempressed.md): An action that occurs when someone selects the first item in the secondary button’s submenu.
- [ShieldAction.secondSecondarySubmenuItemPressed](shieldaction/secondsecondarysubmenuitempressed.md): An action that occurs when someone selects the second item in the secondary button’s submenu.
- [ShieldAction.thirdSecondarySubmenuItemPressed](shieldaction/thirdsecondarysubmenuitempressed.md): An action that occurs when someone selects the third item in the secondary button’s submenu.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Shield actions

- [ShieldActionDelegate](shieldactiondelegate.md): A class for an extension that handles shield actions.

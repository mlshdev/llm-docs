> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldaction/firstsecondarysubmenuitempressed](https://developer.apple.com/documentation/managedsettings/shieldaction/firstsecondarysubmenuitempressed)

# ShieldAction.firstSecondarySubmenuItemPressed

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An action that occurs when someone selects the first item in the secondary button’s submenu.

## Declaration

```swift
case firstSecondarySubmenuItemPressed
```

<a id="discussion"></a>

## Discussion

The system invokes this callback on your app’s [ShieldActionDelegate](../shieldactiondelegate.md) for the first item in the submenu when your app defines the [secondaryButtonSubmenuItems](../../managedsettingsui/shieldconfiguration/secondarybuttonsubmenuitems.md) array with one or more elements.

## See Also

### Responding to secondary button actions

- [ShieldAction.secondaryButtonPressed](secondarybuttonpressed.md): The user pressed the optional secondary button underneath the primary button of a shield.
- [ShieldAction.secondSecondarySubmenuItemPressed](secondsecondarysubmenuitempressed.md): An action that occurs when someone selects the second item in the secondary button’s submenu.
- [ShieldAction.thirdSecondarySubmenuItemPressed](thirdsecondarysubmenuitempressed.md): An action that occurs when someone selects the third item in the secondary button’s submenu.

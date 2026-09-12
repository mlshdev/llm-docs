> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfiguration/secondarybuttonsubmenuitems](https://developer.apple.com/documentation/managedsettingsui/shieldconfiguration/secondarybuttonsubmenuitems)

# secondaryButtonSubmenuItems

**Framework:** Managed Settings UI  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of strings that define the items to display in the secondary button’s submenu.

## Declaration

```swift
let secondaryButtonSubmenuItems: [String]?
```

<a id="discussion"></a>

## Discussion

When you provide this array, the system displays a submenu on secondary button taps. Add up to three array elements that correspond to custom actions your app implements, for example:

1. “1 more minute”
2. “15 more minutes”
3. “1 more hour”

Or, your app might tailor actions for an education app as:

1. “Finish this lesson.”
2. “Complete homework.”
3. “Take a quiz.”

To respond to menu item taps, implement [ShieldAction.firstSecondarySubmenuItemPressed](../../managedsettings/shieldaction/firstsecondarysubmenuitempressed.md), [ShieldAction.secondSecondarySubmenuItemPressed](../../managedsettings/shieldaction/secondsecondarysubmenuitempressed.md), and [ShieldAction.thirdSecondarySubmenuItemPressed](../../managedsettings/shieldaction/thirdsecondarysubmenuitempressed.md), depending on the number of elements your app adds to the array.

If you provide `nil` or an empty array, the secondary button doesn’t display a submenu and instead invokes the [ShieldAction.secondaryButtonPressed](../../managedsettings/shieldaction/secondarybuttonpressed.md) action when a person presses the secondary button. The system automatically adds a Cancel button to dismiss the menu.

## See Also

### Configure the secondary button

- [secondaryButtonLabel](secondarybuttonlabel.md): The label of the optional secondary button.

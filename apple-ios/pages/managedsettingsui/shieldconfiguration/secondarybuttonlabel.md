> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfiguration/secondarybuttonlabel](https://developer.apple.com/documentation/managedsettingsui/shieldconfiguration/secondarybuttonlabel)

# secondaryButtonLabel

**Framework:** Managed Settings UI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The label of the optional secondary button.

## Declaration

```swift
let secondaryButtonLabel: ShieldConfiguration.Label?
```

<a id="discussion"></a>

## Discussion

Unlike the primary button, this button is borderless and has no background. If this is `nil`, then the shield doesn’t have a secondary button.

## See Also

### Configure the secondary button

- [secondaryButtonSubmenuItems](secondarybuttonsubmenuitems.md): An array of strings that define the items to display in the secondary button’s submenu.

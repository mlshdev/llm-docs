> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfiguration/init(backgroundblurstyle:backgroundcolor:icon:title:subtitle:primarybuttonlabel:primarybuttonbackgroundcolor:secondarybuttonlabel:secondarybuttonsubmenuitems:)](https://developer.apple.com/documentation/managedsettingsui/shieldconfiguration/init(backgroundblurstyle:backgroundcolor:icon:title:subtitle:primarybuttonlabel:primarybuttonbackgroundcolor:secondarybuttonlabel:secondarybuttonsubmenuitems:))

# init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:secondaryButtonSubmenuItems:)

**Framework:** Managed Settings UI  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initializes a shield configuration with optional submenu items for the secondary button.

## Declaration

```swift
init(backgroundBlurStyle: UIBlurEffect.Style? = nil, backgroundColor: UIColor? = nil, icon: UIImage? = nil, title: ShieldConfiguration.Label? = nil, subtitle: ShieldConfiguration.Label? = nil, primaryButtonLabel: ShieldConfiguration.Label? = nil, primaryButtonBackgroundColor: UIColor? = nil, secondaryButtonLabel: ShieldConfiguration.Label? = nil, secondaryButtonSubmenuItems: [String]? = nil)
```

## Parameters

- `backgroundBlurStyle`: A blur style to apply to the background color.
- `backgroundColor`: A color to display for the shield’s background.
- `icon`: An icon to display on the shield.
- `title`: A title for the shield.
- `subtitle`: Additional text to display on the shield.
- `primaryButtonLabel`: A label for the shield’s main button.
- `primaryButtonBackgroundColor`: A background color for the shield’s main button.
- `secondaryButtonLabel`: An additional button to display on the shield.
- `secondaryButtonSubmenuItems`: A list of one to three items to display in a submenu after someone taps the secondary button.

<a id="discussion"></a>

## Discussion

This initializer extends the shield configuration structure to display a submenu when someone taps the secondary button.

## See Also

### Initializing a shield configuration

- [init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:)](init%28backgroundblurstyle_backgroundcolor_icon_title_subtitle_primarybuttonlabel_primarybuttonbackgroundcolor_secondarybuttonlabel_%29.md): Creates a shield configuration with the specified values.

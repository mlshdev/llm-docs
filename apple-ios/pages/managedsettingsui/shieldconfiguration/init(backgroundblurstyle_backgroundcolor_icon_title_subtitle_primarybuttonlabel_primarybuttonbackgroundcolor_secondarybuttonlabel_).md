> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfiguration/init(backgroundblurstyle:backgroundcolor:icon:title:subtitle:primarybuttonlabel:primarybuttonbackgroundcolor:secondarybuttonlabel:)](https://developer.apple.com/documentation/managedsettingsui/shieldconfiguration/init(backgroundblurstyle:backgroundcolor:icon:title:subtitle:primarybuttonlabel:primarybuttonbackgroundcolor:secondarybuttonlabel:))

# init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:)

**Framework:** Managed Settings UI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a shield configuration with the specified values.

## Declaration

```swift
init(backgroundBlurStyle: UIBlurEffect.Style? = nil, backgroundColor: UIColor? = nil, icon: UIImage? = nil, title: ShieldConfiguration.Label? = nil, subtitle: ShieldConfiguration.Label? = nil, primaryButtonLabel: ShieldConfiguration.Label? = nil, primaryButtonBackgroundColor: UIColor? = nil, secondaryButtonLabel: ShieldConfiguration.Label? = nil)
```

## Parameters

- `backgroundBlurStyle`: A blur style to apply to the `backgroundColor`.
- `backgroundColor`: A color to display in the shield’s background.
- `icon`: An icon to display on the shield.
- `title`: A title for the shield.
- `subtitle`: Additional text to display on the shield.
- `primaryButtonLabel`: A label for the shield’s main button.
- `primaryButtonBackgroundColor`: A background color for the shield’s main button.
- `secondaryButtonLabel`: An additional button to display on the shield.

<a id="discussion"></a>

## Discussion

The system provides a default for any options that you don’t specify.

## See Also

### Initializing a shield configuration

- [init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:secondaryButtonSubmenuItems:)](init%28backgroundblurstyle_backgroundcolor_icon_title_subtitle_primarybuttonlabel_primarybuttonbackgroundcolor_secondarybuttonlabel_secondarybuttonsubmenuitems_%29.md): Initializes a shield configuration with optional submenu items for the secondary button.

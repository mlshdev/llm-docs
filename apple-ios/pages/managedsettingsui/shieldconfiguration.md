> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfiguration](https://developer.apple.com/documentation/managedsettingsui/shieldconfiguration)

# ShieldConfiguration

**Framework:** Managed Settings UI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that defines the appearance of a shield to display over an application or website.

## Declaration

```swift
struct ShieldConfiguration
```

<a id="overview"></a>

## Overview

The system provides a default appearance for any properties you set to `nil`.

## Topics

### Initializing a shield configuration

- [init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:)](shieldconfiguration/init%28backgroundblurstyle_backgroundcolor_icon_title_subtitle_primarybuttonlabel_primarybuttonbackgroundcolor_secondarybuttonlabel_%29.md): Creates a shield configuration with the specified values.
- [init(backgroundBlurStyle:backgroundColor:icon:title:subtitle:primaryButtonLabel:primaryButtonBackgroundColor:secondaryButtonLabel:secondaryButtonSubmenuItems:)](shieldconfiguration/init%28backgroundblurstyle_backgroundcolor_icon_title_subtitle_primarybuttonlabel_primarybuttonbackgroundcolor_secondarybuttonlabel_secondarybuttonsubmenuitems_%29.md): Initializes a shield configuration with optional submenu items for the secondary button.

### Configure the visual style

- [backgroundBlurStyle](shieldconfiguration/backgroundblurstyle.md): A blur style to apply to the background of the shield.
- [backgroundColor](shieldconfiguration/backgroundcolor.md): A color for a shield to use in the background blur effect.
- [icon](shieldconfiguration/icon.md): An icon to display in the center of the shield.

### Configure the text content

- [title](shieldconfiguration/title.md): The title of the shield to display below the icon.
- [subtitle](shieldconfiguration/subtitle.md): The subtitle for a shield to display below the title.
- [ShieldConfiguration.Label](shieldconfiguration/label.md): The appearance of text labels within a shield.

### Configure the primary button

- [primaryButtonLabel](shieldconfiguration/primarybuttonlabel.md): The label of the topmost rounded rectangle button.
- [primaryButtonBackgroundColor](shieldconfiguration/primarybuttonbackgroundcolor.md): The color to fill the contents of the rounded rectangle primary button.

### Configure the secondary button

- [secondaryButtonLabel](shieldconfiguration/secondarybuttonlabel.md): The label of the optional secondary button.
- [secondaryButtonSubmenuItems](shieldconfiguration/secondarybuttonsubmenuitems.md): An array of strings that define the items to display in the secondary button’s submenu.

## See Also

### Shield appearance

- [ShieldConfigurationDataSource](shieldconfigurationdatasource.md): The base class for the principal object of an app extension that configures a shield’s appearance.

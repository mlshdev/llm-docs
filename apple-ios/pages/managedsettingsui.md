> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui](https://developer.apple.com/documentation/managedsettingsui)

# Managed Settings UI

**Framework:** Managed Settings UI  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Define and configure the appearance of shielding views.

<a id="overview"></a>

## Overview

Use Managed Settings UI to customize the appearance of shields that the system displays when someone applies access restrictions to apps or websites. Shields appear when someone exceeds app or website usage limits, such as their daily time allowance, or when access attempts occur during restricted hours.

This framework works with [Managed Settings](managedsettings.md) to customize access control shielding. [Managed Settings](managedsettings.md) handles shield actions and enforcement, and Managed Settings UI lets you customize the visual presentation with custom button style, titles, icons, colors, and submenu items.

## Topics

### Shield appearance

- [ShieldConfiguration](managedsettingsui/shieldconfiguration.md): An object that defines the appearance of a shield to display over an application or website.
- [ShieldConfigurationDataSource](managedsettingsui/shieldconfigurationdatasource.md): The base class for the principal object of an app extension that configures a shield’s appearance.

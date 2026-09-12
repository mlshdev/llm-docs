> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings](https://developer.apple.com/documentation/managedsettings)

# Managed Settings

**Framework:** Managed Settings  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Access and change settings with your app while maintaining user privacy and control.

<a id="overview"></a>

## Overview

Managed Settings provides a privacy-preserving way for users to restrict access to certain settings and features on their devices. With the user’s permission, your app can limit media showings, restrict app purchases, lock passcode settings, and configure other device behavior.

![A diagram consisting of three icons with an on-and-off toggle switch below each one. On the left is a Settings icon with an toggle switch representing the on state. In the middle is an App Store icon with a toggle switch represeting the off state. To the right is a Safari icon with a toggle switch representing the on state.](https://developer.apple.com/images/com.apple.ManagedSettings/managed-settings-overview@2x.png)

Managed Settings works together with [Managed Settings UI](managedsettingsui.md), [Device Activity](deviceactivity.md), and [Family Controls](familycontrols.md) to allow your app to restrict, authorize, and monitor device usage. To learn more about authorizing Managed Settings on your app, see [Family Controls](familycontrols.md). For more information about monitoring and scheduling device usage with your app, see [Device Activity](deviceactivity.md).

## Topics

### Essentials

- [Manage settings on devices in a Family Sharing group](managedsettings/connectionwithframeworks.md): Empower parents and guardians to configure constraints on other devices while preserving the family’s privacy.
- [Confirming the effective TV and movie ratings](managedsettings/readingmedia.md): Read the media rating on a device and determine what media to display on your app.

### Settings

- [ManagedSettingsStore](managedsettings/managedsettingsstore.md): A data store that applies settings to the current user or device.

### Shield actions

- [ShieldAction](managedsettings/shieldaction.md): Constants that describe a user’s action for your extension to handle.
- [ShieldActionDelegate](managedsettings/shieldactiondelegate.md): A class for an extension that handles shield actions.

### Family privacy

- [Token](managedsettings/token.md): A representation of an activity, such as an app or website, that doesn’t reveal its identity.

### Apps

- [Application](managedsettings/application.md): A representation of an application on the user’s device.
- [ApplicationToken](managedsettings/applicationtoken.md): A representation of an application.

### Categories

- [ActivityCategory](managedsettings/activitycategory.md): An activity’s category, such as Entertainment or Social.
- [ActivityCategoryToken](managedsettings/activitycategorytoken.md): A token that represents a category of app or website activity.

### Websites

- [WebDomain](managedsettings/webdomain.md): An object that represents a website.
- [WebDomainToken](managedsettings/webdomaintoken.md): A representation of a web domain that preserves the user’s privacy.

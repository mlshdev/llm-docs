> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui](https://developer.apple.com/documentation/usernotificationsui)

# User Notifications UI

**Interface languages:** Swift, Objective-C

**Framework:** User Notifications UI  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Customize the interface that displays local and remote notifications.

<a id="Overview"></a>

## Overview

Customize how local and remote notifications appear on the user’s device by adding a notification content app extension to the bundle of your iOS app. Your extension manages a custom view controller, which you use to present the content from incoming notifications. When a notification arrives, the system displays your view controller in addition to, or in place of, the default system interface.

## Topics

### Notification Content App Extension

- [Customizing the Appearance of Notifications](usernotificationsui/customizing-the-appearance-of-notifications.md): Customize the appearance of your iOS app’s notification alerts with a notification content app extension.
- [UNNotificationContentExtension](usernotificationsui/unnotificationcontentextension.md): An object that presents a custom interface for a delivered local or remote notification.

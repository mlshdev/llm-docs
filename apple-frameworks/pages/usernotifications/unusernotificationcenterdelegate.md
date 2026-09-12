> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenterdelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate)

# UNUserNotificationCenterDelegate (Swift)

**Framework:** User Notifications  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An interface for processing incoming notifications and responding to notification actions.

## Declaration

```swift
protocol UNUserNotificationCenterDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) protocol to handle user-selected actions from notifications, and to process notifications that arrive when your app is running in the foreground. After implementing these methods in an object, assign that object to the [delegate](unusernotificationcenter/delegate.md) property of the shared [UNUserNotificationCenter](unusernotificationcenter.md) object. The user notification center object calls the methods of your delegate at appropriate times.

> **Important**

>  You must assign your delegate object to the [UNUserNotificationCenter](unusernotificationcenter.md) object before your app finishes launching. For example, in an iOS app, you must assign it in the [application(\_:willFinishLaunchingWithOptions:)](../uikit/uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of your app delegate. Assigning a delegate after the system calls these methods might cause you to miss incoming notifications.

For information about the shared user notification center object, see [UNUserNotificationCenter](unusernotificationcenter.md).

## Topics

### First Steps

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md): Respond to user interactions with the system’s notification interfaces, including handling your app’s custom actions.

### Handling the Selection of Custom Actions

- [userNotificationCenter(\_:didReceive:withCompletionHandler:)](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md): Asks the delegate to process the user’s response to a delivered notification.

### Receiving Notifications

- [userNotificationCenter(\_:willPresent:withCompletionHandler:)](unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md): Asks the delegate how to handle a notification that arrived while the app was running in the foreground.
- [UNNotificationPresentationOptions](unnotificationpresentationoptions.md): Constants indicating how to present a notification in a foreground app.

### Displaying Notification Settings

- [userNotificationCenter(\_:openSettingsFor:)](unusernotificationcenterdelegate/usernotificationcenter%28__opensettingsfor_%29.md): Asks the delegate to display the in-app notification settings.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Notification management

- [UNUserNotificationCenter](unusernotificationcenter.md): The central object for managing notification-related activities for your app or app extension.
- [UNNotificationSettings](unnotificationsettings.md): The object for managing notification-related settings and the authorization status of your app.

# UNUserNotificationCenterDelegate (Objective-C)

**Framework:** User Notifications  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An interface for processing incoming notifications and responding to notification actions.

## Declaration

```objectivec
@protocol UNUserNotificationCenterDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) protocol to handle user-selected actions from notifications, and to process notifications that arrive when your app is running in the foreground. After implementing these methods in an object, assign that object to the [delegate](unusernotificationcenter/delegate.md) property of the shared [UNUserNotificationCenter](unusernotificationcenter.md) object. The user notification center object calls the methods of your delegate at appropriate times.

> **Important**

>  You must assign your delegate object to the [UNUserNotificationCenter](unusernotificationcenter.md) object before your app finishes launching. For example, in an iOS app, you must assign it in the [application:willFinishLaunchingWithOptions:](../uikit/uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of your app delegate. Assigning a delegate after the system calls these methods might cause you to miss incoming notifications.

For information about the shared user notification center object, see [UNUserNotificationCenter](unusernotificationcenter.md).

## Topics

### First Steps

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md): Respond to user interactions with the system’s notification interfaces, including handling your app’s custom actions.

### Handling the Selection of Custom Actions

- [userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md): Asks the delegate to process the user’s response to a delivered notification.

### Receiving Notifications

- [userNotificationCenter:willPresentNotification:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md): Asks the delegate how to handle a notification that arrived while the app was running in the foreground.
- [UNNotificationPresentationOptions](unnotificationpresentationoptions.md): Constants indicating how to present a notification in a foreground app.
- [UNNotificationPresentationOptionNone](unnotificationpresentationoptionnone.md): No alert.

### Displaying Notification Settings

- [userNotificationCenter:openSettingsForNotification:](unusernotificationcenterdelegate/usernotificationcenter%28__opensettingsfor_%29.md): Asks the delegate to display the in-app notification settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Notification management

- [UNUserNotificationCenter](unusernotificationcenter.md): The central object for managing notification-related activities for your app or app extension.
- [UNNotificationSettings](unnotificationsettings.md): The object for managing notification-related settings and the authorization status of your app.

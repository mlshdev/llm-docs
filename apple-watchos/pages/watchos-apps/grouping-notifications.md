> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-apps/grouping-notifications](https://developer.apple.com/documentation/watchos-apps/grouping-notifications)

# Grouping notifications

**Kind:** Article

Organize notifications into threads.

<a id="Overview"></a>

## Overview

The system groups related notifications together in the Notification Center. You can control how watchOS groups your app’s notifications by adding a thread identifier.

<a id="Set-the-thread-identifier"></a>

### Set the thread identifier

The system automatically groups notifications with the same category and thread ID as they arrive. For local notifications, set the content’s [threadIdentifier](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/threadidentifier) property. For remote notifications, use the `thread-id` key.

```swift
let myPOICategory = "NearbyPlaceOfInterestCategoryIdentifier"
let myPOIThread = "NearbyPlaceOfInterestThreadIdentifier"

// Create the local notification's content.
let content = UNMutableNotificationContent()
content.title = "Grand Canyon"
content.body = "You are within 50 miles of the Grand Canyon"

// Enable grouping by adding a thread identifier.
content.threadIdentifier = myPOIThread

// Then create the request for the notification.
let request = UNNotificationRequest(identifier: myPOICategory,
                                    content: content)
```

<a id="Display-groups-in-custom-interfaces"></a>

### Display groups in custom interfaces

Additionally, if you provide a custom long-look interface, it can respond to grouped notifications, displaying content from multiple notifications within a single interface. If a custom notification interface is on screen and a new notification with a matching category and thread ID arrives, the system calls your notification controller’s [didReceive(\_:)](../watchkit/wkusernotificationinterfacecontroller/didreceive%28__%29.md) method again. Your implementation must be prepared to append the incoming content to the existing interface. For example, if your custom interface displays the content in a table view, you can add a new row for the incoming content.

## See Also

### Customizing the user experience

- [Taking advantage of notification forwarding](taking-advantage-of-notification-forwarding.md): Deliver notifications to the user’s iPhone or Apple Watch.
- [Customizing your long-look interface](customizing-your-long-look-interface.md): Create custom interfaces for your watchOS app’s notifications.
- [Adding actions to notifications on watchOS](adding-actions-to-notifications-on-watchos.md): Provide a set of responses to a notification.

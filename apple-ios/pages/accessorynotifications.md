> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications](https://developer.apple.com/documentation/accessorynotifications)

# Accessory Notifications

**Framework:** Accessory Notifications  
**Kind:** Framework  
**Availability:** iOS 26.5+

Receive forwarded iOS system notifications on an accessory that you develop.

<a id="overview"></a>

## Overview

The Accessory Notifications framework allows accessory companion apps to request notification forwarding from people, and receive notification content from the system through an extension model. People can choose to forward notifications from all apps, no apps, or a subset of apps on their device. Implement the extensions this framework calls into using [Accessory Transport Extension](accessorytransportextension.md), which transfers notification content and responses to and from your accessory.

> **Important**

> This framework supports iPhone only. You can develop and test an app that uses this framework on devices in any region. Customer installations of your app can only use the framework on devices located in the EU that are signed in with an Apple Account with an EU country or region.

<a id="Forward-iOS-system-notifications-to-an-accessory"></a>

## Forward iOS system notifications to an accessory

The framework prompts the person to allow notification forwarding when your accessory’s companion app calls [requestForwarding(for:)](accessorynotifications/accessorynotificationcenter/requestforwarding%28for_%29.md). The method returns a [ForwardingDecision](accessorynotifications/forwardingdecision.md) that indicates the person’s choice. Check the current forwarding status for an accessory using [forwardingStatus(for:)](accessorynotifications/accessorynotificationcenter/forwardingstatus%28for_%29.md), or present notification settings using [presentSettings(for:scenePersistentIdentifier:)](accessorynotifications/accessorynotificationcenter/presentsettings%28for_scenepersistentidentifier_%29.md).

When a person approves the prompt and the system is ready to forward a notification, the system calls [NotificationsForwarding.AccessoryNotificationsHandler](accessorynotifications/notificationsforwarding/accessorynotificationshandler.md) in an [AccessoryDataProvider](accessorytransportextension/accessorydataprovider.md) extension you implement to curate the notification details specifically for your accessory. The [AccessoryNotification](accessorynotifications/accessorynotification.md) contains the complete notification data, from which you curate the details your accessory needs. [AlertingContext](accessorynotifications/alertingcontext.md) determines if your accessory alerts for the notification, and how that alert occurs.

<a id="Respond-to-notifications"></a>

## Respond to notifications

If someone interacts with the notification, such as tapping to dismiss it, or typing text in a quick reply, your accessory sends information back to the companion app using [messageHandler(\_:)](accessorynotifications/notificationsforwarding/accessorynotificationshandler/messagehandler%28__%29.md). The [NotificationResponse](accessorynotifications/notificationresponse.md) structure details the reply and your app delivers it to the system by calling [sendResponse(\_:)](accessorynotifications/notificationsforwarding/accessorynotificationssession/sendresponse%28__%29.md).

## Topics

### Authorization

- [AccessoryNotificationCenter](accessorynotifications/accessorynotificationcenter.md): A class that asks a person for permission to forward notifications.
- [ForwardingDecision](accessorynotifications/forwardingdecision.md): Possible decisions in response to the notification forwarding permission prompt.

### Notification receipt

- [Receiving iOS notifications on an accessory](accessorytransportextension/receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [NotificationsForwarding](accessorynotifications/notificationsforwarding.md): A class for handling notification forwarding in your accessory’s data provider extension.
- [NotificationsForwarding.AccessoryNotificationsHandler](accessorynotifications/notificationsforwarding/accessorynotificationshandler.md): A protocol that defines methods for handling notification life cycle events in your extension.
- [NotificationsForwarding.Session](accessorynotifications/notificationsforwarding/session.md): A session object that facilitates bidirectional communication between the system and your extension.

### Data curation and alerting

- [AccessoryNotification](accessorynotifications/accessorynotification.md): A structure that contains the details of a notification that iOS provides to your accessory.
- [AlertingContext](accessorynotifications/alertingcontext.md): A structure that provides guidance for how to alert for a notification.

### Interactive support

- [Responding to forwarded notifications](accessorynotifications/responding-to-forwarded-notifications.md): Enable people to interact with notifications on your accessory and convey their responses to iOS.
- [NotificationResponse](accessorynotifications/notificationresponse.md): A structure that represents a person’s response to a notification.

### Errors

- [AccessoryError](accessorynotifications/accessoryerror.md): Errors the Accessory Notifications framework can throw.

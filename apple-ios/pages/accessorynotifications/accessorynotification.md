> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification](https://developer.apple.com/documentation/accessorynotifications/accessorynotification)

# AccessoryNotification

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that contains the details of a notification that iOS provides to your accessory.

## Declaration

```swift
struct AccessoryNotification
```

<a id="overview"></a>

## Overview

The notification includes display elements, metadata, interactive components, and rich content such as icons, attachments, and Apple Intelligence summaries.

## Topics

### Creating a notification

- [init(identifier:sourceName:deliveryDate:displayDate:title:subtitle:body:threadIdentifier:attributes:summary:actions:sourceIcon:contextIcon:attachments:)](accessorynotification/init%28identifier_sourcename_deliverydate_displaydate_title_subtitle_body_threadidentifier_attributes_summary_actions_sourceicon_contexticon_attachments_%29.md): Initializes an accessory notification.

### Displaying notification content

- [title](accessorynotification/title.md): A primary text for the notification.
- [subtitle](accessorynotification/subtitle.md): Secondary text for the notification.
- [body](accessorynotification/body.md): A string that contains the notification’s main content.
- [summary](accessorynotification/summary.md): An Apple Intelligence summary for the notification.

### Working with notification attributes

- [attributes](accessorynotification/attributes-swift.property.md): A set of attributes that indicate the notification’s priority level.
- [AccessoryNotification.Attributes](accessorynotification/attributes-swift.struct.md): Attributes that display priority for a notification.

### Accessing related media

- [attachments](accessorynotification/attachments.md): An array of files sent with the notification.
- [sourceIcon](accessorynotification/sourceicon.md): An icon that represents the app that sent the notification.
- [contextIcon](accessorynotification/contexticon.md): A secondary icon that provides additional contextual information about the notification.
- [AccessoryNotification.File](accessorynotification/file.md): A file associated with a notification.

### Identifying and grouping notifications

- [identifier](accessorynotification/identifier-swift.property.md): A structure that uniquely identifies the notification.
- [AccessoryNotification.Identifier](accessorynotification/identifier-swift.struct.md): A structure that uniquely identifies a notification.
- [threadIdentifier](accessorynotification/threadidentifier.md): An identifier that groups notifications that belong to the same thread.
- [sourceName](accessorynotification/sourcename.md): A display name for the bundle that sent the notification.

### Working with notification dates

- [deliveryDate](accessorynotification/deliverydate.md): A timestamp that indicates when the system received the notification.
- [displayDate](accessorynotification/displaydate-swift.property.md): A preferred date and format to display with the notification.
- [AccessoryNotification.DisplayDate](accessorynotification/displaydate-swift.enum.md): Options for displaying a date in a notification.

### Handling user interactions

- [actions](accessorynotification/actions.md): An array of possible interactions that a person can have with the notification.
- [AccessoryNotification.Action](accessorynotification/action.md): A possible user interaction with a notification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Data curation and alerting

- [AlertingContext](alertingcontext.md): A structure that provides guidance for how to alert for a notification.

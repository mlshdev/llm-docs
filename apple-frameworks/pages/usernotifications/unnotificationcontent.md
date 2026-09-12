> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent](https://developer.apple.com/documentation/usernotifications/unnotificationcontent)

# UNNotificationContent (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The uneditable content of a notification.

## Declaration

```swift
class UNNotificationContent
```

## Mentioned In

- [Generating a remote notification](generating-a-remote-notification.md)

<a id="overview"></a>

## Overview

A [UNNotificationContent](unnotificationcontent.md) object contains the data associated with a notification. When your app receives a notification, the associated [UNNotificationRequest](unnotificationrequest.md) object contains an object of this type with the content that your app received. Use the content object to get the details of the notification, including the type of notification that the system delivered, any custom data you stored in the [userInfo](unnotificationcontent/userinfo.md) dictionary before scheduling the notification, and any attachments.

Don’t create instances of this class directly. For remote notifications, the system derives the contents of this object from the JSON payload that your server sends to the APNS server. For local notifications, create a [UNMutableNotificationContent](unmutablenotificationcontent.md) object, and configure the contents of that object instead.

## Topics

### Accessing the primary content

- [title](unnotificationcontent/title.md): The localized text that provides the notification’s primary description.
- [subtitle](unnotificationcontent/subtitle.md): The localized text that provides the notification’s secondary description.
- [body](unnotificationcontent/body.md): The localized text that provides the notification’s main content.

### Accessing supplementary content

- [attachments](unnotificationcontent/attachments.md): The visual and audio attachments to display alongside the notification’s main content.
- [userInfo](unnotificationcontent/userinfo.md): The custom data to associate with the notification.

### Reading app configuration

- [launchImageName](unnotificationcontent/launchimagename.md): The name of the image or storyboard to use when your app launches because of the notification.
- [badge](unnotificationcontent/badge.md): The number that your app’s icon displays.
- [targetContentIdentifier](unnotificationcontent/targetcontentidentifier.md): The value your app uses to determine which scene to display to handle the notification.

### Reading system configuration

- [sound](unnotificationcontent/sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](unnotificationcontent/interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](unnotificationcontent/relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](unnotificationcontent/filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

### Retrieving group information

- [threadIdentifier](unnotificationcontent/threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](unnotificationcontent/categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](unnotificationcontent/summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](unnotificationcontent/summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.

### Updating the notification’s content

- [updating(from:)](unnotificationcontent/updating%28from_%29.md): Returns a copy of the notification that includes content from the specified provider.

### Initializers

- [init(coder:)](unnotificationcontent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNMutableNotificationContent](unmutablenotificationcontent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

# UNNotificationContent (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The uneditable content of a notification.

## Declaration

```objectivec
@interface UNNotificationContent : NSObject
```

## Mentioned In

- [Generating a remote notification](generating-a-remote-notification.md)

<a id="overview"></a>

## Overview

A [UNNotificationContent](unnotificationcontent.md) object contains the data associated with a notification. When your app receives a notification, the associated [UNNotificationRequest](unnotificationrequest.md) object contains an object of this type with the content that your app received. Use the content object to get the details of the notification, including the type of notification that the system delivered, any custom data you stored in the [userInfo](unnotificationcontent/userinfo.md) dictionary before scheduling the notification, and any attachments.

Don’t create instances of this class directly. For remote notifications, the system derives the contents of this object from the JSON payload that your server sends to the APNS server. For local notifications, create a [UNMutableNotificationContent](unmutablenotificationcontent.md) object, and configure the contents of that object instead.

## Topics

### Accessing the primary content

- [title](unnotificationcontent/title.md): The localized text that provides the notification’s primary description.
- [subtitle](unnotificationcontent/subtitle.md): The localized text that provides the notification’s secondary description.
- [body](unnotificationcontent/body.md): The localized text that provides the notification’s main content.

### Accessing supplementary content

- [attachments](unnotificationcontent/attachments.md): The visual and audio attachments to display alongside the notification’s main content.
- [userInfo](unnotificationcontent/userinfo.md): The custom data to associate with the notification.

### Reading app configuration

- [launchImageName](unnotificationcontent/launchimagename.md): The name of the image or storyboard to use when your app launches because of the notification.
- [badge](unnotificationcontent/badge.md): The number that your app’s icon displays.
- [targetContentIdentifier](unnotificationcontent/targetcontentidentifier.md): The value your app uses to determine which scene to display to handle the notification.

### Reading system configuration

- [sound](unnotificationcontent/sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](unnotificationcontent/interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](unnotificationcontent/relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](unnotificationcontent/filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

### Retrieving group information

- [threadIdentifier](unnotificationcontent/threadidentifier.md): The identifier that groups related notifications.
- [categoryIdentifier](unnotificationcontent/categoryidentifier.md): The identifier of the notification’s category.
- [summaryArgument](unnotificationcontent/summaryargument.md): Deprecated. The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](unnotificationcontent/summaryargumentcount.md): Deprecated. The number the system adds to the notification summary when the notification represents multiple items.

### Updating the notification’s content

- [contentByUpdatingWithProvider:error:](unnotificationcontent/updating%28from_%29.md): Returns a copy of the notification that includes content from the specified provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNMutableNotificationContent](unmutablenotificationcontent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

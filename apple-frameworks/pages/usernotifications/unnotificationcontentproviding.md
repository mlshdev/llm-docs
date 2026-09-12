> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontentproviding](https://developer.apple.com/documentation/usernotifications/unnotificationcontentproviding)

# UNNotificationContentProviding (Swift)

**Framework:** User Notifications  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol the system uses to provide context relevant to user notifications.

## Declaration

```swift
protocol UNNotificationContentProviding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The system allows only objects in the Apple SDK that conform to `UNNotificationContentProviding`. The system ignores objects outside of the Apple SDK that your app conforms to `UNNotificationContentProviding`.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UNNotificationAttributedMessageContext](unnotificationattributedmessagecontext.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

# UNNotificationContentProviding (Objective-C)

**Framework:** User Notifications  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol the system uses to provide context relevant to user notifications.

## Declaration

```objectivec
@protocol UNNotificationContentProviding <NSObject>
```

<a id="overview"></a>

## Overview

The system allows only objects in the Apple SDK that conform to `UNNotificationContentProviding`. The system ignores objects outside of the Apple SDK that your app conforms to `UNNotificationContentProviding`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UNNotificationAttributedMessageContext](unnotificationattributedmessagecontext.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationActionIcon](unnotificationactionicon.md): An icon associated with an action.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

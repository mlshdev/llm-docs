> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionicon](https://developer.apple.com/documentation/usernotifications/unnotificationactionicon)

# UNNotificationActionIcon (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An icon associated with an action.

## Declaration

```swift
class UNNotificationActionIcon
```

## Topics

### Essentials

- [init(systemImageName:)](unnotificationactionicon/init%28systemimagename_%29.md): Creates an action icon by using a system symbol image.
- [init(templateImageName:)](unnotificationactionicon/init%28templateimagename_%29.md): Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.

### Initializers

- [init(coder:)](unnotificationactionicon/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

# UNNotificationActionIcon (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An icon associated with an action.

## Declaration

```objectivec
@interface UNNotificationActionIcon : NSObject
```

## Topics

### Essentials

- [iconWithSystemImageName:](unnotificationactionicon/init%28systemimagename_%29.md): Creates an action icon by using a system symbol image.
- [iconWithTemplateImageName:](unnotificationactionicon/init%28templateimagename_%29.md): Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification content

- [Implementing communication notifications](implementing-communication-notifications.md): Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](unnotificationcontentproviding.md): A protocol the system uses to provide context relevant to user notifications.
- [UNMutableNotificationContent](unmutablenotificationcontent.md): The editable content for a notification.
- [UNNotificationContent](unnotificationcontent.md): The uneditable content of a notification.
- [UNNotificationAttachment](unnotificationattachment.md): A media file associated with a notification.
- [UNNotificationSound](unnotificationsound.md): The sound played upon delivery of a notification.
- [UNNotificationSoundName](unnotificationsoundname.md): A string providing the name of a sound file.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationpresentationoptions](https://developer.apple.com/documentation/usernotifications/unnotificationpresentationoptions)

# UNNotificationPresentationOptions (Swift)

**Framework:** User Notifications  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating how to present a notification in a foreground app.

## Declaration

```swift
struct UNNotificationPresentationOptions
```

## Topics

### Constants

- [badge](unnotificationpresentationoptions/badge.md): Apply the notification’s badge value to the app’s icon.
- [banner](unnotificationpresentationoptions/banner.md): Present the notification as a banner.
- [list](unnotificationpresentationoptions/list.md): Show the notification in Notification Center.
- [sound](unnotificationpresentationoptions/sound.md): Play the sound associated with the notification.
- [alert](unnotificationpresentationoptions/alert.md): Deprecated. Display the alert using the content provided by the notification.

### Initializers

- [init(rawValue:)](unnotificationpresentationoptions/init%28rawvalue_%29.md): Initializes a notification presentation options object using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Receiving Notifications

- [userNotificationCenter(\_:willPresent:withCompletionHandler:)](unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md): Asks the delegate how to handle a notification that arrived while the app was running in the foreground.

# UNNotificationPresentationOptions (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating how to present a notification in a foreground app.

## Declaration

```objectivec
enum UNNotificationPresentationOptions : NSUInteger;
```

## Topics

### Constants

- [UNNotificationPresentationOptionBadge](unnotificationpresentationoptions/badge.md): Apply the notification’s badge value to the app’s icon.
- [UNNotificationPresentationOptionBanner](unnotificationpresentationoptions/banner.md): Present the notification as a banner.
- [UNNotificationPresentationOptionList](unnotificationpresentationoptions/list.md): Show the notification in Notification Center.
- [UNNotificationPresentationOptionSound](unnotificationpresentationoptions/sound.md): Play the sound associated with the notification.
- [UNNotificationPresentationOptionAlert](unnotificationpresentationoptions/alert.md): Deprecated. Display the alert using the content provided by the notification.

## See Also

### Receiving Notifications

- [userNotificationCenter:willPresentNotification:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md): Asks the delegate how to handle a notification that arrived while the app was running in the foreground.
- [UNNotificationPresentationOptionNone](unnotificationpresentationoptionnone.md): No alert.

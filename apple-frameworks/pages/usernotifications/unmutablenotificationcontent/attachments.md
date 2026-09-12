> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/attachments](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/attachments)

# attachments (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The visual and audio attachments to display alongside the notification’s main content.

## Declaration

```swift
var attachments: [UNNotificationAttachment] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to include images or movies, or to include playable audio files, with the contents of an alert. The system displays the attachments alongside the title and body of your alert. You can also customize the presentation of attachments using a notification content app extension.

All attachments must reside locally on the current device before your app adds them. For local notifications, modify this property before scheduling the notification. For remote notifications, use a notification service app extension to locate and download the specified files and modify the notification content before it’s delivered.

For more information on how to specify attachments, see [UNNotificationAttachment](../unnotificationattachment.md).

## See Also

### Providing supplementary content

- [userInfo](userinfo.md): The custom data to associate with the notification.

# attachments (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The visual and audio attachments to display alongside the notification’s main content.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<UNNotificationAttachment *> * attachments;
```

```objectivec
@property (atomic, copy, readwrite) NSArray<UNNotificationAttachment *> * attachments;
```

<a id="Discussion"></a>

## Discussion

Use this property to include images or movies, or to include playable audio files, with the contents of an alert. The system displays the attachments alongside the title and body of your alert. You can also customize the presentation of attachments using a notification content app extension.

All attachments must reside locally on the current device before your app adds them. For local notifications, modify this property before scheduling the notification. For remote notifications, use a notification service app extension to locate and download the specified files and modify the notification content before it’s delivered.

For more information on how to specify attachments, see [UNNotificationAttachment](../unnotificationattachment.md).

## See Also

### Providing supplementary content

- [userInfo](userinfo.md): The custom data to associate with the notification.

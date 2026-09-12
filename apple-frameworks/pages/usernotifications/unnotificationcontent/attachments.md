> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/attachments](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/attachments)

# attachments (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The visual and audio attachments to display alongside the notification’s main content.

## Declaration

```swift
var attachments: [UNNotificationAttachment] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the images, movies, and audio files associated with your notification’s content. A notification content app extension might use these values to add the associated content to its view controller.

## See Also

### Accessing supplementary content

- [userInfo](userinfo.md): The custom data to associate with the notification.

# attachments (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The visual and audio attachments to display alongside the notification’s main content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UNNotificationAttachment *> * attachments;
```

```objectivec
@property (atomic, copy, readonly) NSArray<UNNotificationAttachment *> * attachments;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the images, movies, and audio files associated with your notification’s content. A notification content app extension might use these values to add the associated content to its view controller.

## See Also

### Accessing supplementary content

- [userInfo](userinfo.md): The custom data to associate with the notification.

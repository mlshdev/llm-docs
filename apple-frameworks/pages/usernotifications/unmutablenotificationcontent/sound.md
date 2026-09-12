> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/sound](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/sound)

# sound (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The sound that plays when the system delivers the notification.

## Declaration

```swift
@NSCopying var sound: UNNotificationSound? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the sound that you want played when the notification arrives. If your app isn’t authorized to play sounds for notifications, the system ignores this property.

For information on how to specify sounds for your notifications, see [UNNotificationSound](../unnotificationsound.md).

## See Also

### Integrating with the system

- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

# sound (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The sound that plays when the system delivers the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UNNotificationSound * sound;
```

```objectivec
@property (atomic, copy, readwrite, nullable) UNNotificationSound * sound;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the sound that you want played when the notification arrives. If your app isn’t authorized to play sounds for notifications, the system ignores this property.

For information on how to specify sounds for your notifications, see [UNNotificationSound](../unnotificationsound.md).

## See Also

### Integrating with the system

- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

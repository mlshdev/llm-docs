> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unmutablenotificationcontent/interruptionlevel](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/interruptionlevel)

# interruptionLevel (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The notification’s importance and required delivery timing.

## Declaration

```swift
var interruptionLevel: UNNotificationInterruptionLevel { get set }
```

## See Also

### Integrating with the system

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

# interruptionLevel (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The notification’s importance and required delivery timing.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UNNotificationInterruptionLevel interruptionLevel;
```

```objectivec
@property (atomic, assign, readwrite) UNNotificationInterruptionLevel interruptionLevel;
```

## See Also

### Integrating with the system

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

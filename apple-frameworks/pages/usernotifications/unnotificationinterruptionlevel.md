> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationinterruptionlevel](https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel)

# UNNotificationInterruptionLevel (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that indicate the importance and delivery timing of a notification.

## Declaration

```swift
enum UNNotificationInterruptionLevel
```

## Mentioned In

- [Generating a remote notification](generating-a-remote-notification.md)

## Topics

### Enumeration Cases

- [UNNotificationInterruptionLevel.active](unnotificationinterruptionlevel/active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevel.critical](unnotificationinterruptionlevel/critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevel.passive](unnotificationinterruptionlevel/passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevel.timeSensitive](unnotificationinterruptionlevel/timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

### Initializers

- [init(rawValue:)](unnotificationinterruptionlevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Integrating with the system

- [sound](unmutablenotificationcontent/sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](unmutablenotificationcontent/interruptionlevel.md): The notification’s importance and required delivery timing.
- [relevanceScore](unmutablenotificationcontent/relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](unmutablenotificationcontent/filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

# UNNotificationInterruptionLevel (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that indicate the importance and delivery timing of a notification.

## Declaration

```objectivec
enum UNNotificationInterruptionLevel : NSUInteger;
```

## Mentioned In

- [Generating a remote notification](generating-a-remote-notification.md)

## Topics

### Enumeration Cases

- [UNNotificationInterruptionLevelActive](unnotificationinterruptionlevel/active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevelCritical](unnotificationinterruptionlevel/critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevelPassive](unnotificationinterruptionlevel/passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevelTimeSensitive](unnotificationinterruptionlevel/timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

## See Also

### Integrating with the system

- [sound](unmutablenotificationcontent/sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](unmutablenotificationcontent/interruptionlevel.md): The notification’s importance and required delivery timing.
- [relevanceScore](unmutablenotificationcontent/relevancescore.md): The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](unmutablenotificationcontent/filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

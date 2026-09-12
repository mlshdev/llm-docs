> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationinterruptionlevel/timesensitive](https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel/timesensitive)

# UNNotificationInterruptionLevel.timeSensitive (Swift)

**Framework:** User Notifications  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

## Declaration

```swift
case timeSensitive
```

<a id="Discussion"></a>

## Discussion

Time Sensitive notifications are similar to active notifications, but can break through system controls such as Notification Summary and Focus. The user can turn off the ability for time sensitive notification interruptions.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevel.active](active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevel.critical](critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevel.passive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.

# UNNotificationInterruptionLevelTimeSensitive (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

## Declaration

```objectivec
UNNotificationInterruptionLevelTimeSensitive
```

<a id="Discussion"></a>

## Discussion

Time Sensitive notifications are similar to active notifications, but can break through system controls such as Notification Summary and Focus. The user can turn off the ability for time sensitive notification interruptions.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevelActive](active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevelCritical](critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevelPassive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.

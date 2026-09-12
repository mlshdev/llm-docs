> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationinterruptionlevel/active](https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel/active)

# UNNotificationInterruptionLevel.active (Swift)

**Framework:** User Notifications  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, and can play a sound.

## Declaration

```swift
case active
```

<a id="Discussion"></a>

## Discussion

This is the default interruption level. Active notifications won’t break through system notification controls.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevel.critical](critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevel.passive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevel.timeSensitive](timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

# UNNotificationInterruptionLevelActive (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, and can play a sound.

## Declaration

```objectivec
UNNotificationInterruptionLevelActive
```

<a id="Discussion"></a>

## Discussion

This is the default interruption level. Active notifications won’t break through system notification controls.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevelCritical](critical.md): The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.
- [UNNotificationInterruptionLevelPassive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevelTimeSensitive](timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

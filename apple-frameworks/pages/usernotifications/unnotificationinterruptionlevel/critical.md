> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationinterruptionlevel/critical](https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel/critical)

# UNNotificationInterruptionLevel.critical (Swift)

**Framework:** User Notifications  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.

## Declaration

```swift
case critical
```

<a id="Discussion"></a>

## Discussion

This interruption level requires an approved entitlement. The system always presents this notification, even when Do Not Disturb is active. If your app doesn’t assign a sound to this notification, the system uses the default critical alert sound.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevel.active](active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevel.passive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevel.timeSensitive](timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

# UNNotificationInterruptionLevelCritical (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound.

## Declaration

```objectivec
UNNotificationInterruptionLevelCritical
```

<a id="Discussion"></a>

## Discussion

This interruption level requires an approved entitlement. The system always presents this notification, even when Do Not Disturb is active. If your app doesn’t assign a sound to this notification, the system uses the default critical alert sound.

## See Also

### Enumeration Cases

- [UNNotificationInterruptionLevelActive](active.md): The system presents the notification immediately, lights up the screen, and can play a sound.
- [UNNotificationInterruptionLevelPassive](passive.md): The system adds the notification to the notification list without lighting up the screen or playing a sound.
- [UNNotificationInterruptionLevelTimeSensitive](timesensitive.md): The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls.

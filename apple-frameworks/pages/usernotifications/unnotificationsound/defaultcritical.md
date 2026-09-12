> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsound/defaultcritical](https://developer.apple.com/documentation/usernotifications/unnotificationsound/defaultcritical)

# defaultCritical (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

The default sound used for critical alerts.

## Declaration

```swift
@NSCopying class var defaultCritical: UNNotificationSound { get }
```

<a id="Discussion"></a>

## Discussion

Critical alerts ingore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCriticalSound(withAudioVolume:)](defaultcriticalsound%28withaudiovolume_%29.md): Creates a sound object that plays the default critical alert sound at the volume you specify.
- [criticalSoundNamed(\_:)](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.
- [criticalSoundNamed(\_:withAudioVolume:)](criticalsoundnamed%28__withaudiovolume_%29.md): Creates a custom sound object for critical alerts with the volume you specify.

# defaultCriticalSound (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

The default sound used for critical alerts.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) UNNotificationSound * defaultCriticalSound;
```

```objectivec
@property (class, atomic, copy, readonly) UNNotificationSound * defaultCriticalSound;
```

<a id="Discussion"></a>

## Discussion

Critical alerts ingore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCriticalSoundWithAudioVolume:](defaultcriticalsound%28withaudiovolume_%29.md): Creates a sound object that plays the default critical alert sound at the volume you specify.
- [criticalSoundNamed:](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.
- [criticalSoundNamed:withAudioVolume:](criticalsoundnamed%28__withaudiovolume_%29.md): Creates a custom sound object for critical alerts with the volume you specify.

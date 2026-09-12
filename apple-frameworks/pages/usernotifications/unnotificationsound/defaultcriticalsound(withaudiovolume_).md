> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsound/defaultcriticalsound(withaudiovolume:)](https://developer.apple.com/documentation/usernotifications/unnotificationsound/defaultcriticalsound(withaudiovolume:))

# defaultCriticalSound(withAudioVolume:) (Swift)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

Creates a sound object that plays the default critical alert sound at the volume you specify.

## Declaration

```swift
class func defaultCriticalSound(withAudioVolume volume: Float) -> Self
```

## Parameters

- `volume`: The volume must be a value between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A sound object representing the default critical alert sound at the specified volume.

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCritical](defaultcritical.md): The default sound used for critical alerts.
- [criticalSoundNamed(\_:)](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.
- [criticalSoundNamed(\_:withAudioVolume:)](criticalsoundnamed%28__withaudiovolume_%29.md): Creates a custom sound object for critical alerts with the volume you specify.

# defaultCriticalSoundWithAudioVolume: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

Creates a sound object that plays the default critical alert sound at the volume you specify.

## Declaration

```objectivec
+ (instancetype) defaultCriticalSoundWithAudioVolume:(float) volume;
```

## Parameters

- `volume`: The volume must be a value between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A sound object representing the default critical alert sound at the specified volume.

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCriticalSound](defaultcritical.md): The default sound used for critical alerts.
- [criticalSoundNamed:](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.
- [criticalSoundNamed:withAudioVolume:](criticalsoundnamed%28__withaudiovolume_%29.md): Creates a custom sound object for critical alerts with the volume you specify.

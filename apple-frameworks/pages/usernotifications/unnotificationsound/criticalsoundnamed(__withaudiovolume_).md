> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsound/criticalsoundnamed(_:withaudiovolume:)](https://developer.apple.com/documentation/usernotifications/unnotificationsound/criticalsoundnamed(_:withaudiovolume:))

# criticalSoundNamed(\_:withAudioVolume:) (Swift)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a custom sound object for critical alerts with the volume you specify.

## Declaration

```swift
class func criticalSoundNamed(_ name: UNNotificationSoundName, withAudioVolume volume: Float) -> Self
```

## Parameters

- `name`: The name of the sound file to play. This file must be located in the current executable’s main bundle or in the `Library/Sounds` directory of the current app container directory. If files exist at both locations, the system uses the file from the `Library/Sounds` directory. This parameter must not be `nil`.
- `volume`: The volume must be a value between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A sound object representing a custom critical alert sound at the specified volume.

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCritical](defaultcritical.md): The default sound used for critical alerts.
- [defaultCriticalSound(withAudioVolume:)](defaultcriticalsound%28withaudiovolume_%29.md): Creates a sound object that plays the default critical alert sound at the volume you specify.
- [criticalSoundNamed(\_:)](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.

# criticalSoundNamed:withAudioVolume: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a custom sound object for critical alerts with the volume you specify.

## Declaration

```objectivec
+ (instancetype) criticalSoundNamed:(UNNotificationSoundName) name withAudioVolume:(float) volume;
```

## Parameters

- `name`: The name of the sound file to play. This file must be located in the current executable’s main bundle or in the `Library/Sounds` directory of the current app container directory. If files exist at both locations, the system uses the file from the `Library/Sounds` directory. This parameter must not be `nil`.
- `volume`: The volume must be a value between 0.0 and 1.0.

<a id="return-value"></a>

## Return Value

A sound object representing a custom critical alert sound at the specified volume.

<a id="Discussion"></a>

## Discussion

Critical alerts ignore the mute switch and Do Not Disturb. They require a special entitlement issued by Apple.

## See Also

### Getting Critical Sounds

- [defaultCriticalSound](defaultcritical.md): The default sound used for critical alerts.
- [defaultCriticalSoundWithAudioVolume:](defaultcriticalsound%28withaudiovolume_%29.md): Creates a sound object that plays the default critical alert sound at the volume you specify.
- [criticalSoundNamed:](criticalsoundnamed%28__%29.md): Creates a custom sound object for critical alerts.

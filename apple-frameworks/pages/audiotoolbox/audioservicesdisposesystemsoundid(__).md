> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesdisposesystemsoundid(_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesdisposesystemsoundid(_:))

# AudioServicesDisposeSystemSoundID(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Disposes of a system sound object and associated resources.

## Declaration

```swift
func AudioServicesDisposeSystemSoundID(_ inSystemSoundID: SystemSoundID) -> OSStatus
```

## Parameters

- `inSystemSoundID`: The system sound object to dispose of.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function.

# AudioServicesDisposeSystemSoundID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Disposes of a system sound object and associated resources.

## Declaration

```objectivec
extern OSStatus AudioServicesDisposeSystemSoundID(SystemSoundID inSystemSoundID);
```

## Parameters

- `inSystemSoundID`: The system sound object to dispose of.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function.

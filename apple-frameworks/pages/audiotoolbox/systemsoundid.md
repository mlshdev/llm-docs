> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/systemsoundid](https://developer.apple.com/documentation/audiotoolbox/systemsoundid)

# SystemSoundID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A system sound object, identified with a sound file you want to play.

## Declaration

```swift
typealias SystemSoundID = UInt32
```

<a id="Discussion"></a>

## Discussion

Call the [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md) function to obtain a system sound object.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID(\_:)](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function.

# SystemSoundID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A system sound object, identified with a sound file you want to play.

## Declaration

```objectivec
typedef UInt32 SystemSoundID;
```

<a id="Discussion"></a>

## Discussion

Call the [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md) function to obtain a system sound object.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function.

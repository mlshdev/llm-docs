> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicescreatesystemsoundid(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicescreatesystemsoundid(_:_:))

# AudioServicesCreateSystemSoundID(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a system sound object.

## Declaration

```swift
func AudioServicesCreateSystemSoundID(_ inFileURL: CFURL, _ outSystemSoundID: UnsafeMutablePointer<SystemSoundID>) -> OSStatus
```

## Parameters

- `inFileURL`: The URL of the audio file to play.
- `outSystemSoundID`: On output, a system sound object associated with the specified audio file.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesDisposeSystemSoundID(\_:)](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function.

# AudioServicesCreateSystemSoundID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a system sound object.

## Declaration

```objectivec
extern OSStatus AudioServicesCreateSystemSoundID(CFURLRef inFileURL, SystemSoundID *outSystemSoundID);
```

## Parameters

- `inFileURL`: The URL of the audio file to play.
- `outSystemSoundID`: On output, a system sound object associated with the specified audio file.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesDisposeSystemSoundID](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function.

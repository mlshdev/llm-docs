> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audioservicesplaysystemsoundwithcompletion(_:_:)

# AudioServicesPlaySystemSoundWithCompletion(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioServicesPlaySystemSoundWithCompletion(_ inSystemSoundID: SystemSoundID, _ inCompletionBlock: (() -> Void)?)
```

## See Also

### Playing Sounds

- [AudioServicesPlayAlertSoundWithCompletion(\_:\_:)](audioservicesplayalertsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound(\_:)](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

# AudioServicesPlaySystemSoundWithCompletion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern void AudioServicesPlaySystemSoundWithCompletion(SystemSoundID inSystemSoundID, void (^inCompletionBlock)());
```

## See Also

### Playing Sounds

- [AudioServicesPlayAlertSoundWithCompletion](audioservicesplayalertsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesplayalertsoundwithcompletion(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesplayalertsoundwithcompletion(_:_:))

# AudioServicesPlayAlertSoundWithCompletion(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioServicesPlayAlertSoundWithCompletion(_ inSystemSoundID: SystemSoundID, _ inCompletionBlock: (() -> Void)?)
```

## See Also

### Playing Sounds

- [AudioServicesPlaySystemSoundWithCompletion(\_:\_:)](audioservicesplaysystemsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound(\_:)](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

# AudioServicesPlayAlertSoundWithCompletion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern void AudioServicesPlayAlertSoundWithCompletion(SystemSoundID inSystemSoundID, void (^inCompletionBlock)());
```

## See Also

### Playing Sounds

- [AudioServicesPlaySystemSoundWithCompletion](audioservicesplaysystemsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

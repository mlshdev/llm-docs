> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesremovesystemsoundcompletion(_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesremovesystemsoundcompletion(_:))

# AudioServicesRemoveSystemSoundCompletion(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unregisters any completion callback functions that were registered for a specified system sound.

## Declaration

```swift
func AudioServicesRemoveSystemSoundCompletion(_ inSystemSoundID: SystemSoundID)
```

## Parameters

- `inSystemSoundID`: The system sound for which callback functions should be removed.

## See Also

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion(\_:\_:\_:\_:\_:)](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

# AudioServicesRemoveSystemSoundCompletion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unregisters any completion callback functions that were registered for a specified system sound.

## Declaration

```objectivec
extern void AudioServicesRemoveSystemSoundCompletion(SystemSoundID inSystemSoundID);
```

## Parameters

- `inSystemSoundID`: The system sound for which callback functions should be removed.

## See Also

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

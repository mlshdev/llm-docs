> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicessystemsoundcompletionproc](https://developer.apple.com/documentation/audiotoolbox/audioservicessystemsoundcompletionproc)

# AudioServicesSystemSoundCompletionProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A function the system invokes when a system sound finishes playing.

## Declaration

```swift
typealias AudioServicesSystemSoundCompletionProc = (SystemSoundID, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `ssID`: The system sound that has finished playing.
- `clientData`: App data that you specified when registering the callback function.

<a id="Discussion"></a>

## Discussion

Because a system sound may play for up to 30 seconds, the [AudioServicesPlaySystemSound(\_:)](audioservicesplaysystemsound%28__%29.md) function executes asynchronously (that is, it returns immediately), and calls this function when the sound finishes playing. You can use this callback, for example, to help you avoid playing a second sound while a first sound is still playing.

## See Also

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion(\_:\_:\_:\_:\_:)](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesRemoveSystemSoundCompletion(\_:)](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.

# AudioServicesSystemSoundCompletionProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A function the system invokes when a system sound finishes playing.

## Declaration

```objectivec
typedef void (*)(unsigned int, void *) AudioServicesSystemSoundCompletionProc;
```

## Parameters

- `ssID`: The system sound that has finished playing.
- `clientData`: App data that you specified when registering the callback function.

<a id="Discussion"></a>

## Discussion

Because a system sound may play for up to 30 seconds, the [AudioServicesPlaySystemSound](audioservicesplaysystemsound%28__%29.md) function executes asynchronously (that is, it returns immediately), and calls this function when the sound finishes playing. You can use this callback, for example, to help you avoid playing a second sound while a first sound is still playing.

## See Also

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesRemoveSystemSoundCompletion](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.

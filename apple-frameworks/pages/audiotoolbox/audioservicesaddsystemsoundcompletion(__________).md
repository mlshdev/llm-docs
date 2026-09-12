> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesaddsystemsoundcompletion(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesaddsystemsoundcompletion(_:_:_:_:_:))

# AudioServicesAddSystemSoundCompletion(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback function that is invoked when a specified system sound finishes playing.

## Declaration

```swift
func AudioServicesAddSystemSoundCompletion(_ inSystemSoundID: SystemSoundID, _ inRunLoop: CFRunLoop?, _ inRunLoopMode: CFString?, _ inCompletionRoutine: AudioServicesSystemSoundCompletionProc, _ inClientData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inSystemSoundID`: The system sound that your callback function is to respond to.
- `inRunLoop`: The run loop in which the callback function should run. Pass `NULL` to use the main run loop.
- `inRunLoopMode`: The mode for the run loop in which the callback functions should run. Pass `NULL` to use the default run loop mode.
- `inCompletionRoutine`: The callback function to be invoked when the specified system sound has finished playing.
- `inClientData`: Application data to be passed to your callback function when it is invoked. Can be `NULL`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Because a system sound may play for several seconds, you might want to know when it has finished playing. For example, you may want to wait until a system sound has finished playing before you play another sound.

## See Also

### Related Documentation

- [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.

### Adding and Removing System Sound Callbacks

- [AudioServicesRemoveSystemSoundCompletion(\_:)](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

# AudioServicesAddSystemSoundCompletion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback function that is invoked when a specified system sound finishes playing.

## Declaration

```objectivec
extern OSStatus AudioServicesAddSystemSoundCompletion(SystemSoundID inSystemSoundID, CFRunLoopRef inRunLoop, CFStringRef inRunLoopMode, AudioServicesSystemSoundCompletionProc inCompletionRoutine, void *inClientData);
```

## Parameters

- `inSystemSoundID`: The system sound that your callback function is to respond to.
- `inRunLoop`: The run loop in which the callback function should run. Pass `NULL` to use the main run loop.
- `inRunLoopMode`: The mode for the run loop in which the callback functions should run. Pass `NULL` to use the default run loop mode.
- `inCompletionRoutine`: The callback function to be invoked when the specified system sound has finished playing.
- `inClientData`: Application data to be passed to your callback function when it is invoked. Can be `NULL`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Because a system sound may play for several seconds, you might want to know when it has finished playing. For example, you may want to wait until a system sound has finished playing before you play another sound.

## See Also

### Related Documentation

- [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.

### Adding and Removing System Sound Callbacks

- [AudioServicesRemoveSystemSoundCompletion](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

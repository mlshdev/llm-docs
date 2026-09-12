> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicompletionprocump](https://developer.apple.com/documentation/coremidi/midicompletionprocump)

# MIDICompletionProcUMP (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.

## Declaration

```swift
typealias MIDICompletionProcUMP = (UnsafeMutablePointer<MIDISysexSendRequestUMP>) -> Void
```

## Parameters

- `request`: The completed or aborted request.

## See Also

### Configuring and inspecting a request

- [destination](midisysexsendrequestump/destination.md): The endpoint to send the event to.
- [words](midisysexsendrequestump/words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](midisysexsendrequestump/wordstosend.md): A counter of the number of words to send.
- [complete](midisysexsendrequestump/complete.md): A Boolean value that indicates whether the transmission is complete.
- [completionProc](midisysexsendrequestump/completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequestump/completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

# MIDICompletionProcUMP (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.

## Declaration

```objectivec
typedef void (*)(struct MIDISysexSendRequestUMP *) MIDICompletionProcUMP;
```

## Parameters

- `request`: The completed or aborted request.

## See Also

### Configuring and inspecting a request

- [destination](midisysexsendrequestump/destination.md): The endpoint to send the event to.
- [words](midisysexsendrequestump/words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](midisysexsendrequestump/wordstosend.md): A counter of the number of words to send.
- [complete](midisysexsendrequestump/complete.md): A Boolean value that indicates whether the transmission is complete.
- [completionProc](midisysexsendrequestump/completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequestump/completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup](midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

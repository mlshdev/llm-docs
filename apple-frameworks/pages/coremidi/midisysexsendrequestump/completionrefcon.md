> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequestump/completionrefcon](https://developer.apple.com/documentation/coremidi/midisysexsendrequestump/completionrefcon)

# completionRefCon (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Data to pass to the completion function.

## Declaration

```swift
var completionRefCon: UnsafeMutableRawPointer?
```

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

# completionRefCon (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Data to pass to the completion function.

## Declaration

```objectivec
void * completionRefCon;
```

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [MIDIEventPacketSysexBytesForGroup](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

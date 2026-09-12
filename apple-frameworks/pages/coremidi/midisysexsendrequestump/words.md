> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequestump/words](https://developer.apple.com/documentation/coremidi/midisysexsendrequestump/words)

# words (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the event to send, which the system advances as it sends the data.

## Declaration

```swift
var words: UnsafeMutablePointer<UInt32>
```

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

# words (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the event to send, which the system advances as it sends the data.

## Declaration

```objectivec
UInt32 * words;
```

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

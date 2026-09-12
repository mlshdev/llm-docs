> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequestump/complete](https://developer.apple.com/documentation/coremidi/midisysexsendrequestump/complete)

# complete (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the transmission is complete.

## Declaration

```swift
var complete: DarwinBoolean
```

<a id="Discussion"></a>

## Discussion

Set this value to `true` at any time to abort transmission. The implementation sets the value to `true` after it sends all data.

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

# complete (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the transmission is complete.

## Declaration

```objectivec
Boolean complete;
```

<a id="Discussion"></a>

## Discussion

Set this value to `true` at any time to abort transmission. The implementation sets the value to `true` after it sends all data.

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](wordstosend.md): A counter of the number of words to send.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

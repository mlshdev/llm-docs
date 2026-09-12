> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequestump/wordstosend](https://developer.apple.com/documentation/coremidi/midisysexsendrequestump/wordstosend)

# wordsToSend (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A counter of the number of words to send.

## Declaration

```swift
var wordsToSend: UInt32
```

<a id="Discussion"></a>

## Discussion

Initially, the number of words to send. [MIDISendUMPSysex(\_:)](../midisendumpsysex%28__%29.md) decrements this counter as it sends the data.

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

# wordsToSend (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A counter of the number of words to send.

## Declaration

```objectivec
UInt32 wordsToSend;
```

<a id="Discussion"></a>

## Discussion

Initially, the number of words to send. [MIDISendUMPSysex](../midisendumpsysex%28__%29.md) decrements this counter as it sends the data.

## See Also

### Configuring and inspecting a request

- [destination](destination.md): The endpoint to send the event to.
- [words](words.md): A pointer to the event to send, which the system advances as it sends the data.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](../midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup](../midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

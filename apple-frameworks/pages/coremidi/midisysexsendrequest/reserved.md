> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest/reserved](https://developer.apple.com/documentation/coremidi/midisysexsendrequest/reserved)

# reserved (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A field that’s reserved for future use.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8)
```

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.

# reserved (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A field that’s reserved for future use.

## Declaration

```objectivec
Byte reserved[3];
```

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest/completionrefcon](https://developer.apple.com/documentation/coremidi/midisysexsendrequest/completionrefcon)

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

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [reserved](reserved.md): A field that’s reserved for future use.

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

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [reserved](reserved.md): A field that’s reserved for future use.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest/complete](https://developer.apple.com/documentation/coremidi/midisysexsendrequest/complete)

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

Set this value to `true` at any time to abort transmission. The implementation sets the value to `true` after it sends all bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

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

Set this value to `true` at any time to abort transmission. The implementation sets the value to `true` after it sends all bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

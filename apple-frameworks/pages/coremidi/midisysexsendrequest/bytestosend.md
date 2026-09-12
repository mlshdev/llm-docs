> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest/bytestosend](https://developer.apple.com/documentation/coremidi/midisysexsendrequest/bytestosend)

# bytesToSend (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of bytes to send.

## Declaration

```swift
var bytesToSend: UInt32
```

<a id="Discussion"></a>

## Discussion

Initially, the number of bytes to send. [MIDISendSysex(\_:)](../midisendsysex%28__%29.md) decrements this counter as it sends bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

# bytesToSend (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of bytes to send.

## Declaration

```objectivec
UInt32 bytesToSend;
```

<a id="Discussion"></a>

## Discussion

Initially, the number of bytes to send. [MIDISendSysex](../midisendsysex%28__%29.md) decrements this counter as it sends bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [data](data.md): The request’s data.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

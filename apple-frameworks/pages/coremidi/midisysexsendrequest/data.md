> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest/data](https://developer.apple.com/documentation/coremidi/midisysexsendrequest/data)

# data (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The request’s data.

## Declaration

```swift
var data: UnsafePointer<UInt8>
```

<a id="Discussion"></a>

## Discussion

Initially, the value is a pointer to the System Exclusive (SysEx) event to send. [MIDISendSysex(\_:)](../midisendsysex%28__%29.md) advances this pointer as it sends bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

# data (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The request’s data.

## Declaration

```objectivec
const Byte * data;
```

<a id="Discussion"></a>

## Discussion

Initially, the value is a pointer to the System Exclusive (SysEx) event to send. [MIDISendSysex](../midisendsysex%28__%29.md) advances this pointer as it sends bytes.

## See Also

### Configuring a request

- [destination](destination.md): The endpoint to send the event to.
- [bytesToSend](bytestosend.md): The number of bytes to send.
- [complete](complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](../midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](completionrefcon.md): Data to pass to the completion function.
- [reserved](reserved.md): A field that’s reserved for future use.

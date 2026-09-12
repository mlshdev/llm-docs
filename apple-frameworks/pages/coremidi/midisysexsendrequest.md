> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequest](https://developer.apple.com/documentation/coremidi/midisysexsendrequest)

# MIDISysexSendRequest (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A request to asynchronously send a single system-exclusive (SysEx) event to a destination.

## Declaration

```swift
struct MIDISysexSendRequest
```

## Topics

### Creating a request

- [init(destination:data:bytesToSend:complete:reserved:completionProc:completionRefCon:)](midisysexsendrequest/init%28destination_data_bytestosend_complete_reserved_completionproc_completionrefcon_%29.md): Creates a new single system-exclusive (SysEx) event request.

### Configuring a request

- [destination](midisysexsendrequest/destination.md): The endpoint to send the event to.
- [data](midisysexsendrequest/data.md): The request’s data.
- [bytesToSend](midisysexsendrequest/bytestosend.md): The number of bytes to send.
- [complete](midisysexsendrequest/complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](midisysexsendrequest/completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequest/completionrefcon.md): Data to pass to the completion function.
- [reserved](midisysexsendrequest/reserved.md): A field that’s reserved for future use.

### Sending a request

- [MIDISendSysex(\_:)](midisendsysex%28__%29.md): Asynchronously sends a single system-exclusive (SysEx) event.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### I/O management

- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput(\_:)](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart()](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

# MIDISysexSendRequest (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A request to asynchronously send a single system-exclusive (SysEx) event to a destination.

## Declaration

```objectivec
struct MIDISysexSendRequest;
```

## Topics

### Configuring a request

- [destination](midisysexsendrequest/destination.md): The endpoint to send the event to.
- [data](midisysexsendrequest/data.md): The request’s data.
- [bytesToSend](midisysexsendrequest/bytestosend.md): The number of bytes to send.
- [complete](midisysexsendrequest/complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProc](midicompletionproc.md): A function the system calls after it completely sends a system-exclusive (SysEx) event.
- [completionProc](midisysexsendrequest/completionproc.md): A function that the system calls after it sends all bytes for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequest/completionrefcon.md): Data to pass to the completion function.
- [reserved](midisysexsendrequest/reserved.md): A field that’s reserved for future use.

### Sending a request

- [MIDISendSysex](midisendsysex%28__%29.md): Asynchronously sends a single system-exclusive (SysEx) event.

## See Also

### I/O management

- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

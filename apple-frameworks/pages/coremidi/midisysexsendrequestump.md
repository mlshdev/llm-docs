> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexsendrequestump](https://developer.apple.com/documentation/coremidi/midisysexsendrequestump)

# MIDISysexSendRequestUMP (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.

## Declaration

```swift
struct MIDISysexSendRequestUMP
```

## Topics

### Creating a request

- [init(destination:words:wordsToSend:complete:completionProc:completionRefCon:)](midisysexsendrequestump/init%28destination_words_wordstosend_complete_completionproc_completionrefcon_%29.md): Creates a new single universal MIDI packet (UMP) system-exclusive (SysEx) event request.

### Configuring and inspecting a request

- [destination](midisysexsendrequestump/destination.md): The endpoint to send the event to.
- [words](midisysexsendrequestump/words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](midisysexsendrequestump/wordstosend.md): A counter of the number of words to send.
- [complete](midisysexsendrequestump/complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](midisysexsendrequestump/completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequestump/completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup(\_:\_:\_:)](midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

### Sending a request

- [MIDISendUMPSysex(\_:)](midisendumpsysex%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.
- [MIDISendUMPSysex8(\_:)](midisendumpsysex8%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput(\_:)](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart()](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

# MIDISysexSendRequestUMP (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.

## Declaration

```objectivec
struct MIDISysexSendRequestUMP;
```

## Topics

### Configuring and inspecting a request

- [destination](midisysexsendrequestump/destination.md): The endpoint to send the event to.
- [words](midisysexsendrequestump/words.md): A pointer to the event to send, which the system advances as it sends the data.
- [wordsToSend](midisysexsendrequestump/wordstosend.md): A counter of the number of words to send.
- [complete](midisysexsendrequestump/complete.md): A Boolean value that indicates whether the transmission is complete.
- [MIDICompletionProcUMP](midicompletionprocump.md): A function the system calls after it completely sends a UMP system-exclusive (SysEx) or SysEx 8-bit event.
- [completionProc](midisysexsendrequestump/completionproc.md): A function that the system calls after it sends all data for the request, or after the client marks the request as complete.
- [completionRefCon](midisysexsendrequestump/completionrefcon.md): Data to pass to the completion function.
- [MIDIEventPacketSysexBytesForGroup](midieventpacketsysexbytesforgroup%28______%29.md): Gets MIDI 1.0 system-exclusive (SysEx) bytes on the indicated group.

### Sending a request

- [MIDISendUMPSysex](midisendumpsysex%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.
- [MIDISendUMPSysex8](midisendumpsysex8%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

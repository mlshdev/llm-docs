> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiioerrornotification](https://developer.apple.com/documentation/coremidi/midiioerrornotification)

# MIDIIOErrorNotification (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A general I/O error notification.

## Declaration

```swift
struct MIDIIOErrorNotification
```

## Topics

### Creating an error notification

- [init()](midiioerrornotification/init%28%29.md)
- [init(messageID:messageSize:driverDevice:errorCode:)](midiioerrornotification/init%28messageid_messagesize_driverdevice_errorcode_%29.md)

### Inspecting an error notification

- [messageID](midiioerrornotification/messageid.md): The type of message.
- [messageSize](midiioerrornotification/messagesize.md): The size of the message.
- [driverDevice](midiioerrornotification/driverdevice.md): The device with an I/O error.
- [errorCode](midiioerrornotification/errorcode.md): The error code of the generated error.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput(\_:)](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart()](midirestart%28%29.md): Stops and restarts MIDI I/O.

# MIDIIOErrorNotification (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A general I/O error notification.

## Declaration

```objectivec
struct MIDIIOErrorNotification;
```

## Topics

### Inspecting an error notification

- [messageID](midiioerrornotification/messageid.md): The type of message.
- [messageSize](midiioerrornotification/messagesize.md): The size of the message.
- [driverDevice](midiioerrornotification/driverdevice.md): The device with an I/O error.
- [errorCode](midiioerrornotification/errorcode.md): The error code of the generated error.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart](midirestart%28%29.md): Stops and restarts MIDI I/O.

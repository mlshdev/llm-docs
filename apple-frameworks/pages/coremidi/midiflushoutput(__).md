> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiflushoutput(_:)](https://developer.apple.com/documentation/coremidi/midiflushoutput(_:))

# MIDIFlushOutput(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Cancels all pending events that were previously scheduled to send.

## Declaration

```swift
func MIDIFlushOutput(_ dest: MIDIEndpointRef) -> OSStatus
```

## Parameters

- `dest`: The destination with pending events to cancel. If [nil](../objectivec/nil-227m0.md), the operation applies to all destinations.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIRestart()](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

# MIDIFlushOutput (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Cancels all pending events that were previously scheduled to send.

## Declaration

```objectivec
extern OSStatus MIDIFlushOutput(MIDIEndpointRef dest);
```

## Parameters

- `dest`: The destination with pending events to cancel. If [nil](../objectivec/nil-227m0.md), the operation applies to all destinations.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIRestart](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

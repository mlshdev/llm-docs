> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midirestart()](https://developer.apple.com/documentation/coremidi/midirestart())

# MIDIRestart() (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Stops and restarts MIDI I/O.

## Declaration

```swift
func MIDIRestart() -> OSStatus
```

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Call this function to force Core MIDI to ask its drivers to rescan for hardware.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput(\_:)](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

# MIDIRestart (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Stops and restarts MIDI I/O.

## Declaration

```objectivec
extern OSStatus MIDIRestart();
```

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Call this function to force Core MIDI to ask its drivers to rescan for hardware.

## See Also

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

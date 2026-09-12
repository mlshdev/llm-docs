> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisendumpsysex8(_:)](https://developer.apple.com/documentation/coremidi/midisendumpsysex8(_:))

# MIDISendUMPSysex8(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

## Declaration

```swift
func MIDISendUMPSysex8(_ umpRequest: UnsafeMutablePointer<MIDISysexSendRequestUMP>) -> OSStatus
```

## Parameters

- `umpRequest`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The request’s [data](midisysexsendrequest/data.md) needs to point to a single MIDI SysEx 8-bit message, or portion thereof.

## See Also

### Sending a request

- [MIDISendUMPSysex(\_:)](midisendumpsysex%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.

# MIDISendUMPSysex8 (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

## Declaration

```objectivec
extern OSStatus MIDISendUMPSysex8(MIDISysexSendRequestUMP *umpRequest);
```

## Parameters

- `umpRequest`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The request’s [data](midisysexsendrequest/data.md) needs to point to a single MIDI SysEx 8-bit message, or portion thereof.

## See Also

### Sending a request

- [MIDISendUMPSysex](midisendumpsysex%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisendumpsysex(_:)](https://developer.apple.com/documentation/coremidi/midisendumpsysex(_:))

# MIDISendUMPSysex(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.

## Declaration

```swift
func MIDISendUMPSysex(_ umpRequest: UnsafeMutablePointer<MIDISysexSendRequestUMP>) -> OSStatus
```

## Parameters

- `umpRequest`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The request’s [words](midisysexsendrequestump/words.md) needs to point to a single MIDI SysEx message, or portion thereof.

## See Also

### Sending a request

- [MIDISendUMPSysex8(\_:)](midisendumpsysex8%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

# MIDISendUMPSysex (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event.

## Declaration

```objectivec
extern OSStatus MIDISendUMPSysex(MIDISysexSendRequestUMP *umpRequest);
```

## Parameters

- `umpRequest`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The request’s [words](midisysexsendrequestump/words.md) needs to point to a single MIDI SysEx message, or portion thereof.

## See Also

### Sending a request

- [MIDISendUMPSysex8](midisendumpsysex8%28__%29.md): Asynchronously sends a single universal MIDI packet (UMP) system-exclusive (SysEx) event with an 8-bit message.

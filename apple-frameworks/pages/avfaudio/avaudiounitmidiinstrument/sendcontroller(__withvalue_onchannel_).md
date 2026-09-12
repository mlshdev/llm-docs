> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:)](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:))

# sendController(\_:withValue:onChannel:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI controller event to the instrument.

## Declaration

```swift
func sendController(_ controller: UInt8, withValue value: UInt8, onChannel channel: UInt8)
```

## Parameters

- `controller`: Specifies a standard MIDI controller number. The valid range is `0` to `127`.
- `value`: Value for the controller. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Sending information to the MIDI instrument

- [sendMIDIEvent(\_:data1:)](sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent(\_:data1:data2:)](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent(\_:)](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend(\_:onChannel:)](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure(\_:onChannel:)](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressure(forKey:withValue:onChannel:)](sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange(\_:onChannel:)](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange(\_:bankMSB:bankLSB:onChannel:)](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [send(\_:)](send%28__%29.md): Sends a MIDI event list to the instrument.

# sendController:withValue:onChannel: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI controller event to the instrument.

## Declaration

```objectivec
- (void) sendController:(uint8_t) controller withValue:(uint8_t) value onChannel:(uint8_t) channel;
```

## Parameters

- `controller`: Specifies a standard MIDI controller number. The valid range is `0` to `127`.
- `value`: Value for the controller. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Sending information to the MIDI instrument

- [sendMIDIEvent:data1:](sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent:data1:data2:](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent:](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend:onChannel:](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure:onChannel:](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressureForKey:withValue:onChannel:](sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange:onChannel:](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange:bankMSB:bankLSB:onChannel:](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendMIDIEventList:](send%28__%29.md): Sends a MIDI event list to the instrument.

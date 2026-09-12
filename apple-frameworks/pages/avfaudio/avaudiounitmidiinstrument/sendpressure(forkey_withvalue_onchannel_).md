> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument/sendpressure(forkey:withvalue:onchannel:)](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendpressure(forkey:withvalue:onchannel:))

# sendPressure(forKey:withValue:onChannel:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI Polyphonic key pressure event to the instrument.

## Declaration

```swift
func sendPressure(forKey key: UInt8, withValue value: UInt8, onChannel channel: UInt8)
```

## Parameters

- `key`: The key (note) number to which the pressure event applies. The valid range is `0` to `127`.
- `value`: The value of the pressure. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Sending information to the MIDI instrument

- [sendController(\_:withValue:onChannel:)](sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent(\_:data1:)](sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent(\_:data1:data2:)](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent(\_:)](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend(\_:onChannel:)](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure(\_:onChannel:)](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendProgramChange(\_:onChannel:)](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange(\_:bankMSB:bankLSB:onChannel:)](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [send(\_:)](send%28__%29.md): Sends a MIDI event list to the instrument.

# sendPressureForKey:withValue:onChannel: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI Polyphonic key pressure event to the instrument.

## Declaration

```objectivec
- (void) sendPressureForKey:(uint8_t) key withValue:(uint8_t) value onChannel:(uint8_t) channel;
```

## Parameters

- `key`: The key (note) number to which the pressure event applies. The valid range is `0` to `127`.
- `value`: The value of the pressure. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Sending information to the MIDI instrument

- [sendController:withValue:onChannel:](sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent:data1:](sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent:data1:data2:](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent:](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend:onChannel:](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure:onChannel:](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendProgramChange:onChannel:](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange:bankMSB:bankLSB:onChannel:](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendMIDIEventList:](send%28__%29.md): Sends a MIDI event list to the instrument.

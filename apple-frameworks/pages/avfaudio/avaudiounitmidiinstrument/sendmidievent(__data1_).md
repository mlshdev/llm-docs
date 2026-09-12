> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument/sendmidievent(_:data1:)](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendmidievent(_:data1:))

# sendMIDIEvent(\_:data1:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI event which contains one data byte to the instrument.

## Declaration

```swift
func sendMIDIEvent(_ midiStatus: UInt8, data1: UInt8)
```

## Parameters

- `midiStatus`: The status value of the MIDI event.
- `data1`: The data byte of the MIDI event.

## See Also

### Sending information to the MIDI instrument

- [sendController(\_:withValue:onChannel:)](sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent(\_:data1:data2:)](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent(\_:)](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend(\_:onChannel:)](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure(\_:onChannel:)](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressure(forKey:withValue:onChannel:)](sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange(\_:onChannel:)](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange(\_:bankMSB:bankLSB:onChannel:)](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [send(\_:)](send%28__%29.md): Sends a MIDI event list to the instrument.

# sendMIDIEvent:data1: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI event which contains one data byte to the instrument.

## Declaration

```objectivec
- (void) sendMIDIEvent:(uint8_t) midiStatus data1:(uint8_t) data1;
```

## Parameters

- `midiStatus`: The status value of the MIDI event.
- `data1`: The data byte of the MIDI event.

## See Also

### Sending information to the MIDI instrument

- [sendController:withValue:onChannel:](sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent:data1:data2:](sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent:](sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend:onChannel:](sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure:onChannel:](sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressureForKey:withValue:onChannel:](sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange:onChannel:](sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange:bankMSB:bankLSB:onChannel:](sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendMIDIEventList:](send%28__%29.md): Sends a MIDI event list to the instrument.

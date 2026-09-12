> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument)

# AVAudioUnitMIDIInstrument (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that represents music devices or remote instruments.

## Declaration

```swift
class AVAudioUnitMIDIInstrument
```

<a id="overview"></a>

## Overview

Use an [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md) in a chain that processes real-time (live) input and has the general concept of music events; for example, notes.

## Topics

### Creating a MIDI instrument

- [init(audioComponentDescription:)](avaudiounitmidiinstrument/init%28audiocomponentdescription_%29.md): Creates a MIDI instrument audio unit with the component description you specify.

### Sending information to the MIDI instrument

- [sendController(\_:withValue:onChannel:)](avaudiounitmidiinstrument/sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent(\_:data1:)](avaudiounitmidiinstrument/sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent(\_:data1:data2:)](avaudiounitmidiinstrument/sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent(\_:)](avaudiounitmidiinstrument/sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend(\_:onChannel:)](avaudiounitmidiinstrument/sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure(\_:onChannel:)](avaudiounitmidiinstrument/sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressure(forKey:withValue:onChannel:)](avaudiounitmidiinstrument/sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange(\_:onChannel:)](avaudiounitmidiinstrument/sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange(\_:bankMSB:bankLSB:onChannel:)](avaudiounitmidiinstrument/sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [send(\_:)](avaudiounitmidiinstrument/send%28__%29.md): Sends a MIDI event list to the instrument.

### Starting and stopping play

- [startNote(\_:withVelocity:onChannel:)](avaudiounitmidiinstrument/startnote%28__withvelocity_onchannel_%29.md): Sends a MIDI Note On event to the instrument.
- [stopNote(\_:onChannel:)](avaudiounitmidiinstrument/stopnote%28__onchannel_%29.md): Sends a MIDI Note Off event to the instrument.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitSampler](avaudiounitsampler.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioUnitMIDIInstrument (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that represents music devices or remote instruments.

## Declaration

```objectivec
@interface AVAudioUnitMIDIInstrument : AVAudioUnit
```

<a id="overview"></a>

## Overview

Use an [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md) in a chain that processes real-time (live) input and has the general concept of music events; for example, notes.

## Topics

### Creating a MIDI instrument

- [initWithAudioComponentDescription:](avaudiounitmidiinstrument/init%28audiocomponentdescription_%29.md): Creates a MIDI instrument audio unit with the component description you specify.

### Sending information to the MIDI instrument

- [sendController:withValue:onChannel:](avaudiounitmidiinstrument/sendcontroller%28__withvalue_onchannel_%29.md): Sends a MIDI controller event to the instrument.
- [sendMIDIEvent:data1:](avaudiounitmidiinstrument/sendmidievent%28__data1_%29.md): Sends a MIDI event which contains one data byte to the instrument.
- [sendMIDIEvent:data1:data2:](avaudiounitmidiinstrument/sendmidievent%28__data1_data2_%29.md): Sends a MIDI event which contains two data bytes to the instrument.
- [sendMIDISysExEvent:](avaudiounitmidiinstrument/sendmidisysexevent%28__%29.md): Sends a MIDI System Exclusive event to the instrument.
- [sendPitchBend:onChannel:](avaudiounitmidiinstrument/sendpitchbend%28__onchannel_%29.md): Sends a MIDI Pitch Bend event to the instrument.
- [sendPressure:onChannel:](avaudiounitmidiinstrument/sendpressure%28__onchannel_%29.md): Sends a MIDI channel pressure event to the instrument.
- [sendPressureForKey:withValue:onChannel:](avaudiounitmidiinstrument/sendpressure%28forkey_withvalue_onchannel_%29.md): Sends a MIDI Polyphonic key pressure event to the instrument.
- [sendProgramChange:onChannel:](avaudiounitmidiinstrument/sendprogramchange%28__onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendProgramChange:bankMSB:bankLSB:onChannel:](avaudiounitmidiinstrument/sendprogramchange%28__bankmsb_banklsb_onchannel_%29.md): Sends MIDI Program Change and Bank Select events to the instrument.
- [sendMIDIEventList:](avaudiounitmidiinstrument/send%28__%29.md): Sends a MIDI event list to the instrument.

### Starting and stopping play

- [startNote:withVelocity:onChannel:](avaudiounitmidiinstrument/startnote%28__withvelocity_onchannel_%29.md): Sends a MIDI Note On event to the instrument.
- [stopNote:onChannel:](avaudiounitmidiinstrument/stopnote%28__onchannel_%29.md): Sends a MIDI Note Off event to the instrument.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitSampler](avaudiounitsampler.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

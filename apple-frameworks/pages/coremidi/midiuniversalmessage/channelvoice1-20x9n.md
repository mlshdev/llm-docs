> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiuniversalmessage/channelvoice1-20x9n](https://developer.apple.com/documentation/coremidi/midiuniversalmessage/channelvoice1-20x9n)

# channelVoice1

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when type is kMIDIMessageTypeChannelVoice1

## Declaration

```objectivec
struct { ... } channelVoice1;
```

## Topics

### Instance Properties

- [channel](channelvoice1-20x9n/channel.md): MIDI channel 0-15
- [channelPressure](channelvoice1-20x9n/channelpressure.md): 7 bit channel pressure, active when status is kMIDICVStatusChannelPressure
- [controlChange](channelvoice1-20x9n/controlchange.md): active when status is kMIDICVStatusControlChange
- [note](channelvoice1-20x9n/note.md): active when status is kMIDICVStatusNoteOff or kMIDICVStatusNoteOn
- [pitchBend](channelvoice1-20x9n/pitchbend.md): 7 bit pitch bend active when status is kMIDICVStatusPitchBend
- [polyPressure](channelvoice1-20x9n/polypressure.md): active when status is kMIDICVStatusPolyPressure
- [program](channelvoice1-20x9n/program.md): 7 bit program nr, active when status is kMIDICVStatusProgramChange
- [reserved](channelvoice1-20x9n/reserved.md)
- [status](channelvoice1-20x9n/status.md): determines which variant is active

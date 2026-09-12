> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiuniversalmessage/channelvoice2-20x9k](https://developer.apple.com/documentation/coremidi/midiuniversalmessage/channelvoice2-20x9k)

# channelVoice2

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when type is kMIDIMessageTypeChannelVoice2

## Declaration

```objectivec
struct { ... } channelVoice2;
```

## Topics

### Instance Properties

- [channel](channelvoice2-20x9k/channel.md): MIDI channel
- [channelPressure](channelvoice2-20x9k/channelpressure.md): active when status is kMIDICVStatusChannelPressure
- [controlChange](channelvoice2-20x9k/controlchange.md): active when status is kMIDICVStatusControlChange
- [controller](channelvoice2-20x9k/controller.md): active when status is any of kMIDICVStatusRegisteredControl, kMIDICVStatusAssignableControl, kMIDICVStatusRelRegisteredControl, or kMIDICVStatusRelAssignableControl
- [note](channelvoice2-20x9k/note.md): active when status is kMIDICVStatusNoteOff or kMIDICVStatusNoteOn
- [perNoteController](channelvoice2-20x9k/pernotecontroller.md): active when status is kMIDICVStatusRegisteredPNC or kMIDICVStatusAssignablePNC
- [perNoteManagement](channelvoice2-20x9k/pernotemanagement.md): active when status is kMIDICVStatusPerNoteMgmt
- [perNotePitchBend](channelvoice2-20x9k/pernotepitchbend.md): active when status is kMIDICVStatusPerNotePitchBend
- [pitchBend](channelvoice2-20x9k/pitchbend.md): active when status is kMIDICVStatusPitchBend
- [polyPressure](channelvoice2-20x9k/polypressure.md): active when status is kMIDICVStatusPolyPressure
- [programChange](channelvoice2-20x9k/programchange.md): active when status is kMIDICVStatusProgramChange
- [reserved](channelvoice2-20x9k/reserved.md)
- [status](channelvoice2-20x9k/status.md): determines which variant is active

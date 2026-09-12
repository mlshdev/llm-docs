> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiuniversalmessage/system-8xb4e](https://developer.apple.com/documentation/coremidi/midiuniversalmessage/system-8xb4e)

# system

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when type is kMIDIMessageTypeSystem

## Declaration

```objectivec
struct { ... } system;
```

## Topics

### Instance Properties

- [songPositionPointer](system-8xb4e/songpositionpointer.md): active when status is kMIDIStatusSongPosPointer
- [songSelect](system-8xb4e/songselect.md): active when status is kMIDIStatusSongSelect
- [status](system-8xb4e/status.md): determines which variant is active
- [timeCode](system-8xb4e/timecode.md): active when status is kMIDIStatusMTC

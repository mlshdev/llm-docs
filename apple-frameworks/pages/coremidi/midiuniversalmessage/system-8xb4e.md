> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiuniversalmessage/system-8xb4e

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

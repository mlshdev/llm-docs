> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiuniversalmessage/data128-43npl/sysex8

# sysex8

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when status any of kMIDISysExStatusComplete, kMIDISysExStatusStart, kMIDISysExStatusContinue, or kMIDISysExStatusEnd

## Declaration

```objectivec
struct { ... } sysex8;
```

## Topics

### Instance Properties

- [byteCount](sysex8/bytecount.md): byte count of data including stream ID (1-14 bytes)
- [data](sysex8/data.md)
- [reserved](sysex8/reserved.md)
- [streamID](sysex8/streamid.md)

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiuniversalmessage/data128-43npl

# data128

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when type is kMIDIMessageTypeData128

## Declaration

```objectivec
struct { ... } data128;
```

## Topics

### Instance Properties

- [mixedDataSet](data128-43npl/mixeddataset.md): active when status is kMIDISysExStatusMixedDataSetHeader or kMIDISysExStatusMixedDataSetPayload
- [status](data128-43npl/status.md): determines which variant is active
- [sysex8](data128-43npl/sysex8.md): active when status any of kMIDISysExStatusComplete, kMIDISysExStatusStart, kMIDISysExStatusContinue, or kMIDISysExStatusEnd

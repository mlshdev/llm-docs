> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiuniversalmessage/data128-43npl](https://developer.apple.com/documentation/coremidi/midiuniversalmessage/data128-43npl)

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

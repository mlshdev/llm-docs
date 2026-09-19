> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiuniversalmessage/channelvoice2-20x9k/controller

# controller

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when status is any of kMIDICVStatusRegisteredControl, kMIDICVStatusAssignableControl, kMIDICVStatusRelRegisteredControl, or kMIDICVStatusRelAssignableControl

## Declaration

```objectivec
struct { ... } controller;
```

## Topics

### Instance Properties

- [bank](controller/bank.md): 7 bit bank
- [data](controller/data.md): controller data
- [index](controller/index.md): 7 bit controller number

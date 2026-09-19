> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiuniversalmessage/utility-63fq7

# utility

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

active when type is kMIDIMessageTypeUtility

## Declaration

```objectivec
struct { ... } utility;
```

## Topics

### Instance Properties

- [jitterReductionClock](utility-63fq7/jitterreductionclock.md): active when status is kMIDIUtilityStatusJitterReductionClock
- [jitterReductionTimestamp](utility-63fq7/jitterreductiontimestamp.md): active when status is kMIDIUtilityStatusJitterReductionTimestamp
- [status](utility-63fq7/status.md): determines which variant is active

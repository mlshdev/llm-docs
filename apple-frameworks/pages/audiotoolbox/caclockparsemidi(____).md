> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/caclockparsemidi(_:_:)

# CAClockParseMIDI(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CAClockParseMIDI(_ inCAClock: CAClockRef, _ inMIDIPacketList: UnsafePointer<MIDIPacketList>) -> OSStatus
```

# CAClockParseMIDI (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
extern OSStatus CAClockParseMIDI(CAClockRef inCAClock, const struct MIDIPacketList *inMIDIPacketList);
```

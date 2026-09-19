> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/aumidieventlistblock

# AUMIDIEventListBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AUMIDIEventListBlock = (AUEventSampleTime, UInt8, UnsafePointer<MIDIEventList>) -> OSStatus
```

## See Also

### Data Types

- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)
- [CallHostBlock](callhostblock.md)

# AUMIDIEventListBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (^)(long long, unsigned char, const struct MIDIEventList *) __attribute__((nonblocking)) AUMIDIEventListBlock;
```

## See Also

### Data Types

- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)
- [CallHostBlock](callhostblock.md)

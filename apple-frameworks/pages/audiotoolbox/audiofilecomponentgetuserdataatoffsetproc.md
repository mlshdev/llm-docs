> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetuserdataatoffsetproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetuserdataatoffsetproc)

# AudioFileComponentGetUserDataAtOffsetProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentGetUserDataAtOffsetProc = (UnsafeMutableRawPointer, UInt32, UInt32, Int64, UnsafeMutablePointer<UInt32>, UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)
- [CallHostBlock](callhostblock.md)

# AudioFileComponentGetUserDataAtOffsetProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, long long, unsigned int *, void *) AudioFileComponentGetUserDataAtOffsetProc;
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)
- [CallHostBlock](callhostblock.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetuserdatasize64proc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetuserdatasize64proc)

# AudioFileComponentGetUserDataSize64Proc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentGetUserDataSize64Proc = (UnsafeMutableRawPointer, UInt32, UInt32, UnsafeMutablePointer<UInt64>) -> OSStatus
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [CallHostBlock](callhostblock.md)

# AudioFileComponentGetUserDataSize64Proc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, unsigned long long *) AudioFileComponentGetUserDataSize64Proc;
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [CallHostBlock](callhostblock.md)

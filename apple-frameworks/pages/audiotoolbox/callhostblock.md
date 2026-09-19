> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/callhostblock

# CallHostBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias CallHostBlock = ([AnyHashable : Any]) -> [AnyHashable : Any]
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)

# CallHostBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef NSDictionary *(^)(NSDictionary *) CallHostBlock;
```

## See Also

### Data Types

- [AUMIDIEventListBlock](aumidieventlistblock.md)
- [AudioFileComponentGetUserDataAtOffsetProc](audiofilecomponentgetuserdataatoffsetproc.md)
- [AudioFileComponentGetUserDataSize64Proc](audiofilecomponentgetuserdatasize64proc.md)

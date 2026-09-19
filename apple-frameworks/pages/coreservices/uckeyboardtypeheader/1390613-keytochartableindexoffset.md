> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/uckeyboardtypeheader/1390613-keytochartableindexoffset

# keyToCharTableIndexOffset (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer providing an offset to a structure of type [UCKeyToCharTableIndex](../uckeytochartableindex.md). The `'uchr'` resource requires a `UCKeyToCharTableIndex` structure, therefore this field must contain a non-zero value.

## Declaration

```swift
var keyToCharTableIndexOffset: UInt32
```

# keyToCharTableIndexOffset (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer providing an offset to a structure of type [UCKeyToCharTableIndex](../uckeytochartableindex.md). The `'uchr'` resource requires a `UCKeyToCharTableIndex` structure, therefore this field must contain a non-zero value.

## Declaration

```objectivec
UInt32 keyToCharTableIndexOffset;
```

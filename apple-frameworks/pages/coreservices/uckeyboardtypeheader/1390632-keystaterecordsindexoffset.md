> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/uckeyboardtypeheader/1390632-keystaterecordsindexoffset

# keyStateRecordsIndexOffset (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateRecordsIndex](../uckeystaterecordsindex.md), if such is used in the resource. This value may be 0 if no dead-key state records are included in the resource.

## Declaration

```swift
var keyStateRecordsIndexOffset: UInt32
```

# keyStateRecordsIndexOffset (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateRecordsIndex](../uckeystaterecordsindex.md), if such is used in the resource. This value may be 0 if no dead-key state records are included in the resource.

## Declaration

```objectivec
UInt32 keyStateRecordsIndexOffset;
```

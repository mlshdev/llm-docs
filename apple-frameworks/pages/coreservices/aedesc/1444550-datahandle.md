> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/aedesc/1444550-datahandle

# dataHandle (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque storage type that points to the storagefor the descriptor data. Your application doesn’t access thisdata directly—rather, it calls one of the functions [AEGetDescDataSize(\_:)](../1450119-aegetdescdatasize.md), [AEGetDescData(\_:\_:\_:)](../1444427-aegetdescdata.md), or [AEReplaceDescData(\_:\_:\_:\_:)](../1446695-aereplacedescdata.md).See [AEDataStorage](../aedatastorage.md).

## Declaration

```swift
var dataHandle: AEDataStorage!
```

# dataHandle (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque storage type that points to the storagefor the descriptor data. Your application doesn’t access thisdata directly—rather, it calls one of the functions [AEGetDescDataSize](../1450119-aegetdescdatasize.md), [AEGetDescData](../1444427-aegetdescdata.md), or [AEReplaceDescData](../1446695-aereplacedescdata.md).See [AEDataStorage](../aedatastorage.md).

## Declaration

```objectivec
AEDataStorage dataHandle;
```

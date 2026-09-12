> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystaterecordsindex](https://developer.apple.com/documentation/coreservices/uckeystaterecordsindex)

# UCKeyStateRecordsIndex (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides a count of, and offsets to, dead-key state records in a `'uchr'` resource.

## Declaration

```swift
struct UCKeyStateRecordsIndex
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateRecordsIndex` type is used in the third key mapping section of the `'uchr'` resource.

The `UCKeyStateRecordsIndex` structure is an index to dead-key state records of type  [UCKeyStateRecord](uckeystaterecord.md). Any keycode-modifier combination which initiates a dead-key state or which is a valid terminator of a dead-key state refers to one of these records, via the `UCKeyStateRecordsIndex` structure.

## Topics

### Initializers

- [init()](uckeystaterecordsindex/1444702-init.md)
- [init(keyStateRecordsIndexFormat:keyStateRecordCount:keyStateRecordOffsets:)](uckeystaterecordsindex/1449991-init.md)

### Instance Properties

- [keyStateRecordCount](uckeystaterecordsindex/1390398-keystaterecordcount.md): An unsigned 16-bit integer specifying the number of dead-key state records that are included in the resource.
- [keyStateRecordOffsets](uckeystaterecordsindex/1390490-keystaterecordoffsets.md): An array of offsets from the beginning of the resource to each of the `UCKeyStateRecord` values that follow this structure in the `'uchr'` resource.
- [keyStateRecordsIndexFormat](uckeystaterecordsindex/1390380-keystaterecordsindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyStateRecordsIndex` structure. Set to `kUCKeyStateRecordsIndexFormat`.

# UCKeyStateRecordsIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides a count of, and offsets to, dead-key state records in a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyStateRecordsIndex {
    ...
} UCKeyStateRecordsIndex;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateRecordsIndex` type is used in the third key mapping section of the `'uchr'` resource.

The `UCKeyStateRecordsIndex` structure is an index to dead-key state records of type  [UCKeyStateRecord](uckeystaterecord.md). Any keycode-modifier combination which initiates a dead-key state or which is a valid terminator of a dead-key state refers to one of these records, via the `UCKeyStateRecordsIndex` structure.

## Topics

### Instance Properties

- [keyStateRecordCount](uckeystaterecordsindex/1390398-keystaterecordcount.md): An unsigned 16-bit integer specifying the number of dead-key state records that are included in the resource.
- [keyStateRecordOffsets](uckeystaterecordsindex/1390490-keystaterecordoffsets.md): An array of offsets from the beginning of the resource to each of the `UCKeyStateRecord` values that follow this structure in the `'uchr'` resource.
- [keyStateRecordsIndexFormat](uckeystaterecordsindex/1390380-keystaterecordsindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyStateRecordsIndex` structure. Set to `kUCKeyStateRecordsIndexFormat`.

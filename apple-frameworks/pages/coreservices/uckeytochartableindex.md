> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeytochartableindex](https://developer.apple.com/documentation/coreservices/uckeytochartableindex)

# UCKeyToCharTableIndex (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides a count of, and offsets to, key-code-to-character tables in a `'uchr'` resource.

## Declaration

```swift
struct UCKeyToCharTableIndex
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyToCharTableIndex` type is used in the second key mapping section of the `'uchr'` resource. The `UCKeyToCharTableIndex` structure precedes the list of key-code-to-character tables, each of which maps a key code to a 16-bit value of type  [UCKeyOutput](uckeyoutput.md).

## Topics

### Initializers

- [init()](uckeytochartableindex/1444832-init.md)
- [init(keyToCharTableIndexFormat:keyToCharTableSize:keyToCharTableCount:keyToCharTableOffsets:)](uckeytochartableindex/1450385-init.md)

### Instance Properties

- [keyToCharTableCount](uckeytochartableindex/1390611-keytochartablecount.md): An unsigned 32-bit integer specifying the number of key-code-to-character tables, typically 6 to 12.
- [keyToCharTableIndexFormat](uckeytochartableindex/1390562-keytochartableindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyToCharTableIndex` structure. Set to `kUCKeyToCharTableIndexFormat`.
- [keyToCharTableOffsets](uckeytochartableindex/1390388-keytochartableoffsets.md): An array of offsets from the beginning of the `'uchr'` resource to each of the `UCKeyOutput` key-code-to-character tables in the `keyToCharData[]` array that follows this structure in the resource.
- [keyToCharTableSize](uckeytochartableindex/1390382-keytochartablesize.md): An unsigned 16-bit integer specifying the number of virtual key codes supported by this resource; for ADB keyboards this is 128 (with virtual key codes ranging from 0 to 127).

# UCKeyToCharTableIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides a count of, and offsets to, key-code-to-character tables in a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyToCharTableIndex {
    ...
} UCKeyToCharTableIndex;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyToCharTableIndex` type is used in the second key mapping section of the `'uchr'` resource. The `UCKeyToCharTableIndex` structure precedes the list of key-code-to-character tables, each of which maps a key code to a 16-bit value of type  [UCKeyOutput](uckeyoutput.md).

## Topics

### Instance Properties

- [keyToCharTableCount](uckeytochartableindex/1390611-keytochartablecount.md): An unsigned 32-bit integer specifying the number of key-code-to-character tables, typically 6 to 12.
- [keyToCharTableIndexFormat](uckeytochartableindex/1390562-keytochartableindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyToCharTableIndex` structure. Set to `kUCKeyToCharTableIndexFormat`.
- [keyToCharTableOffsets](uckeytochartableindex/1390388-keytochartableoffsets.md): An array of offsets from the beginning of the `'uchr'` resource to each of the `UCKeyOutput` key-code-to-character tables in the `keyToCharData[]` array that follows this structure in the resource.
- [keyToCharTableSize](uckeytochartableindex/1390382-keytochartablesize.md): An unsigned 16-bit integer specifying the number of virtual key codes supported by this resource; for ADB keyboards this is 128 (with virtual key codes ranging from 0 to 127).

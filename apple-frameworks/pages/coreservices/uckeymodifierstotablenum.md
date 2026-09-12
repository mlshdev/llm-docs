> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeymodifierstotablenum](https://developer.apple.com/documentation/coreservices/uckeymodifierstotablenum)

# UCKeyModifiersToTableNum (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Maps a modifier key combination to a particular key-code-to-character table number in a `'uchr'` resource.

## Declaration

```swift
struct UCKeyModifiersToTableNum
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyModifiersToTableNum` type is used in the first key mapping section of the `'uchr'` resource. It maps a modifier key combination to a particular key-code-to-character table number.

## Topics

### Initializers

- [init()](uckeymodifierstotablenum/1443345-init.md)
- [init(keyModifiersToTableNumFormat:defaultTableNum:modifiersCount:tableNum:)](uckeymodifierstotablenum/1444613-init.md)

### Instance Properties

- [defaultTableNum](uckeymodifierstotablenum/1390542-defaulttablenum.md): An unsigned 16-bit integer identifying the table number to use for modifier combinations that are outside of the range included in the `tableNum` field.
- [keyModifiersToTableNumFormat](uckeymodifierstotablenum/1390556-keymodifierstotablenumformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyModifiersToTableNum` structure. Set to `kUCKeyModifiersToTableNumFormat`.
- [modifiersCount](uckeymodifierstotablenum/1390509-modifierscount.md): An unsigned 32-bit integer specifying the range of modifier bit combinations for which there are entries in the `tableNum[]` field.
- [tableNum](uckeymodifierstotablenum/1390564-tablenum.md): An array of unsigned 8-bit integers that map modifier bit combinations to table numbers. These values are indexes into the `keyToCharTableOffsets` array in a [UCKeyToCharTableIndex](uckeytochartableindex.md)structure; these, in turn, are offsets to the actual key-code-to character tables, which follow the `UCKeyToCharTableIndex` structure in the `'uchr'` resource.

# UCKeyModifiersToTableNum (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Maps a modifier key combination to a particular key-code-to-character table number in a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyModifiersToTableNum {
    ...
} UCKeyModifiersToTableNum;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout (`'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyModifiersToTableNum` type is used in the first key mapping section of the `'uchr'` resource. It maps a modifier key combination to a particular key-code-to-character table number.

## Topics

### Instance Properties

- [defaultTableNum](uckeymodifierstotablenum/1390542-defaulttablenum.md): An unsigned 16-bit integer identifying the table number to use for modifier combinations that are outside of the range included in the `tableNum` field.
- [keyModifiersToTableNumFormat](uckeymodifierstotablenum/1390556-keymodifierstotablenumformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyModifiersToTableNum` structure. Set to `kUCKeyModifiersToTableNumFormat`.
- [modifiersCount](uckeymodifierstotablenum/1390509-modifierscount.md): An unsigned 32-bit integer specifying the range of modifier bit combinations for which there are entries in the `tableNum[]` field.
- [tableNum](uckeymodifierstotablenum/1390564-tablenum.md): An array of unsigned 8-bit integers that map modifier bit combinations to table numbers. These values are indexes into the `keyToCharTableOffsets` array in a [UCKeyToCharTableIndex](uckeytochartableindex.md)structure; these, in turn, are offsets to the actual key-code-to character tables, which follow the `UCKeyToCharTableIndex` structure in the `'uchr'` resource.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeysequencedataindex](https://developer.apple.com/documentation/coreservices/uckeysequencedataindex)

# UCKeySequenceDataIndex (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Contains offsets to a list of character sequences for a `'uchr'` resource.

## Declaration

```swift
struct UCKeySequenceDataIndex
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeySequenceDataIndex` type is used in the fifth key mapping section of the `'uchr'` resource.

The `UCKeySequenceDataIndex` structure contains offsets to a list of character sequences for the `'uchr'` resource. This permits a single keypress to generate a sequence of characters, or to generate a single character outside the range that can be represented directly by values of type  [UCKeyOutput](uckeyoutput.md)  or  [UCKeyCharSeq](uckeycharseq.md).

## Topics

### Initializers

- [init()](uckeysequencedataindex/1445802-init.md)
- [init(keySequenceDataIndexFormat:charSequenceCount:charSequenceOffsets:)](uckeysequencedataindex/1442334-init.md)

### Instance Properties

- [charSequenceCount](uckeysequencedataindex/1390623-charsequencecount.md): An unsigned 16-bit integer specifying the number of Unicode character sequences that follow the end of the `UCKeySequenceDataIndex` structure.
- [charSequenceOffsets](uckeysequencedataindex/1390466-charsequenceoffsets.md): An array of offsets from the beginning of the `UCKeySequenceDataIndex` structure to the Unicode character sequences that follow it. Because a given offset indicates both the beginning of a new character sequence and the end of the sequence that precedes it, the length of each sequence is determined by the difference between the offset to that sequence and the value of the next offset in the array. The array contains one more entry than the number of character sequences; the final entry is the offset to the end of the final character sequence.
- [keySequenceDataIndexFormat](uckeysequencedataindex/1390357-keysequencedataindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeySequenceDataIndex` structure. Set to `kUCKeySequenceDataIndexFormat`.

# UCKeySequenceDataIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Contains offsets to a list of character sequences for a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeySequenceDataIndex {
    ...
} UCKeySequenceDataIndex;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeySequenceDataIndex` type is used in the fifth key mapping section of the `'uchr'` resource.

The `UCKeySequenceDataIndex` structure contains offsets to a list of character sequences for the `'uchr'` resource. This permits a single keypress to generate a sequence of characters, or to generate a single character outside the range that can be represented directly by values of type  [UCKeyOutput](uckeyoutput.md)  or  [UCKeyCharSeq](uckeycharseq.md).

## Topics

### Instance Properties

- [charSequenceCount](uckeysequencedataindex/1390623-charsequencecount.md): An unsigned 16-bit integer specifying the number of Unicode character sequences that follow the end of the `UCKeySequenceDataIndex` structure.
- [charSequenceOffsets](uckeysequencedataindex/1390466-charsequenceoffsets.md): An array of offsets from the beginning of the `UCKeySequenceDataIndex` structure to the Unicode character sequences that follow it. Because a given offset indicates both the beginning of a new character sequence and the end of the sequence that precedes it, the length of each sequence is determined by the difference between the offset to that sequence and the value of the next offset in the array. The array contains one more entry than the number of character sequences; the final entry is the offset to the end of the final character sequence.
- [keySequenceDataIndexFormat](uckeysequencedataindex/1390357-keysequencedataindexformat.md): An unsigned 16-bit integer identifying the format of the `UCKeySequenceDataIndex` structure. Set to `kUCKeySequenceDataIndexFormat`.

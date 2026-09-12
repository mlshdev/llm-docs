> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeyboardtypeheader](https://developer.apple.com/documentation/coreservices/uckeyboardtypeheader)

# UCKeyboardTypeHeader (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a range of physical keyboard types in a `'uchr'` resource.

## Declaration

```swift
struct UCKeyboardTypeHeader
```

<a id="overview"></a>

## Overview

The `UCKeyboardTypeHeader` type is used in a structure of type  [UCKeyboardLayout](uckeyboardlayout.md)  to specify a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types. Typically, you use an array of `UCKeyboardTypeHeader` structures, of which the first entry in the array is the default and will be used if the keyboard type does not fall within the range for any other entry. See  [UCKeyboardLayout](uckeyboardlayout.md)  for a further discussion of the context for use of the `UCKeyboardTypeHeader` type.

## Topics

### Initializers

- [init()](uckeyboardtypeheader/1447622-init.md)
- [init(keyboardTypeFirst:keyboardTypeLast:keyModifiersToTableNumOffset:keyToCharTableIndexOffset:keyStateRecordsIndexOffset:keyStateTerminatorsOffset:keySequenceDataIndexOffset:)](uckeyboardtypeheader/1444448-init.md)

### Instance Properties

- [keyModifiersToTableNumOffset](uckeyboardtypeheader/1390601-keymodifierstotablenumoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyModifiersToTableNum](uckeymodifierstotablenum.md). The `'uchr'` resource requires a `UCKeyModifiersToTableNum` structure, therefore this field must contain a non-zero value.
- [keySequenceDataIndexOffset](uckeyboardtypeheader/1390532-keysequencedataindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeySequenceDataIndex](uckeysequencedataindex.md), if such is used in the resource. This value may be 0 if no character key sequences are included in the resource.
- [keyStateRecordsIndexOffset](uckeyboardtypeheader/1390632-keystaterecordsindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateRecordsIndex](uckeystaterecordsindex.md), if such is used in the resource. This value may be 0 if no dead-key state records are included in the resource.
- [keyStateTerminatorsOffset](uckeyboardtypeheader/1390415-keystateterminatorsoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateTerminators](uckeystateterminators.md), if such is used in the resource. This value may be 0 if no dead-key state terminators are included in the resource.
- [keyToCharTableIndexOffset](uckeyboardtypeheader/1390613-keytochartableindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyToCharTableIndex](uckeytochartableindex.md). The `'uchr'` resource requires a `UCKeyToCharTableIndex` structure, therefore this field must contain a non-zero value.
- [keyboardTypeFirst](uckeyboardtypeheader/1390499-keyboardtypefirst.md): An unsigned 32-bit integer specifying the first keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0. The initial `UCKeyboardTypeHeader` entry is used if the keyboard type passed to the function [UCKeyTranslate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](1390584-uckeytranslate.md) does not match any other entry, that is, if it is not within the range of values specified by `keyboardTypeFirst` and `keyboardTypeLast` for any entry.
- [keyboardTypeLast](uckeyboardtypeheader/1390423-keyboardtypelast.md): An unsigned 32-bit integer specifying the last keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0.

# UCKeyboardTypeHeader (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a range of physical keyboard types in a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyboardTypeHeader {
    ...
} UCKeyboardTypeHeader;
```

<a id="overview"></a>

## Overview

The `UCKeyboardTypeHeader` type is used in a structure of type  [UCKeyboardLayout](uckeyboardlayout.md)  to specify a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types. Typically, you use an array of `UCKeyboardTypeHeader` structures, of which the first entry in the array is the default and will be used if the keyboard type does not fall within the range for any other entry. See  [UCKeyboardLayout](uckeyboardlayout.md)  for a further discussion of the context for use of the `UCKeyboardTypeHeader` type.

## Topics

### Instance Properties

- [keyModifiersToTableNumOffset](uckeyboardtypeheader/1390601-keymodifierstotablenumoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyModifiersToTableNum](uckeymodifierstotablenum.md). The `'uchr'` resource requires a `UCKeyModifiersToTableNum` structure, therefore this field must contain a non-zero value.
- [keySequenceDataIndexOffset](uckeyboardtypeheader/1390532-keysequencedataindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeySequenceDataIndex](uckeysequencedataindex.md), if such is used in the resource. This value may be 0 if no character key sequences are included in the resource.
- [keyStateRecordsIndexOffset](uckeyboardtypeheader/1390632-keystaterecordsindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateRecordsIndex](uckeystaterecordsindex.md), if such is used in the resource. This value may be 0 if no dead-key state records are included in the resource.
- [keyStateTerminatorsOffset](uckeyboardtypeheader/1390415-keystateterminatorsoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyStateTerminators](uckeystateterminators.md), if such is used in the resource. This value may be 0 if no dead-key state terminators are included in the resource.
- [keyToCharTableIndexOffset](uckeyboardtypeheader/1390613-keytochartableindexoffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyToCharTableIndex](uckeytochartableindex.md). The `'uchr'` resource requires a `UCKeyToCharTableIndex` structure, therefore this field must contain a non-zero value.
- [keyboardTypeFirst](uckeyboardtypeheader/1390499-keyboardtypefirst.md): An unsigned 32-bit integer specifying the first keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0. The initial `UCKeyboardTypeHeader` entry is used if the keyboard type passed to the function [UCKeyTranslate](1390584-uckeytranslate.md) does not match any other entry, that is, if it is not within the range of values specified by `keyboardTypeFirst` and `keyboardTypeLast` for any entry.
- [keyboardTypeLast](uckeyboardtypeheader/1390423-keyboardtypelast.md): An unsigned 32-bit integer specifying the last keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0.

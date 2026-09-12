> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1806296-aesizeofkeydesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806296-aesizeofkeydesc)

# AESizeOfKeyDesc

**Interface language:** Objective-C

**Framework:** Core Services

Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord`.

## Declaration

```objectivec
OSErr AESizeOfKeyDesc (
   const AppleEvent *theAERecord,
   AEKeyword theAEKeyword,
   DescType *typeCode,
   Size *dataSize
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to get the parameter data from.
- `theAEKeyword`: The keyword that specifies the desired parameter. Some keyword parameter constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants). See [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword).
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants). See [DescType](https://developer.apple.com/documentation/coreservices/desctype).
- `dataSize`: A pointer to a size variable. On return, the length, in bytes, of the data in the Apple event parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AESizeOfParam](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819464"></a>

### Version-Notes

See [AESizeOfParam](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam).

## See Also

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute](https://developer.apple.com/documentation/coreservices/1445764-aesizeofattribute): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfNthItem](https://developer.apple.com/documentation/coreservices/1447307-aesizeofnthitem): Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.
- [AESizeOfParam](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

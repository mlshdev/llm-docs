> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1806085-aedeletekeydesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806085-aedeletekeydesc)

# AEDeleteKeyDesc

**Interface language:** Objective-C

**Framework:** Core Services

Deletes a keyword-specified parameter from an Apple event record.

## Declaration

```objectivec
OSErr AEDeleteKeyDesc (
   AERecord *theAERecord,
   AEKeyword theAEKeyword
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to delete the parameter from.
- `theAEKeyword`: The keyword that specifies the parameter to delete. Some keyword constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants). See [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AEDeleteParam](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819423"></a>

### Version-Notes

See [AEDeleteParam](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam).

## See Also

### Deleting Descriptors

- [AEDeleteItem](https://developer.apple.com/documentation/coreservices/1447164-aedeleteitem): Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.
- [AEDeleteParam](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam): Deletes a keyword-specified parameter from an Apple event record.

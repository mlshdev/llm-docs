> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1806223-aegetkeyptr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806223-aegetkeyptr)

# AEGetKeyPtr

**Interface language:** Objective-C

**Framework:** Core Services

Gets a copy of the data for a specified Apple event parameter from an Apple event record.

## Declaration

```objectivec
OSErr AEGetKeyPtr (
   AERecord *theAERecord,
   AEKeyword theAEKeyword,
   DescType desiredType,
   DescType *actualType,
   void *dataPtr,
   Size maximumSize,
   Size *actualSize
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to get the parameter data from.
- `theAEKeyword`: The keyword that specifies the desired Apple event record parameter. Some keyword constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants).
- `desiredType`: The desired descriptor type for the copied data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants).

  If the descriptor specified by the `theAEKeyword` parameter is not of the desired type, `AEGetKeyPtr` attempts to coerce the data to this type. However, if the desired type is `typeWildCard`, no coercion is performed.

  On return, you can determine the actual descriptor type by examining the `typeCode` parameter.
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the data pointed to by `dataPtr`. The returned type is either the same as the type specified by the `desiredType` parameter or, if the desired type was type wildcard, the true type of the descriptor. Specify `NULL` if you do not care about this return value. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants).
- `dataPtr`: A pointer to a buffer, local variable, or other storage location created and disposed of by your application. The size in bytes must be at least as large as the value you pass in the `maximumSize` parameter. On return, contains the parameter data. Specify `NULL` if you do not care about this return value.
- `maximumSize`: The maximum length, in bytes, of the expected Apple event record parameter data. The `AEGetKeyPtr` function will not return more data than you specify in this parameter.
- `actualSize`: A pointer to a variable of type `Size`. On return, the length, in bytes, of the data for the specified Apple event record parameter. If this value is larger than the value you passed in the `maximumSize` parameter, the buffer pointed to by `dataPtr` was not large enough to contain all of the data for the parameter, though `AEGetKeyPtr` does not write beyond the end of the buffer. If the buffer was too small, you can resize it and call `AEGetKeyPtr` again. Specify `NULL` if you do not care about this return value.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AEGetParamPtr](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819452"></a>

### Version-Notes

See [AEGetParamPtr](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr).

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc](https://developer.apple.com/documentation/coreservices/1450314-aegetattributedesc): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr](https://developer.apple.com/documentation/coreservices/1445109-aegetattributeptr): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetKeyDesc](1806211-aegetkeydesc.md): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event record
- [AEGetParamDesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

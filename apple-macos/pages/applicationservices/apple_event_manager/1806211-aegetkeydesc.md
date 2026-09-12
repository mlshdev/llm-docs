> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1806211-aegetkeydesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806211-aegetkeydesc)

# AEGetKeyDesc

**Interface language:** Objective-C

**Framework:** Core Services

Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event record

## Declaration

```objectivec
OSErr AEGetKeyDesc (
   AERecord *theAERecord,
   AEKeyword theAEKeyword,
   DescType desiredType,
   AEDesc *result
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to get the parameter descriptor from.
- `theAEKeyword`: A keyword that specifies the desired Apple event parameter. Some keyword constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants). See [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword).
- `desiredType`: The descriptor type for the desired Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants).

  If the requested Apple event parameter is not of the desired type, the Apple Event Manager attempts to coerce it to the desired type. However, if you pass a value of `typeWildCard`, no coercion is performed, and the descriptor type of the returned descriptor is the same as the descriptor type of the Apple event parameter.

  See [DescType](https://developer.apple.com/documentation/coreservices/desctype).
- `result`: A pointer to a descriptor. On successful return, a copy of the descriptor for the specified Apple event parameter, coerced, if necessary, to the descriptor type specified by the `desiredType` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](https://developer.apple.com/documentation/coreservices/1444208-aedisposedesc) function to dispose of the resulting descriptor after it has finished using it. See [AEDesc](https://developer.apple.com/documentation/coreservices/aedesc).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AEGetParamDesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819448"></a>

### Version-Notes

See [AEGetParamDesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc).

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc](https://developer.apple.com/documentation/coreservices/1450314-aegetattributedesc): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr](https://developer.apple.com/documentation/coreservices/1445109-aegetattributeptr): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetKeyPtr](1806223-aegetkeyptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event record.
- [AEGetParamDesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

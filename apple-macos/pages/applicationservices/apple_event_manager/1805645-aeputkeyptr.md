> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1805645-aeputkeyptr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805645-aeputkeyptr)

# AEPutKeyPtr

**Interface language:** Objective-C

**Framework:** Core Services

Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.

## Declaration

```objectivec
OSErr AEPutKeyPtr (
   AERecord *theAERecord,
   AEKeyword theAEKeyword,
   DescType typeCode,
   const void *dataPtr,
   Size dataSize
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to add a parameter to.
- `theAEKeyword`: The keyword for the parameter to add. If the Apple event record already includes a parameter with this keyword, the parameter is replaced.

  Some keyword constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants).

  See [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword).
- `typeCode`: The descriptor type for the parameter to add. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants). See [DescType](https://developer.apple.com/documentation/coreservices/desctype).
- `dataPtr`: A pointer to the data for the parameter to add.
- `dataSize`: The length, in bytes, of the data for the parameter to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AEPutParamPtr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819340"></a>

### Version-Notes

See [AEPutParamPtr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr).

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc](https://developer.apple.com/documentation/coreservices/1441790-aeputattributedesc): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr](https://developer.apple.com/documentation/coreservices/1445940-aeputattributeptr): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutKeyDesc](1805634-aeputkeydesc.md): Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

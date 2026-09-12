> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1805634-aeputkeydesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805634-aeputkeydesc)

# AEPutKeyDesc

**Interface language:** Objective-C

**Framework:** Core Services

Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.

## Declaration

```objectivec
OSErr AEPutKeyDesc (
   AERecord *theAERecord,
   AEKeyword theAEKeyword,
   const AEDesc *theAEDesc
);
```

## Parameters

- `theAERecord`: A pointer to the Apple event record to add a parameter to.
- `theAEKeyword`: The keyword specifying the parameter to add. If the Apple event record already has a parameter with this keyword, the parameter is replaced.

  Some keyword constants are described in [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants).

  See [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword).
- `theAEDesc`: A pointer to the descriptor for the parameter to add. See [AEDesc](https://developer.apple.com/documentation/coreservices/aedesc).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../apple_event_manager.md#1656145).

<a id="overview"></a>

## Overview

This function is declared as a macro that invokes [AEPutParamDesc](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc), which can operate on an Apple event or an Apple event record. See the Discussion for that function for more information.

<a id="1819328"></a>

### Version-Notes

See [AEPutParamDesc](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc).

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc](https://developer.apple.com/documentation/coreservices/1441790-aeputattributedesc): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr](https://developer.apple.com/documentation/coreservices/1445940-aeputattributeptr): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutKeyPtr](1805645-aeputkeyptr.md): Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

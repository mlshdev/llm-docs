> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449263-aeputparamptr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr)

# AEPutParamPtr(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

## Declaration

```swift
func AEPutParamPtr(_ theAppleEvent: UnsafeMutablePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ typeCode: DescType, _ dataPtr: UnsafeRawPointer!, _ dataSize: Size) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add a parameter to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the parameter to add. If the Apple event already includes an parameter with this keyword, the parameter is replaced.

  Some keyword constants are described in [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md).

  See [AEKeyword](aekeyword.md).
- `typeCode`: The descriptor type for the parameter to add. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the parameter to add.
- `dataSize`: The length, in bytes, of the data for the parameter to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc(\_:\_:\_:)](1441790-aeputattributedesc.md): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr(\_:\_:\_:\_:\_:)](1445940-aeputattributeptr.md): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutParamDesc(\_:\_:\_:)](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.

# AEPutParamPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

## Declaration

```objectivec
OSErr AEPutParamPtr(AppleEvent *theAppleEvent, AEKeyword theAEKeyword, DescType typeCode, const void *dataPtr, Size dataSize);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add a parameter to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the parameter to add. If the Apple event already includes an parameter with this keyword, the parameter is replaced.

  Some keyword constants are described in [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).

  See [AEKeyword](aekeyword.md).
- `typeCode`: The descriptor type for the parameter to add. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the parameter to add.
- `dataSize`: The length, in bytes, of the data for the parameter to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc](1441790-aeputattributedesc.md): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr](1445940-aeputattributeptr.md): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805634-aeputkeydesc): Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.
- [AEPutKeyPtr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805645-aeputkeyptr): Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.

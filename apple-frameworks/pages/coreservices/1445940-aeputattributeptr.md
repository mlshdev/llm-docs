> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445940-aeputattributeptr](https://developer.apple.com/documentation/coreservices/1445940-aeputattributeptr)

# AEPutAttributePtr(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.

## Declaration

```swift
func AEPutAttributePtr(_ theAppleEvent: UnsafeMutablePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ typeCode: DescType, _ dataPtr: UnsafeRawPointer!, _ dataSize: Size) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add an attribute to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the attribute to add. If the Apple event already includes an attribute with this keyword, the attribute is replaced.

  Some keyword constants are described in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md).

  See [AEKeyword](aekeyword.md).
- `typeCode`: The descriptor type for the attribute to add. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the attribute to add.
- `dataSize`: The length, in bytes, of the data for the attribute to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc(\_:\_:\_:)](1441790-aeputattributedesc.md): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutParamDesc(\_:\_:\_:)](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr(\_:\_:\_:\_:\_:)](1449263-aeputparamptr.md): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

# AEPutAttributePtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.

## Declaration

```objectivec
OSErr AEPutAttributePtr(AppleEvent *theAppleEvent, AEKeyword theAEKeyword, DescType typeCode, const void *dataPtr, Size dataSize);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add an attribute to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the attribute to add. If the Apple event already includes an attribute with this keyword, the attribute is replaced.

  Some keyword constants are described in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md).

  See [AEKeyword](aekeyword.md).
- `typeCode`: The descriptor type for the attribute to add. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the attribute to add.
- `dataSize`: The length, in bytes, of the data for the attribute to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc](1441790-aeputattributedesc.md): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805634-aeputkeydesc): Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.
- [AEPutKeyPtr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805645-aeputkeyptr): Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr](1449263-aeputparamptr.md): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

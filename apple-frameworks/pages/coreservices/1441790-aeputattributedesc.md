> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441790-aeputattributedesc](https://developer.apple.com/documentation/coreservices/1441790-aeputattributedesc)

# AEPutAttributeDesc(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a descriptor and a keyword to an Apple event as an attribute.

## Declaration

```swift
func AEPutAttributeDesc(_ theAppleEvent: UnsafeMutablePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ theAEDesc: UnsafePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add an attribute to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the attribute to add. If the Apple event already includes an attribute with this keyword, the attribute is replaced.

  Some keyword constants are described in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md).

  See [AEKeyword](aekeyword.md).
- `theAEDesc`: A pointer to the descriptor to assign to the attribute. The descriptor type of the specified descriptor should match the defined descriptor type for that attribute. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AEPutAttributeDesc` function takes a descriptor and a keyword and adds them to an Apple event as an attribute. If the descriptor type required for the attribute is different from the descriptor type of the descriptor, the Apple Event Manager attempts to coerce the descriptor into the required type, with one exception: the Apple Event Manager does not attempt to coerce the data for an address attribute, thereby allowing applications to use their own address types. 

<a id="1770167"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributePtr(\_:\_:\_:\_:\_:)](1445940-aeputattributeptr.md): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutParamDesc(\_:\_:\_:)](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr(\_:\_:\_:\_:\_:)](1449263-aeputparamptr.md): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

# AEPutAttributeDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Adds a descriptor and a keyword to an Apple event as an attribute.

## Declaration

```objectivec
OSErr AEPutAttributeDesc(AppleEvent *theAppleEvent, AEKeyword theAEKeyword, const AEDesc *theAEDesc);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to add an attribute to. See the [AppleEvent](appleevent.md) data type.
- `theAEKeyword`: The keyword for the attribute to add. If the Apple event already includes an attribute with this keyword, the attribute is replaced.

  Some keyword constants are described in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md).

  See [AEKeyword](aekeyword.md).
- `theAEDesc`: A pointer to the descriptor to assign to the attribute. The descriptor type of the specified descriptor should match the defined descriptor type for that attribute. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AEPutAttributeDesc` function takes a descriptor and a keyword and adds them to an Apple event as an attribute. If the descriptor type required for the attribute is different from the descriptor type of the descriptor, the Apple Event Manager attempts to coerce the descriptor into the required type, with one exception: the Apple Event Manager does not attempt to coerce the data for an address attribute, thereby allowing applications to use their own address types. 

<a id="1770167"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributePtr](1445940-aeputattributeptr.md): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805634-aeputkeydesc): Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.
- [AEPutKeyPtr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1805645-aeputkeyptr): Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](1447576-aeputparamdesc.md): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr](1449263-aeputparamptr.md): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

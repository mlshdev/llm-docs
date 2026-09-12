> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450314-aegetattributedesc](https://developer.apple.com/documentation/coreservices/1450314-aegetattributedesc)

# AEGetAttributeDesc(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.

## Declaration

```swift
func AEGetAttributeDesc(_ theAppleEvent: UnsafePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ desiredType: DescType, _ result: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the attribute descriptor from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the desired attribute. Some keyword constants are described in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md). See [AEKeyword](aekeyword.md).
- `result`: A pointer to a descriptor. On successful return, a copy of the specified Apple event attribute, coerced, if necessary, to the descriptor type specified in `desiredType`. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

To get Apple event attribute data for your application to use directly, call [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](1445109-aegetattributeptr.md). To get a descriptor for an Apple event attribute to pass on to another Apple Event Manager routine, call `AEGetAttributeDesc`. 

<a id="1770186"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](1445109-aegetattributeptr.md): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetParamDesc(\_:\_:\_:\_:)](1449233-aegetparamdesc.md): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr(\_:\_:\_:\_:\_:\_:\_:)](1444069-aegetparamptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

# AEGetAttributeDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.

## Declaration

```objectivec
OSErr AEGetAttributeDesc(const AppleEvent *theAppleEvent, AEKeyword theAEKeyword, DescType desiredType, AEDesc *result);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the attribute descriptor from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the desired attribute. Some keyword constants are described in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md). See [AEKeyword](aekeyword.md).
- `result`: A pointer to a descriptor. On successful return, a copy of the specified Apple event attribute, coerced, if necessary, to the descriptor type specified in `desiredType`. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

To get Apple event attribute data for your application to use directly, call [AEGetAttributePtr](1445109-aegetattributeptr.md). To get a descriptor for an Apple event attribute to pass on to another Apple Event Manager routine, call `AEGetAttributeDesc`. 

<a id="1770186"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributePtr](1445109-aegetattributeptr.md): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806211-aegetkeydesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event record
- [AEGetKeyPtr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806223-aegetkeyptr): Gets a copy of the data for a specified Apple event parameter from an Apple event record.
- [AEGetParamDesc](1449233-aegetparamdesc.md): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr](1444069-aegetparamptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

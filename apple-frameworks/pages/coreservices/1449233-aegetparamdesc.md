> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449233-aegetparamdesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc)

# AEGetParamDesc(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.

## Declaration

```swift
func AEGetParamDesc(_ theAppleEvent: UnsafePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ desiredType: DescType, _ result: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the parameter descriptor from.
- `theAEKeyword`: A keyword that specifies the desired Apple event parameter. Some keyword constants are described in [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md).
- `desiredType`: The descriptor type for the desired Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md).

  If the requested Apple event parameter is not of the desired type, the Apple Event Manager attempts to coerce it to the desired type. However, if you pass a value of `typeWildCard`, no coercion is performed, and the descriptor type of the returned descriptor is the same as the descriptor type of the Apple event parameter.
- `result`: A pointer to a descriptor. On successful return, a copy of the descriptor for the specified Apple event parameter, coerced, if necessary, to the descriptor type specified by the `desiredType` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

 You typically call `AEGetParamDesc` to get a descriptor for an Apple event parameter to pass on to another Apple Event Manager routine. To get Apple event parameter data for your application to use directly, call [AEGetParamPtr(\_:\_:\_:\_:\_:\_:\_:)](1444069-aegetparamptr.md).

If the actual parameter you are getting with `AEGetParamDesc` is a record, you can only request it as a `typeAERecord`, `typeAEList`, or `typeWildcard`. For any other type, `AEGetParamDesc` will return `errAECoercionFail`.

<a id="1770190"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc(\_:\_:\_:\_:)](1450314-aegetattributedesc.md): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](1445109-aegetattributeptr.md): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetParamPtr(\_:\_:\_:\_:\_:\_:\_:)](1444069-aegetparamptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

# AEGetParamDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.

## Declaration

```objectivec
OSErr AEGetParamDesc(const AppleEvent *theAppleEvent, AEKeyword theAEKeyword, DescType desiredType, AEDesc *result);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the parameter descriptor from.
- `theAEKeyword`: A keyword that specifies the desired Apple event parameter. Some keyword constants are described in [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).
- `desiredType`: The descriptor type for the desired Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md).

  If the requested Apple event parameter is not of the desired type, the Apple Event Manager attempts to coerce it to the desired type. However, if you pass a value of `typeWildCard`, no coercion is performed, and the descriptor type of the returned descriptor is the same as the descriptor type of the Apple event parameter.
- `result`: A pointer to a descriptor. On successful return, a copy of the descriptor for the specified Apple event parameter, coerced, if necessary, to the descriptor type specified by the `desiredType` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

 You typically call `AEGetParamDesc` to get a descriptor for an Apple event parameter to pass on to another Apple Event Manager routine. To get Apple event parameter data for your application to use directly, call [AEGetParamPtr](1444069-aegetparamptr.md).

If the actual parameter you are getting with `AEGetParamDesc` is a record, you can only request it as a `typeAERecord`, `typeAEList`, or `typeWildcard`. For any other type, `AEGetParamDesc` will return `errAECoercionFail`.

<a id="1770190"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc](1450314-aegetattributedesc.md): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr](1445109-aegetattributeptr.md): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806211-aegetkeydesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event record
- [AEGetKeyPtr](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806223-aegetkeyptr): Gets a copy of the data for a specified Apple event parameter from an Apple event record.
- [AEGetParamPtr](1444069-aegetparamptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

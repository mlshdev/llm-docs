> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442552-aeremoveobjectaccessor](https://developer.apple.com/documentation/coreservices/1442552-aeremoveobjectaccessor)

# AERemoveObjectAccessor(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Removes an object accessor function from an object accessor dispatch table.

## Declaration

```swift
func AERemoveObjectAccessor(_ desiredClass: DescType, _ containerType: DescType, _ theAccessor: OSLAccessorUPP!, _ isSysHandler: Bool) -> OSErr
```

## Parameters

- `desiredClass`: The object class of the Apple event objects located by the object accessor function to remove. Pass the value `typeWildCard` to remove an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the object class. Pass the value `cProperty` to remove an object accessor function whose entry in an object accessor dispatch table specifies `cProperty` (a constant used to specify a property of any object class). Some other possible values are defined in [Object Class ID Constants](apple_events/1556368-object_class_id_constants.md). See [DescType](desctype.md).
- `containerType`: The descriptor type of the token that identifies the container for the objects located by the object accessor function to remove. (Token is defined in [AEDisposeToken(\_:)](1446783-aedisposetoken.md).) Pass the value `typeWildCard` to remove an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the descriptor type of the token used to specify the container type. See [DescType](desctype.md).
- `theAccessor`: A universal procedure pointer to the special handler to remove. Although the `functionClass` parameter is sufficient to identify the handler to remove, you can identify the handler explicitly as a safeguard. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the function class to identify the handler. A universal procedure pointer (UPP) to the object accessor function to remove. Although the parameters `desiredClass` and `containerType` are sufficient to identify the function to remove, you can identify the function explicitly by providing a UPP in this parameter. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the desired class and container type. See [OSLAccessorUPP](oslaccessorupp.md).
- `isSysHandler`: Specifies the object accessor dispatch table to remove the object accessor function from. Pass `TRUE` to remove the object accessor function from the system object accessor dispatch table or `FALSE` to remove the object accessor function from your application’s object accessor dispatch table. Use of the system object accessor dispatch table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor(\_:\_:\_:\_:\_:\_:)](1447059-aecallobjectaccessor.md): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEGetObjectAccessor(\_:\_:\_:\_:\_:)](1449054-aegetobjectaccessor.md): Gets an object accessor function from an object accessor dispatch table.
- [AEInstallObjectAccessor(\_:\_:\_:\_:\_:)](1447905-aeinstallobjectaccessor.md): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.

# AERemoveObjectAccessor (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Removes an object accessor function from an object accessor dispatch table.

## Declaration

```objectivec
OSErr AERemoveObjectAccessor(DescType desiredClass, DescType containerType, OSLAccessorUPP theAccessor, Boolean isSysHandler);
```

## Parameters

- `desiredClass`: The object class of the Apple event objects located by the object accessor function to remove. Pass the value `typeWildCard` to remove an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the object class. Pass the value `cProperty` to remove an object accessor function whose entry in an object accessor dispatch table specifies `cProperty` (a constant used to specify a property of any object class). Some other possible values are defined in [Object Class ID Constants](1556368-object_class_id_constants.md). See [DescType](desctype.md).
- `containerType`: The descriptor type of the token that identifies the container for the objects located by the object accessor function to remove. (Token is defined in [AEDisposeToken](1446783-aedisposetoken.md).) Pass the value `typeWildCard` to remove an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the descriptor type of the token used to specify the container type. See [DescType](desctype.md).
- `theAccessor`: A universal procedure pointer to the special handler to remove. Although the `functionClass` parameter is sufficient to identify the handler to remove, you can identify the handler explicitly as a safeguard. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the function class to identify the handler. A universal procedure pointer (UPP) to the object accessor function to remove. Although the parameters `desiredClass` and `containerType` are sufficient to identify the function to remove, you can identify the function explicitly by providing a UPP in this parameter. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the desired class and container type. See [OSLAccessorUPP](oslaccessorupp.md).
- `isSysHandler`: Specifies the object accessor dispatch table to remove the object accessor function from. Pass `TRUE` to remove the object accessor function from the system object accessor dispatch table or `FALSE` to remove the object accessor function from your application’s object accessor dispatch table. Use of the system object accessor dispatch table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor](1447059-aecallobjectaccessor.md): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEGetObjectAccessor](1449054-aegetobjectaccessor.md): Gets an object accessor function from an object accessor dispatch table.
- [AEInstallObjectAccessor](1447905-aeinstallobjectaccessor.md): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.

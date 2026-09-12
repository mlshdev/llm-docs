> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449054-aegetobjectaccessor](https://developer.apple.com/documentation/coreservices/1449054-aegetobjectaccessor)

# AEGetObjectAccessor(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets an object accessor function from an object accessor dispatch table.

## Declaration

```swift
func AEGetObjectAccessor(_ desiredClass: DescType, _ containerType: DescType, _ accessor: UnsafeMutablePointer<OSLAccessorUPP?>!, _ accessorRefcon: UnsafeMutablePointer<SRefCon?>!, _ isSysHandler: Bool) -> OSErr
```

## Parameters

- `desiredClass`: The object class of the Apple event objects located by the object accessor function to get. Pass the value `typeWildCard` to get an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the object class. Pass the value `cProperty` to get an object accessor function whose entry in an object accessor dispatch table specifies `cProperty` (a constant used to specify a property of any object class). Some other possible values are defined in [Object Class ID Constants](apple_events/1556368-object_class_id_constants.md). See [DescType](desctype.md).
- `containerType`: The descriptor type of the token that identifies the container for the objects located by the requested accessor function. (Token is defined in [AEDisposeToken(\_:)](1446783-aedisposetoken.md).) Pass the value `typeWildCard` to get an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the descriptor type of the token used to specify the container type. See [DescType](desctype.md).
- `accessor`: A universal procedure pointer. On return, a pointer to the requested object accessor function, if an object accessor dispatch table entry exists that exactly matches the values supplied in the parameters `desiredClass` and `containerType`. See [OSLAccessorUPP](oslaccessorupp.md).
- `accessorRefcon`: A pointer to a reference constant. On return, points to the reference constant from the object accessor dispatch table entry for the specified object accessor function. The reference constant may have a value of 0.
- `isSysHandler`: Specifies the object accessor dispatch table to get the object accessor function from. Pass `TRUE` to get the object accessor function from the system object accessor dispatch table or `FALSE` to get the object accessor function from your application’s object accessor dispatch table. Use of the system object accessor dispatch table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Calling `AEGetObjectAccessor` does not remove the object accessor function from an object accessor dispatch table. 

<a id="1770184"></a>

### Version-Notes

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor(\_:\_:\_:\_:\_:\_:)](1447059-aecallobjectaccessor.md): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEInstallObjectAccessor(\_:\_:\_:\_:\_:)](1447905-aeinstallobjectaccessor.md): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.
- [AERemoveObjectAccessor(\_:\_:\_:\_:)](1442552-aeremoveobjectaccessor.md): Removes an object accessor function from an object accessor dispatch table.

# AEGetObjectAccessor (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets an object accessor function from an object accessor dispatch table.

## Declaration

```objectivec
OSErr AEGetObjectAccessor(DescType desiredClass, DescType containerType, OSLAccessorUPP *accessor, SRefCon *accessorRefcon, Boolean isSysHandler);
```

## Parameters

- `desiredClass`: The object class of the Apple event objects located by the object accessor function to get. Pass the value `typeWildCard` to get an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the object class. Pass the value `cProperty` to get an object accessor function whose entry in an object accessor dispatch table specifies `cProperty` (a constant used to specify a property of any object class). Some other possible values are defined in [Object Class ID Constants](1556368-object_class_id_constants.md). See [DescType](desctype.md).
- `containerType`: The descriptor type of the token that identifies the container for the objects located by the requested accessor function. (Token is defined in [AEDisposeToken](1446783-aedisposetoken.md).) Pass the value `typeWildCard` to get an object accessor function whose entry in an object accessor dispatch table specifies `typeWildCard` as the descriptor type of the token used to specify the container type. See [DescType](desctype.md).
- `accessor`: A universal procedure pointer. On return, a pointer to the requested object accessor function, if an object accessor dispatch table entry exists that exactly matches the values supplied in the parameters `desiredClass` and `containerType`. See [OSLAccessorUPP](oslaccessorupp.md).
- `accessorRefcon`: A pointer to a reference constant. On return, points to the reference constant from the object accessor dispatch table entry for the specified object accessor function. The reference constant may have a value of 0.
- `isSysHandler`: Specifies the object accessor dispatch table to get the object accessor function from. Pass `TRUE` to get the object accessor function from the system object accessor dispatch table or `FALSE` to get the object accessor function from your application’s object accessor dispatch table. Use of the system object accessor dispatch table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Calling `AEGetObjectAccessor` does not remove the object accessor function from an object accessor dispatch table. 

<a id="1770184"></a>

### Version-Notes

In macOS, your application can not make an object callback function available to other applications by installing it in a system object accessor dispatch table.

## See Also

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor](1447059-aecallobjectaccessor.md): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEInstallObjectAccessor](1447905-aeinstallobjectaccessor.md): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.
- [AERemoveObjectAccessor](1442552-aeremoveobjectaccessor.md): Removes an object accessor function from an object accessor dispatch table.

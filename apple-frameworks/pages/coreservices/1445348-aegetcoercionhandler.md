> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445348-aegetcoercionhandler](https://developer.apple.com/documentation/coreservices/1445348-aegetcoercionhandler)

# AEGetCoercionHandler(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the coercion handler for a specified descriptor type.

## Declaration

```swift
func AEGetCoercionHandler(_ fromType: DescType, _ toType: DescType, _ handler: UnsafeMutablePointer<AECoercionHandlerUPP?>!, _ handlerRefcon: UnsafeMutablePointer<SRefCon?>!, _ fromTypeIsDesc: UnsafeMutablePointer<DarwinBoolean>!, _ isSysHandler: Bool) -> OSErr
```

## Parameters

- `fromType`: The descriptor type of the data coerced by the handler. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `toType`: The descriptor type of the resulting data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md).
- `handler`: A universal procedure pointer. On return, a pointer to the specified handler, if a coercion table entry exists that exactly matches the values supplied in the parameters `fromType` and `toType`. See [AECoercionHandlerUPP](aecoercionhandlerupp.md).
- `handlerRefcon`: A pointer to a reference constant. On return, the reference constant from the coercion table entry for the specified coercion handler. The Apple Event Manager passes this reference constant to the handler each time it calls the handler. The reference constant may have a value of 0.
- `fromTypeIsDesc`: A pointer to a Boolean value. The `AEGetCoercionHandler` function returns a value of `TRUE` in this parameter if the coercion handler expects the data as a descriptor or `FALSE`, if the coercion handler expects a pointer to the data.
- `isSysHandler`: Specifies the coercion table to get the handler from. Pass `TRUE` to get the handler from the system coercion table or `FALSE` to get the handler from your application’s coercion table. Use of the system coercion table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

Your application should not install a coercion handler in a system coercion handler dispatch table with the goal that the handler will get called when other applications perform coercions—this won’t work in macOS. For more information, see Writing and Installing Coercion Handlers in Apple Events Programming Guide.

In Mac OS 7.1 through 9.x and macOS version v10.2 and later, `AEGetCoercionHandler` returns `errAEHandlerNotInstalled` when there’s not an exact match, even if a wildcard handler is installed that could handle the coercion. macOS version v10.0.x and v10.1.x will return the wildcard handler.

## See Also

### Managing Coercion Handler Dispatch Tables

- [AEInstallCoercionHandler(\_:\_:\_:\_:\_:\_:)](1445548-aeinstallcoercionhandler.md): Installs a coercion handler in either the application or system coercion handler dispatch table.
- [AERemoveCoercionHandler(\_:\_:\_:\_:)](1441907-aeremovecoercionhandler.md): Removes a coercion handler from a coercion handler dispatch table.

# AEGetCoercionHandler (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the coercion handler for a specified descriptor type.

## Declaration

```objectivec
OSErr AEGetCoercionHandler(DescType fromType, DescType toType, AECoercionHandlerUPP *handler, SRefCon *handlerRefcon, Boolean *fromTypeIsDesc, Boolean isSysHandler);
```

## Parameters

- `fromType`: The descriptor type of the data coerced by the handler. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `toType`: The descriptor type of the resulting data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md).
- `handler`: A universal procedure pointer. On return, a pointer to the specified handler, if a coercion table entry exists that exactly matches the values supplied in the parameters `fromType` and `toType`. See [AECoercionHandlerUPP](aecoercionhandlerupp.md).
- `handlerRefcon`: A pointer to a reference constant. On return, the reference constant from the coercion table entry for the specified coercion handler. The Apple Event Manager passes this reference constant to the handler each time it calls the handler. The reference constant may have a value of 0.
- `fromTypeIsDesc`: A pointer to a Boolean value. The `AEGetCoercionHandler` function returns a value of `TRUE` in this parameter if the coercion handler expects the data as a descriptor or `FALSE`, if the coercion handler expects a pointer to the data.
- `isSysHandler`: Specifies the coercion table to get the handler from. Pass `TRUE` to get the handler from the system coercion table or `FALSE` to get the handler from your application’s coercion table. Use of the system coercion table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

Your application should not install a coercion handler in a system coercion handler dispatch table with the goal that the handler will get called when other applications perform coercions—this won’t work in macOS. For more information, see Writing and Installing Coercion Handlers in Apple Events Programming Guide.

In Mac OS 7.1 through 9.x and macOS version v10.2 and later, `AEGetCoercionHandler` returns `errAEHandlerNotInstalled` when there’s not an exact match, even if a wildcard handler is installed that could handle the coercion. macOS version v10.0.x and v10.1.x will return the wildcard handler.

## See Also

### Managing Coercion Handler Dispatch Tables

- [AEInstallCoercionHandler](1445548-aeinstallcoercionhandler.md): Installs a coercion handler in either the application or system coercion handler dispatch table.
- [AERemoveCoercionHandler](1441907-aeremovecoercionhandler.md): Removes a coercion handler from a coercion handler dispatch table.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441907-aeremovecoercionhandler](https://developer.apple.com/documentation/coreservices/1441907-aeremovecoercionhandler)

# AERemoveCoercionHandler(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Removes a coercion handler from a coercion handler dispatch table.

## Declaration

```swift
func AERemoveCoercionHandler(_ fromType: DescType, _ toType: DescType, _ handler: AECoercionHandlerUPP!, _ isSysHandler: Bool) -> OSErr
```

## Parameters

- `fromType`: The descriptor type of the data coerced by the handler. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `toType`: The descriptor type of the resulting data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `handler`: A universal procedure pointer to the coercion handler to remove. Although the parameters `fromType` and `toType` are sufficient to identify the handler, you can identify the handler explicitly as a safeguard. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the event class and event ID to identify the handler. See [AECoercionHandlerUPP](aecoercionhandlerupp.md).
- `isSysHandler`: Specifies the coercion table to remove the handler from. Pass `TRUE` to remove the handler from the system coercion table or `FALSE` to remove the handler from your application’s coercion table. Use of the system coercion table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

Use of system coercion tables is not recommended. For more information, see Writing and Installing Coercion Handlers in Apple Events Programming Guide.

## See Also

### Managing Coercion Handler Dispatch Tables

- [AEGetCoercionHandler(\_:\_:\_:\_:\_:\_:)](1445348-aegetcoercionhandler.md): Gets the coercion handler for a specified descriptor type.
- [AEInstallCoercionHandler(\_:\_:\_:\_:\_:\_:)](1445548-aeinstallcoercionhandler.md): Installs a coercion handler in either the application or system coercion handler dispatch table.

# AERemoveCoercionHandler (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Removes a coercion handler from a coercion handler dispatch table.

## Declaration

```objectivec
OSErr AERemoveCoercionHandler(DescType fromType, DescType toType, AECoercionHandlerUPP handler, Boolean isSysHandler);
```

## Parameters

- `fromType`: The descriptor type of the data coerced by the handler. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `toType`: The descriptor type of the resulting data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `handler`: A universal procedure pointer to the coercion handler to remove. Although the parameters `fromType` and `toType` are sufficient to identify the handler, you can identify the handler explicitly as a safeguard. If you pass `NULL` for this parameter, the Apple Event Manager relies solely on the event class and event ID to identify the handler. See [AECoercionHandlerUPP](aecoercionhandlerupp.md).
- `isSysHandler`: Specifies the coercion table to remove the handler from. Pass `TRUE` to remove the handler from the system coercion table or `FALSE` to remove the handler from your application’s coercion table. Use of the system coercion table is not recommended.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

Use of system coercion tables is not recommended. For more information, see Writing and Installing Coercion Handlers in Apple Events Programming Guide.

## See Also

### Managing Coercion Handler Dispatch Tables

- [AEGetCoercionHandler](1445348-aegetcoercionhandler.md): Gets the coercion handler for a specified descriptor type.
- [AEInstallCoercionHandler](1445548-aeinstallcoercionhandler.md): Installs a coercion handler in either the application or system coercion handler dispatch table.

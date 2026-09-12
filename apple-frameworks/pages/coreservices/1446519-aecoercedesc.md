> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446519-aecoercedesc](https://developer.apple.com/documentation/coreservices/1446519-aecoercedesc)

# AECoerceDesc(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Coerces the data in a descriptor to another descriptor type and creates a descriptor containing the newly coerced data.

## Declaration

```swift
func AECoerceDesc(_ theAEDesc: UnsafePointer<AEDesc>!, _ toType: DescType, _ result: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAEDesc`: A pointer to the descriptor containing the data to coerce. See [AEDesc](aedesc.md).
- `toType`: The desired descriptor type of the resulting descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `result`: A pointer to a descriptor. On successful return, a descriptor containing the coerced data and matching the descriptor type specified in `toType`. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). If `AECoerceDesc` returns a nonzero result code, it returns a null descriptor record (a descriptor record of type `typeNull`, which does not contain any data) unless the Apple Event Manager is not available because of limited memory.

<a id="discussion"></a>

## Discussion

See the Version Notes section for the [AECoercePtr(\_:\_:\_:\_:\_:)](1441846-aecoerceptr.md) function for information on when to use descriptor-based versus pointer-based coercion handlers starting in OS X version 10.2.

Thread safe starting in OS X v10.2.

## See Also

### Coercing Descriptor Types

- [AECoercePtr(\_:\_:\_:\_:\_:)](1441846-aecoerceptr.md): Coerces data to a desired descriptor type and creates a descriptor containing the newly coerced data.

# AECoerceDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Coerces the data in a descriptor to another descriptor type and creates a descriptor containing the newly coerced data.

## Declaration

```objectivec
OSErr AECoerceDesc(const AEDesc *theAEDesc, DescType toType, AEDesc *result);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor containing the data to coerce. See [AEDesc](aedesc.md).
- `toType`: The desired descriptor type of the resulting descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `result`: A pointer to a descriptor. On successful return, a descriptor containing the coerced data and matching the descriptor type specified in `toType`. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). If `AECoerceDesc` returns a nonzero result code, it returns a null descriptor record (a descriptor record of type `typeNull`, which does not contain any data) unless the Apple Event Manager is not available because of limited memory.

<a id="discussion"></a>

## Discussion

See the Version Notes section for the [AECoercePtr](1441846-aecoerceptr.md) function for information on when to use descriptor-based versus pointer-based coercion handlers starting in OS X version 10.2.

Thread safe starting in OS X v10.2.

## See Also

### Coercing Descriptor Types

- [AECoercePtr](1441846-aecoerceptr.md): Coerces data to a desired descriptor type and creates a descriptor containing the newly coerced data.

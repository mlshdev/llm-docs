> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442661-aeduplicatedesc](https://developer.apple.com/documentation/coreservices/1442661-aeduplicatedesc)

# AEDuplicateDesc(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a copy of a descriptor.

## Declaration

```swift
func AEDuplicateDesc(_ theAEDesc: UnsafePointer<AEDesc>!, _ result: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to duplicate. See [AEDesc](aedesc.md).
- `result`: A pointer to a descriptor. On return, the descriptor contains a copy of the descriptor specified by the `theAEDesc` parameter. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

It is common for applications to send Apple events that have one or more attributes or parameters in common. For example, if you send a series of Apple events to the same application, the address attribute is the same. In these cases, the most efficient way to create the necessary Apple events is to make a template Apple event that you can then copy—by calling the `AEDuplicateDesc` function—as needed. You then fill in or change the remaining parameters and attributes of the copy, send the copy by calling the `AESend(_:_:_:_:_:_:_:)` function and, after `AESend` returns a result code, dispose of the copy by calling [AEDisposeDesc(\_:)](1444208-aedisposedesc.md). You can use this approach to prepare structures of type [AEDesc](aedesc.md), [AEDescList](aedesclist.md), [AERecord](aerecord.md), and [AppleEvent](appleevent.md). 

<a id="1770174"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDesc(\_:\_:\_:\_:)](1448535-aecreatedesc.md): Creates a new descriptor that incorporates the specified data.
- [AECreateDescFromExternalPtr(\_:\_:\_:\_:\_:\_:)](1446239-aecreatedescfromexternalptr.md): Creates a new descriptor that uses a memory buffer supplied by the caller.

# AEDuplicateDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a copy of a descriptor.

## Declaration

```objectivec
OSErr AEDuplicateDesc(const AEDesc *theAEDesc, AEDesc *result);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to duplicate. See [AEDesc](aedesc.md).
- `result`: A pointer to a descriptor. On return, the descriptor contains a copy of the descriptor specified by the `theAEDesc` parameter. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

It is common for applications to send Apple events that have one or more attributes or parameters in common. For example, if you send a series of Apple events to the same application, the address attribute is the same. In these cases, the most efficient way to create the necessary Apple events is to make a template Apple event that you can then copy—by calling the `AEDuplicateDesc` function—as needed. You then fill in or change the remaining parameters and attributes of the copy, send the copy by calling the `AESend` function and, after `AESend` returns a result code, dispose of the copy by calling [AEDisposeDesc](1444208-aedisposedesc.md). You can use this approach to prepare structures of type [AEDesc](aedesc.md), [AEDescList](aedesclist.md), [AERecord](aerecord.md), and [AppleEvent](appleevent.md). 

<a id="1770174"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDesc](1448535-aecreatedesc.md): Creates a new descriptor that incorporates the specified data.
- [AECreateDescFromExternalPtr](1446239-aecreatedescfromexternalptr.md): Creates a new descriptor that uses a memory buffer supplied by the caller.

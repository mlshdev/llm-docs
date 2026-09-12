> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444208-aedisposedesc](https://developer.apple.com/documentation/coreservices/1444208-aedisposedesc)

# AEDisposeDesc(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deallocates the memory used by a descriptor.

## Declaration

```swift
func AEDisposeDesc(_ theAEDesc: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to deallocate. On return, a null descriptor. If you pass a null descriptor in this parameter, `AEDisposeDesc` returns `noErr`. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). As currently implemented, `AEDisposeDesc` always returns `noErr`.

<a id="discussion"></a>

## Discussion

The `AEDisposeDesc` function deallocates the memory used by a descriptor. After calling this method, the descriptor becomes an empty descriptor with a type of `typeNULL`. Because all Apple event structures (except for keyword-specified descriptors) are descriptors, you can use `AEDisposeDesc` for any of them.

Do not call `AEDisposeDesc` on a descriptor obtained from another Apple Event Manager function (such as the reply event from a call to `AESend(_:_:_:_:_:_:_:)`) unless that function returns successfully.

<a id="1770178"></a>

### Special Considerations

If the `AEDesc` might contain an OSL token, dispose of it with [AEDisposeToken(\_:)](1446783-aedisposetoken.md).

<a id="1770179"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

# AEDisposeDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Deallocates the memory used by a descriptor.

## Declaration

```objectivec
OSErr AEDisposeDesc(AEDesc *theAEDesc);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to deallocate. On return, a null descriptor. If you pass a null descriptor in this parameter, `AEDisposeDesc` returns `noErr`. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145). As currently implemented, `AEDisposeDesc` always returns `noErr`.

<a id="discussion"></a>

## Discussion

The `AEDisposeDesc` function deallocates the memory used by a descriptor. After calling this method, the descriptor becomes an empty descriptor with a type of `typeNULL`. Because all Apple event structures (except for keyword-specified descriptors) are descriptors, you can use `AEDisposeDesc` for any of them.

Do not call `AEDisposeDesc` on a descriptor obtained from another Apple Event Manager function (such as the reply event from a call to `AESend`) unless that function returns successfully.

<a id="1770178"></a>

### Special Considerations

If the `AEDesc` might contain an OSL token, dispose of it with [AEDisposeToken](1446783-aedisposetoken.md).

<a id="1770179"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

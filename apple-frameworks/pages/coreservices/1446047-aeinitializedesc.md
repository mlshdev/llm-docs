> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446047-aeinitializedesc](https://developer.apple.com/documentation/coreservices/1446047-aeinitializedesc)

# AEInitializeDesc(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Initializes a new descriptor.

## Declaration

```swift
func AEInitializeDesc(_ desc: UnsafeMutablePointer<AEDesc>!)
```

## Parameters

- `desc`: A pointer to a new descriptor. See [AEDesc](aedesc.md).

<a id="discussion"></a>

## Discussion

The function sets the type of the descriptor to `typeNull` and sets the data handle to `NULL`. If you need to initialize a descriptor that already has some data in it, use [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) to deallocate the memory and initialize the descriptor.

<a id="1770232"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Miscellaneous

- [AECheckIsRecord(\_:)](1444011-aecheckisrecord.md): Determines whether a descriptor is truly an `AERecord`.

# AEInitializeDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Initializes a new descriptor.

## Declaration

```objectivec
void AEInitializeDesc(AEDesc *desc);
```

## Parameters

- `desc`: A pointer to a new descriptor. See [AEDesc](aedesc.md).

<a id="discussion"></a>

## Discussion

The function sets the type of the descriptor to `typeNull` and sets the data handle to `NULL`. If you need to initialize a descriptor that already has some data in it, use [AEDisposeDesc](1444208-aedisposedesc.md) to deallocate the memory and initialize the descriptor.

<a id="1770232"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Miscellaneous

- [AECheckIsRecord](1444011-aecheckisrecord.md): Determines whether a descriptor is truly an `AERecord`.

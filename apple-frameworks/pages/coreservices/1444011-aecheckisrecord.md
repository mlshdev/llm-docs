> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444011-aecheckisrecord](https://developer.apple.com/documentation/coreservices/1444011-aecheckisrecord)

# AECheckIsRecord(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Determines whether a descriptor is truly an `AERecord`.

## Declaration

```swift
func AECheckIsRecord(_ theDesc: UnsafePointer<AEDesc>!) -> Bool
```

## Parameters

- `theDesc`: A pointer to the descriptor to check.

<a id="return_value"></a>

## Return Value

Returns `true` if the descriptor is an `AERecord` or an `AppleEvent`, `false` otherwise.

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Miscellaneous

- [AEInitializeDesc(\_:)](1446047-aeinitializedesc.md): Initializes a new descriptor.

# AECheckIsRecord (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Determines whether a descriptor is truly an `AERecord`.

## Declaration

```objectivec
Boolean AECheckIsRecord(const AEDesc *theDesc);
```

## Parameters

- `theDesc`: A pointer to the descriptor to check.

<a id="return_value"></a>

## Return Value

Returns `true` if the descriptor is an `AERecord` or an `AppleEvent`, `false` otherwise.

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Miscellaneous

- [AEInitializeDesc](1446047-aeinitializedesc.md): Initializes a new descriptor.

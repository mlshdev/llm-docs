> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accesscheckhandler/checkaccess(to:requestedaccess:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/accesscheckhandler/checkaccess(to:requestedaccess:context:replyhandler:))

# checkAccess(to:requestedAccess:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Checks whether the file system allows access to the given item.

## Declaration

```swift
func checkAccess(to theItem: FSItem, requestedAccess access: FSVolume.AccessMask, context: FSContext, replyHandler reply: @escaping @Sendable (FSCheckAccessResult?, (any Error)?) -> Void)
```

```swift
func checkAccess(to theItem: FSItem, requestedAccess access: FSVolume.AccessMask, context: FSContext) async throws -> FSCheckAccessResult
```

## Parameters

- `theItem`: The item for which to check access.
- `access`: A mask indicating a set of access types for which to check.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If the access check succeeds, pass an instance of [FSCheckAccessResult](../../fscheckaccessresult.md) containing a Boolean value to indicate whether the file system grants access, along with a `nil` error. If the access check fails, pass the relevant error as the second parameter; FSKit ignores the [FSCheckAccessResult](../../fscheckaccessresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Checking access

- [FSVolume.AccessMask](../accessmask.md): A bitmask of access rights.
- [FSCheckAccessResult](../../fscheckaccessresult.md): The result of a check-access call.

# checkAccessToItem:requestedAccess:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Checks whether the file system allows access to the given item.

## Declaration

```objectivec
- (void) checkAccessToItem:(FSItem *) theItem requestedAccess:(FSAccessMask) access context:(FSContext *) context replyHandler:(void (^)(FSCheckAccessResult *result, NSError *error)) reply;
```

## Parameters

- `theItem`: The item for which to check access.
- `access`: A mask indicating a set of access types for which to check.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If the access check succeeds, pass an instance of [FSCheckAccessResult](../../fscheckaccessresult.md) containing a Boolean value to indicate whether the file system grants access, along with a `nil` error. If the access check fails, pass the relevant error as the second parameter; FSKit ignores the [FSCheckAccessResult](../../fscheckaccessresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Checking access

- [FSAccessMask](../accessmask.md): A bitmask of access rights.
- [FSCheckAccessResult](../../fscheckaccessresult.md): The result of a check-access call.

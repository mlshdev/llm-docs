> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserror](https://developer.apple.com/documentation/classkit/clserror)

# CLSError

**Framework:** ClassKit  
**Kind:** Structure  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Errors issued by ClassKit.

## Declaration

```swift
struct CLSError
```

## Topics

### Error domain

- [CLSErrorCodeDomain](clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.

### Error codes

- [none](clserror/none.md): No error.
- [authorizationDenied](clserror/authorizationdenied.md): The app isn’t authorized to perform the requested operation.
- [classKitUnavailable](clserror/classkitunavailable.md): ClassKit isn’t available on this device.
- [databaseInaccessible](clserror/databaseinaccessible.md): ClassKit isn’t accessible because the device is locked.
- [invalidAccountCredentials](clserror/invalidaccountcredentials.md)
- [invalidArgument](clserror/invalidargument.md): An invalid argument was provided to the API.
- [invalidCreate](clserror/invalidcreate.md): An attempt to save a new object that already exists in the data store failed.
- [invalidModification](clserror/invalidmodification.md): An attempt to modify a read-only object failed.
- [invalidUpdate](clserror/invalidupdate.md): ClassKit failed to save an updated object in the data store.
- [limits](clserror/limits.md): A limit has been exceeded.
- [partialFailure](clserror/partialfailure.md): ClassKit encountered more than one error.
- [CLSError.Code](clserror/code.md): Error codes that ClassKit issues.

### User information

- [CLSErrorUserInfoKey](clserroruserinfokey.md): Keys that appear in the user info dictionary in errors that ClassKit creates.

### Type Properties

- [errorDomain](clserror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CLSErrorCodeDomain](clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.
- [CLSError.Code](clserror/code.md): Error codes that ClassKit issues.
- [CLSErrorUserInfoKey](clserroruserinfokey.md): Keys that appear in the user info dictionary in errors that ClassKit creates.

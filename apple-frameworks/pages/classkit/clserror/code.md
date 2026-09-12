> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserror/code](https://developer.apple.com/documentation/classkit/clserror/code)

# CLSError.Code (Swift)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Error codes that ClassKit issues.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [CLSError.Code.none](code/none.md): No error.
- [CLSError.Code.authorizationDenied](code/authorizationdenied.md): The app isn’t authorized to perform the requested operation.
- [CLSError.Code.classKitUnavailable](code/classkitunavailable.md): ClassKit isn’t available on this device.
- [CLSError.Code.databaseInaccessible](code/databaseinaccessible.md): ClassKit isn’t accessible because the device is locked.
- [CLSError.Code.invalidAccountCredentials](code/invalidaccountcredentials.md)
- [CLSError.Code.invalidArgument](code/invalidargument.md): An invalid argument was provided to the API.
- [CLSError.Code.invalidCreate](code/invalidcreate.md): An attempt to save a new object that already exists in the data store failed.
- [CLSError.Code.invalidModification](code/invalidmodification.md): An attempt to modify a read-only object failed.
- [CLSError.Code.invalidUpdate](code/invalidupdate.md): ClassKit failed to save an updated object in the data store.
- [CLSError.Code.limits](code/limits.md): A limit has been exceeded.
- [CLSError.Code.partialFailure](code/partialfailure.md): ClassKit encountered more than one error.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CLSError](../clserror.md): Errors issued by ClassKit.
- [CLSErrorCodeDomain](../clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.
- [CLSErrorUserInfoKey](../clserroruserinfokey.md): Keys that appear in the user info dictionary in errors that ClassKit creates.

# CLSErrorCode (Objective-C)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Error codes that ClassKit issues.

## Declaration

```objectivec
enum CLSErrorCode : NSInteger;
```

## Topics

### Error codes

- [CLSErrorCodeNone](code/none.md): No error.
- [CLSErrorCodeAuthorizationDenied](code/authorizationdenied.md): The app isn’t authorized to perform the requested operation.
- [CLSErrorCodeClassKitUnavailable](code/classkitunavailable.md): ClassKit isn’t available on this device.
- [CLSErrorCodeDatabaseInaccessible](code/databaseinaccessible.md): ClassKit isn’t accessible because the device is locked.
- [CLSErrorCodeInvalidAccountCredentials](code/invalidaccountcredentials.md)
- [CLSErrorCodeInvalidArgument](code/invalidargument.md): An invalid argument was provided to the API.
- [CLSErrorCodeInvalidCreate](code/invalidcreate.md): An attempt to save a new object that already exists in the data store failed.
- [CLSErrorCodeInvalidModification](code/invalidmodification.md): An attempt to modify a read-only object failed.
- [CLSErrorCodeInvalidUpdate](code/invalidupdate.md): ClassKit failed to save an updated object in the data store.
- [CLSErrorCodeLimits](code/limits.md): A limit has been exceeded.
- [CLSErrorCodePartialFailure](code/partialfailure.md): ClassKit encountered more than one error.

## See Also

### Errors

- [CLSErrorCodeDomain](../clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.
- [CLSErrorUserInfoKey](../clserroruserinfokey.md): Keys that appear in the user info dictionary in errors that ClassKit creates.

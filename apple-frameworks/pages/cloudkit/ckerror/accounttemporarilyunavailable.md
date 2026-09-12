> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/accounttemporarilyunavailable](https://developer.apple.com/documentation/cloudkit/ckerror/accounttemporarilyunavailable)

# accountTemporarilyUnavailable

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the user’s iCloud account is temporarily unavailable.

## Declaration

```swift
static var accountTemporarilyUnavailable: CKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

You receive this error when the user’s iCloud account is available, but isn’t ready to support CloudKit operations. Don’t delete any cached data and don’t enqueue any additional CloudKit operations.

Checking the account status after the operation fails, assuming there are no other changes to the account’s status, returns [CKAccountStatus.temporarilyUnavailable](../ckaccountstatus/temporarilyunavailable.md). Use the [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to listen for future account status changes, and retry the operation after the status becomes [CKAccountStatus.available](../ckaccountstatus/available.md).

## See Also

### Getting Error Codes

- [alreadyShared](alreadyshared.md): An error that occurs when CloudKit attempts to share a record with an existing share.
- [assetFileModified](assetfilemodified.md): An error that occurs when the system modifies an asset while saving it.
- [assetFileNotFound](assetfilenotfound.md): An error that occurs when the system can’t find the specified asset.
- [assetNotAvailable](assetnotavailable.md): An error that occurs when the system can’t access the specified asset.
- [badContainer](badcontainer.md): An error that occurs when you use an unknown or unauthorized container.
- [badDatabase](baddatabase.md): An error that occurs when the operation can’t complete for the specified database.
- [batchRequestFailed](batchrequestfailed.md): An error that occurs when the system rejects the entire batch of changes.
- [changeTokenExpired](changetokenexpired.md): An error that occurs when the change token expires.
- [constraintViolation](constraintviolation.md): An error that occurs when the server rejects the request because of a unique constraint violation.
- [incompatibleVersion](incompatibleversion.md): An error that occurs when the current app version is older than the oldest allowed version.
- [internalError](internalerror.md): A nonrecoverable error that CloudKit encounters.
- [invalidArguments](invalidarguments.md): An error that occurs when the request contains invalid information.
- [limitExceeded](limitexceeded.md): An error that occurs when a request’s size exceeds the limit.
- [managedAccountRestricted](managedaccountrestricted.md): An error that occurs when CloudKit rejects a request due to a managed-account restriction.
- [missingEntitlement](missingentitlement.md): An error that occurs when the app is missing a required entitlement.

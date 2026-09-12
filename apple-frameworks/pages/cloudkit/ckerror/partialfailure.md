> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/partialfailure](https://developer.apple.com/documentation/cloudkit/ckerror/partialfailure)

# partialFailure

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An error that occurs when an operation completes with partial failures.

## Declaration

```swift
static var partialFailure: CKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Examine the specific item failures, and act on the failed items. Each specific item error is from the CloudKit error domain. You can inspect the [userInfo](../../foundation/nserror/userinfo.md) [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) to see per-item errors.

Note that in a custom zone, the system processes all items in an operation atomically. As a result, you may get a [CKError.Code.batchRequestFailed](code/batchrequestfailed.md) error for all other items in an operation that don’t cause an error.

## See Also

### Getting Error Codes

- [accountTemporarilyUnavailable](accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/code/serverresponselost](https://developer.apple.com/documentation/cloudkit/ckerror/code/serverresponselost)

# CKError.Code.serverResponseLost (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An error that occurs when CloudKit is unable to maintain the network connection and provide a response.

## Declaration

```swift
case serverResponseLost
```

<a id="discussion"></a>

## Discussion

You can retry operations that are idempotent. For non-idempotent operations, you should consult server state to determine if the operation succeeded.

## See Also

### Error Codes

- [CKError.Code.accountTemporarilyUnavailable](accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
- [CKError.Code.alreadyShared](alreadyshared.md): An error that occurs when CloudKit attempts to share a record with an existing share.
- [CKError.Code.assetFileModified](assetfilemodified.md): An error that occurs when the system modifies an asset while saving it.
- [CKError.Code.assetFileNotFound](assetfilenotfound.md): An error that occurs when the system can’t find the specified asset.
- [CKError.Code.assetNotAvailable](assetnotavailable.md): An error that occurs when the system can’t access the specified asset.
- [CKError.Code.badContainer](badcontainer.md): An error that occurs when you use an unknown or unauthorized container.
- [CKError.Code.badDatabase](baddatabase.md): An error that occurs when the operation can’t complete for the specified database.
- [CKError.Code.batchRequestFailed](batchrequestfailed.md): An error that occurs when the system rejects the entire batch of changes.
- [CKError.Code.changeTokenExpired](changetokenexpired.md): An error that occurs when the change token expires.
- [CKError.Code.constraintViolation](constraintviolation.md): An error that occurs when the server rejects the request because of a unique constraint violation.
- [CKError.Code.incompatibleVersion](incompatibleversion.md): An error that occurs when the current app version is older than the oldest allowed version.
- [CKError.Code.internalError](internalerror.md): A nonrecoverable error that CloudKit encounters.
- [CKError.Code.invalidArguments](invalidarguments.md): An error that occurs when the request contains invalid information.
- [CKError.Code.limitExceeded](limitexceeded.md): An error that occurs when a request’s size exceeds the limit.
- [CKError.Code.managedAccountRestricted](managedaccountrestricted.md): An error that occurs when CloudKit rejects a request due to a managed-account restriction.

# CKErrorServerResponseLost (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An error that occurs when CloudKit is unable to maintain the network connection and provide a response.

## Declaration

```objectivec
CKErrorServerResponseLost
```

<a id="discussion"></a>

## Discussion

You can retry operations that are idempotent. For non-idempotent operations, you should consult server state to determine if the operation succeeded.

## See Also

### Error Codes

- [CKErrorAccountTemporarilyUnavailable](accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
- [CKErrorAlreadyShared](alreadyshared.md): An error that occurs when CloudKit attempts to share a record with an existing share.
- [CKErrorAssetFileModified](assetfilemodified.md): An error that occurs when the system modifies an asset while saving it.
- [CKErrorAssetFileNotFound](assetfilenotfound.md): An error that occurs when the system can’t find the specified asset.
- [CKErrorAssetNotAvailable](assetnotavailable.md): An error that occurs when the system can’t access the specified asset.
- [CKErrorBadContainer](badcontainer.md): An error that occurs when you use an unknown or unauthorized container.
- [CKErrorBadDatabase](baddatabase.md): An error that occurs when the operation can’t complete for the specified database.
- [CKErrorBatchRequestFailed](batchrequestfailed.md): An error that occurs when the system rejects the entire batch of changes.
- [CKErrorChangeTokenExpired](changetokenexpired.md): An error that occurs when the change token expires.
- [CKErrorConstraintViolation](constraintviolation.md): An error that occurs when the server rejects the request because of a unique constraint violation.
- [CKErrorIncompatibleVersion](incompatibleversion.md): An error that occurs when the current app version is older than the oldest allowed version.
- [CKErrorInternalError](internalerror.md): A nonrecoverable error that CloudKit encounters.
- [CKErrorInvalidArguments](invalidarguments.md): An error that occurs when the request contains invalid information.
- [CKErrorLimitExceeded](limitexceeded.md): An error that occurs when a request’s size exceeds the limit.
- [CKErrorManagedAccountRestricted](managedaccountrestricted.md): An error that occurs when CloudKit rejects a request due to a managed-account restriction.

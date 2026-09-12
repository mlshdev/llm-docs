> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/code/accounttemporarilyunavailable](https://developer.apple.com/documentation/cloudkit/ckerror/code/accounttemporarilyunavailable)

# CKError.Code.accountTemporarilyUnavailable (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the user’s iCloud account is temporarily unavailable.

## Declaration

```swift
case accountTemporarilyUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this error when the user’s iCloud account is available, but isn’t ready to support CloudKit operations. Don’t delete any cached data and don’t enqueue any additional CloudKit operations.

Checking the account status after the operation fails, assuming there are no other changes to the account’s status, returns [CKAccountStatus.temporarilyUnavailable](../../ckaccountstatus/temporarilyunavailable.md). Use the [CKAccountChanged](../../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to listen for future account status changes, and retry the operation after the status becomes [CKAccountStatus.available](../../ckaccountstatus/available.md).

## See Also

### Error Codes

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
- [CKError.Code.missingEntitlement](missingentitlement.md): An error that occurs when the app is missing a required entitlement.

# CKErrorAccountTemporarilyUnavailable (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the user’s iCloud account is temporarily unavailable.

## Declaration

```objectivec
CKErrorAccountTemporarilyUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this error when the user’s iCloud account is available, but isn’t ready to support CloudKit operations. Don’t delete any cached data and don’t enqueue any additional CloudKit operations.

Checking the account status after the operation fails, assuming there are no other changes to the account’s status, returns [CKAccountStatusTemporarilyUnavailable](../../ckaccountstatus/temporarilyunavailable.md). Use the [CKAccountChanged](../../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to listen for future account status changes, and retry the operation after the status becomes [CKAccountStatusAvailable](../../ckaccountstatus/available.md).

## See Also

### Error Codes

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
- [CKErrorMissingEntitlement](missingentitlement.md): An error that occurs when the app is missing a required entitlement.

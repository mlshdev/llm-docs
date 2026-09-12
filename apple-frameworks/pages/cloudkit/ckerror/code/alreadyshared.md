> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/code/alreadyshared](https://developer.apple.com/documentation/cloudkit/ckerror/code/alreadyshared)

# CKError.Code.alreadyShared (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An error that occurs when CloudKit attempts to share a record with an existing share.

## Declaration

```swift
case alreadyShared
```

<a id="discussion"></a>

## Discussion

A record can exist in only a single share at a time. This error means that one of the following conditions exists:

- The record already has an existing share.
- The record has a parent, and its parent has a share.
- The record is a parent, and one of its children has a share.

## See Also

### Error Codes

- [CKError.Code.accountTemporarilyUnavailable](accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
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

# CKErrorAlreadyShared (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An error that occurs when CloudKit attempts to share a record with an existing share.

## Declaration

```objectivec
CKErrorAlreadyShared
```

<a id="discussion"></a>

## Discussion

A record can exist in only a single share at a time. This error means that one of the following conditions exists:

- The record already has an existing share.
- The record has a parent, and its parent has a share.
- The record is a parent, and one of its children has a share.

## See Also

### Error Codes

- [CKErrorAccountTemporarilyUnavailable](accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
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

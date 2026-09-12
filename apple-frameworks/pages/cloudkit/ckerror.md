> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror](https://developer.apple.com/documentation/cloudkit/ckerror)

# CKError

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A type that describes a CloudKit error.

## Declaration

```swift
struct CKError
```

## Mentioned In

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md)

<a id="overview"></a>

## Overview

CloudKit provides operations that faciliate moving data between your app and iCloud. There are also convenience methods in [CKContainer](ckcontainer.md) and [CKDatabase](ckdatabase.md) that provide similar functionality. If an operation or method fails to complete its task, CloudKit provides detailed error information that you can use to recover. A failure might be due to network or server conditions, or because of conflicts between local and remote data. For a list of possible reasons, see [CKError.Code](ckerror/code.md).

If you receive an error, cast it to an instance of `CKError` to access additional information that CloudKit provides. For example, if the error code is [requestRateLimited](ckerror/requestratelimited.md), you can use the [retryAfterSeconds](ckerror/retryafterseconds.md) property to determine how long you must wait before you retry the operation or method.

Batch operations, such as [CKModifyRecordsOperation](ckmodifyrecordsoperation.md), can complete with a [partialFailure](ckerror/partialfailure.md) error. This means only a subset of the operation’s changes succeed. Use the [partialErrorsByItemID](ckerror/partialerrorsbyitemid.md) property to access a dictionary that maps items that CloudKit can’t process to errors that describe those failures. You can then handle each error independently.

If you attempt to save a record and the server’s version of that record is newer, CloudKit returns a [serverRecordChanged](ckerror/serverrecordchanged.md) error. Use the [ancestorRecord](ckerror/ancestorrecord.md), [clientRecord](ckerror/clientrecord.md), and [serverRecord](ckerror/serverrecord.md) properties to resolve the conflict. Make sure you merge any changes into `serverRecord` because that version contains the most recent change tag.

## Topics

### Getting Error Codes

- [accountTemporarilyUnavailable](ckerror/accounttemporarilyunavailable.md): An error that occurs when the user’s iCloud account is temporarily unavailable.
- [alreadyShared](ckerror/alreadyshared.md): An error that occurs when CloudKit attempts to share a record with an existing share.
- [assetFileModified](ckerror/assetfilemodified.md): An error that occurs when the system modifies an asset while saving it.
- [assetFileNotFound](ckerror/assetfilenotfound.md): An error that occurs when the system can’t find the specified asset.
- [assetNotAvailable](ckerror/assetnotavailable.md): An error that occurs when the system can’t access the specified asset.
- [badContainer](ckerror/badcontainer.md): An error that occurs when you use an unknown or unauthorized container.
- [badDatabase](ckerror/baddatabase.md): An error that occurs when the operation can’t complete for the specified database.
- [batchRequestFailed](ckerror/batchrequestfailed.md): An error that occurs when the system rejects the entire batch of changes.
- [changeTokenExpired](ckerror/changetokenexpired.md): An error that occurs when the change token expires.
- [constraintViolation](ckerror/constraintviolation.md): An error that occurs when the server rejects the request because of a unique constraint violation.
- [incompatibleVersion](ckerror/incompatibleversion.md): An error that occurs when the current app version is older than the oldest allowed version.
- [internalError](ckerror/internalerror.md): A nonrecoverable error that CloudKit encounters.
- [invalidArguments](ckerror/invalidarguments.md): An error that occurs when the request contains invalid information.
- [limitExceeded](ckerror/limitexceeded.md): An error that occurs when a request’s size exceeds the limit.
- [managedAccountRestricted](ckerror/managedaccountrestricted.md): An error that occurs when CloudKit rejects a request due to a managed-account restriction.
- [missingEntitlement](ckerror/missingentitlement.md): An error that occurs when the app is missing a required entitlement.
- [networkFailure](ckerror/networkfailure.md): An error that occurs when a network is available, but CloudKit is inaccessible.
- [networkUnavailable](ckerror/networkunavailable.md): An error that occurs when the network is unavailable.
- [notAuthenticated](ckerror/notauthenticated.md): An error that occurs when the user is unauthenticated.
- [operationCancelled](ckerror/operationcancelled.md): An error that occurs when an operation cancels.
- [partialFailure](ckerror/partialfailure.md): An error that occurs when an operation completes with partial failures.
- [participantMayNeedVerification](ckerror/participantmayneedverification.md): An error that occurs when the user isn’t a participant of the share.
- [permissionFailure](ckerror/permissionfailure.md): An error that occurs when the user doesn’t have permission to save or fetch data.
- [quotaExceeded](ckerror/quotaexceeded.md): An error that occurs when saving a record exceeds the user’s storage quota.
- [referenceViolation](ckerror/referenceviolation.md): An error that occurs when CloudKit can’t find the target of a reference.
- [requestRateLimited](ckerror/requestratelimited.md): An error that occurs when CloudKit rate-limits requests.
- [serverRecordChanged](ckerror/serverrecordchanged.md): An error that occurs when CloudKit rejects a record because the server’s version is different.
- [serverRejectedRequest](ckerror/serverrejectedrequest.md): An error that occurs when CloudKit rejects the request.
- [serverResponseLost](ckerror/serverresponselost.md): An error that occurs when CloudKit is unable to maintain the network connection and provide a response.
- [serviceUnavailable](ckerror/serviceunavailable.md): An error that occurs when CloudKit is unavailable.
- [tooManyParticipants](ckerror/toomanyparticipants.md): An error that occurs when a share has too many participants.
- [unknownItem](ckerror/unknownitem.md): An error that occurs when the specified record doesn’t exist.
- [userDeletedZone](ckerror/userdeletedzone.md): An error that occurs when the user deletes a record zone using the Settings app.
- [zoneBusy](ckerror/zonebusy.md): An error that occurs when the server is too busy to handle the record zone operation.
- [zoneNotFound](ckerror/zonenotfound.md): An error that occurs when the specified record zone doesn’t exist.
- [resultsTruncated](ckerror/resultstruncated.md): Deprecated. An error that occurs when CloudKit truncates a query’s results.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.

### Getting Partial Errors

- [partialErrorsByItemID](ckerror/partialerrorsbyitemid.md): The dictionary that contains errors that relate to individual record operations.

### Getting Conflicted Records

- [ancestorRecord](ckerror/ancestorrecord.md): The original version of the record.
- [clientRecord](ckerror/clientrecord.md): The local version of the record that includes any changes.
- [serverRecord](ckerror/serverrecord.md): The server’s version of the record.

### Getting Retry Information

- [retryAfterSeconds](ckerror/retryafterseconds.md): The number of seconds to wait before you retry the request.

### Type Properties

- [errorDomain](ckerror/errordomain.md)
- [participantAlreadyInvited](ckerror/participantalreadyinvited.md)

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

- [CKErrorDomain](ckerrordomain.md): The error domain for CloudKit errors.
- [CKError.Code](ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckerror/participantmayneedverification](https://developer.apple.com/documentation/cloudkit/ckerror/participantmayneedverification)

# participantMayNeedVerification

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An error that occurs when the user isn’t a participant of the share.

## Declaration

```swift
static var participantMayNeedVerification: CKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

A fetch share metadata operation fails when the user isn’t a participant of the share. However, there are invited participants on the share with email addresses or phone numbers that don’t have associations with an iCloud account. The user may be able to join a share by associating one of those email addresses or phone numbers with the user’s iCloud account.

Call [openURL(\_:)](../../uikit/uiapplication/openurl%28__%29.md) on the share URL to have the user attempt to verify their information.

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

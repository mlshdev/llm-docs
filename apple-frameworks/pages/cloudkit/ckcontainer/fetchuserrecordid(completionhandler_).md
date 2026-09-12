> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchuserrecordid(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchuserrecordid(completionhandler:))

# fetchUserRecordID(completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches the user record ID of the current user.

## Declaration

```swift
func fetchUserRecordID(completionHandler: @escaping @Sendable (CKRecord.ID?, (any Error)?) -> Void)
```

```swift
func userRecordID() async throws -> CKRecord.ID
```

## Parameters

- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The user record ID, or `nil` if the user disables iCloud or the device doesn’t have an iCloud account.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the user record ID.

CloudKit returns a [CKError.Code.notAuthenticated](../ckerror/code/notauthenticated.md) error when any of the following conditions are met:

- The device has an iCloud account but the user disables iCloud.
- The device has an iCloud account with restricted access.
- The device doesn’t have an iCloud account.

> **Note**

> At startup, fetching the user record ID may take longer while CloudKit makes the initial iCloud account request. After the initial fetch, accessing the ID generally takes less time.

## See Also

### Discovering User Records

- [discoverAllIdentities(completionHandler:)](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentity(withEmailAddress:completionHandler:)](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentity(withPhoneNumber:completionHandler:)](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentity(withUserRecordID:completionHandler:)](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipant(withEmailAddress:completionHandler:)](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipant(withPhoneNumber:completionHandler:)](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipant(withUserRecordID:completionHandler:)](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

# fetchUserRecordIDWithCompletionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches the user record ID of the current user.

## Declaration

```objectivec
- (void) fetchUserRecordIDWithCompletionHandler:(void (^)(CKRecordID *recordID, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The user record ID, or `nil` if the user disables iCloud or the device doesn’t have an iCloud account.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the user record ID.

CloudKit returns a [CKErrorNotAuthenticated](../ckerror/code/notauthenticated.md) error when any of the following conditions are met:

- The device has an iCloud account but the user disables iCloud.
- The device has an iCloud account with restricted access.
- The device doesn’t have an iCloud account.

> **Note**

> At startup, fetching the user record ID may take longer while CloudKit makes the initial iCloud account request. After the initial fetch, accessing the ID generally takes less time.

## See Also

### Discovering User Records

- [discoverAllIdentitiesWithCompletionHandler:](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentityWithEmailAddress:completionHandler:](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentityWithPhoneNumber:completionHandler:](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentityWithUserRecordID:completionHandler:](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipantWithEmailAddress:completionHandler:](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipantWithPhoneNumber:completionHandler:](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipantWithUserRecordID:completionHandler:](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

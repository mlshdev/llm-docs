> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchshareparticipant(withuserrecordid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchshareparticipant(withuserrecordid:completionhandler:))

# fetchShareParticipant(withUserRecordID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the share participant with the specified user record ID.

## Declaration

```swift
func fetchShareParticipant(withUserRecordID userRecordID: CKRecord.ID, completionHandler: @escaping @Sendable (CKShare.Participant?, (any Error)?) -> Void)
```

## Parameters

- `userRecordID`: The share participant’s user record ID.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The share participant, or `nil` if CloudKit can’t find the participant.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the participant.

This method searches for the share participant asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverAllIdentities(completionHandler:)](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentity(withEmailAddress:completionHandler:)](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentity(withPhoneNumber:completionHandler:)](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentity(withUserRecordID:completionHandler:)](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipant(withEmailAddress:completionHandler:)](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipant(withPhoneNumber:completionHandler:)](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchUserRecordID(completionHandler:)](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

# fetchShareParticipantWithUserRecordID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the share participant with the specified user record ID.

## Declaration

```objectivec
- (void) fetchShareParticipantWithUserRecordID:(CKRecordID *) userRecordID completionHandler:(void (^)(CKShareParticipant *shareParticipant, NSError *error)) completionHandler;
```

## Parameters

- `userRecordID`: The share participant’s user record ID.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The share participant, or `nil` if CloudKit can’t find the participant.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the participant.

This method searches for the share participant asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverAllIdentitiesWithCompletionHandler:](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentityWithEmailAddress:completionHandler:](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentityWithPhoneNumber:completionHandler:](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentityWithUserRecordID:completionHandler:](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipantWithEmailAddress:completionHandler:](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipantWithPhoneNumber:completionHandler:](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchUserRecordIDWithCompletionHandler:](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

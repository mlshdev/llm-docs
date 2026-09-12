> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/discoveruseridentity(withuserrecordid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/discoveruseridentity(withuserrecordid:completionhandler:))

# discoverUserIdentity(withUserRecordID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Fetches the user identity for the specified user record ID.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
func discoverUserIdentity(withUserRecordID userRecordID: CKRecord.ID, completionHandler: @escaping @Sendable (CKUserIdentity?, (any Error)?) -> Void)
```

## Parameters

- `userRecordID`: The user record’s ID.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

This closure doesn’t return a value and takes the following parameters:

- The user identity for the user record ID, or `nil` if CloudKit can’t find an identity.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches a user identity.

Use this method to retrieve the identity of a user who you already have a user record ID for. The user you’re searching for must meet the following criteria:

- The user has run the app.
- The user grants the [userDiscoverability](applicationpermissions/userdiscoverability.md) permission for the container.

This method searches for the user asynchronously and with a low priority. If you want the task to execute the request with a higher priority, create an instance of [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverAllIdentities(completionHandler:)](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentity(withEmailAddress:completionHandler:)](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentity(withPhoneNumber:completionHandler:)](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [fetchShareParticipant(withEmailAddress:completionHandler:)](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipant(withPhoneNumber:completionHandler:)](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipant(withUserRecordID:completionHandler:)](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordID(completionHandler:)](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

# discoverUserIdentityWithUserRecordID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Fetches the user identity for the specified user record ID.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
- (void) discoverUserIdentityWithUserRecordID:(CKRecordID *) userRecordID completionHandler:(void (^)(CKUserIdentity *userInfo, NSError *error)) completionHandler;
```

## Parameters

- `userRecordID`: The user record’s ID.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

This closure doesn’t return a value and takes the following parameters:

- The user identity for the user record ID, or `nil` if CloudKit can’t find an identity.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches a user identity.

Use this method to retrieve the identity of a user who you already have a user record ID for. The user you’re searching for must meet the following criteria:

- The user has run the app.
- The user grants the [CKApplicationPermissionUserDiscoverability](applicationpermissions/userdiscoverability.md) permission for the container.

This method searches for the user asynchronously and with a low priority. If you want the task to execute the request with a higher priority, create an instance of [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverAllIdentitiesWithCompletionHandler:](discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentityWithEmailAddress:completionHandler:](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentityWithPhoneNumber:completionHandler:](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [fetchShareParticipantWithEmailAddress:completionHandler:](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipantWithPhoneNumber:completionHandler:](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipantWithUserRecordID:completionHandler:](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordIDWithCompletionHandler:](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

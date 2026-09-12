> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/discoverallidentities(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/discoverallidentities(completionhandler:))

# discoverAllIdentities(completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Fetches all user identities that match entries in the user’s Contacts.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
func discoverAllIdentities(completionHandler: @escaping @Sendable ([CKUserIdentity]?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The user identities that match entries in the user’s Contacts.
- An error if a problem occurs, or `nil` if the system successfully completes the request.

This method searches for the users asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKDiscoverAllUserIdentitiesOperation](../ckdiscoveralluseridentitiesoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverUserIdentity(withEmailAddress:completionHandler:)](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentity(withPhoneNumber:completionHandler:)](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentity(withUserRecordID:completionHandler:)](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipant(withEmailAddress:completionHandler:)](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipant(withPhoneNumber:completionHandler:)](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipant(withUserRecordID:completionHandler:)](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordID(completionHandler:)](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

# discoverAllIdentitiesWithCompletionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Fetches all user identities that match entries in the user’s Contacts.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
- (void) discoverAllIdentitiesWithCompletionHandler:(void (^)(NSArray<CKUserIdentity *> *userIdentities, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The user identities that match entries in the user’s Contacts.
- An error if a problem occurs, or `nil` if the system successfully completes the request.

This method searches for the users asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKDiscoverAllUserIdentitiesOperation](../ckdiscoveralluseridentitiesoperation.md) and configure it to use the necessary priority.

## See Also

### Discovering User Records

- [discoverUserIdentityWithEmailAddress:completionHandler:](discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentityWithPhoneNumber:completionHandler:](discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentityWithUserRecordID:completionHandler:](discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipantWithEmailAddress:completionHandler:](fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipantWithPhoneNumber:completionHandler:](fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipantWithUserRecordID:completionHandler:](fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordIDWithCompletionHandler:](fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](../ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

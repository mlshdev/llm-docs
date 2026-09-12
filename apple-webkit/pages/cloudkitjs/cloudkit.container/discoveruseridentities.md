> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/discoveruseridentities](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/discoveruseridentities)

# discoverUserIdentities

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Fetches all users in the specified array.

## Declaration

```
Promise<CloudKit.UserIdentitiesResponse, CloudKit.CKError> discoverUserIdentities(
	CloudKit.UserLookupInfo[] userLookupInfos
);
```

## Parameters

- `userLookupInfos`: Array of information about users to fetch.

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.UserIdentitiesResponse](../cloudkit.useridentitiesresponse.md) object, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

This method returns information about those users who meet the following criteria:

- The user must be in the current user’s address book.
- The user must have run the app.
- The user must have granted the permission to be discovered for this container.

## See Also

### Discovering Users

- [fetchCurrentUserIdentity](fetchcurrentuseridentity.md): Fetches information about the current user asynchronously.
- [discoverAllUserIdentities](discoveralluseridentities.md): Fetches all user identities in the current user’s address book.
- [discoverUserIdentityWithEmailAddress](discoveruseridentitywithemailaddress.md): Fetches information about a single user based on the user’s email address.
- [discoverUserIdentityWithPhoneNumber](discoveruseridentitywithphonenumber.md): Fetches information about a single user based on the user’s phone number.
- [discoverUserIdentityWithUserRecordName](discoveruseridentitywithuserrecordname.md): Fetches information about a single user using the record name.

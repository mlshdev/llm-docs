> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/fetchcurrentuseridentity](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/fetchcurrentuseridentity)

# fetchCurrentUserIdentity

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Fetches information about the current user asynchronously.

## Declaration

```
Promise<CloudKit.UserIdentity, CloudKit.CKError> fetchCurrentUserIdentity();
```

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.UserIdentity](../cloudkit.useridentity.md) dictionary if the current user is found, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

If the current user is discoverable, the [CloudKit.UserIdentity](../cloudkit.useridentity.md) dictionary contains a `nameComponents` key that you can use to get the user’s first and last name.

## See Also

### Discovering Users

- [discoverAllUserIdentities](discoveralluseridentities.md): Fetches all user identities in the current user’s address book.
- [discoverUserIdentities](discoveruseridentities.md): Fetches all users in the specified array.
- [discoverUserIdentityWithEmailAddress](discoveruseridentitywithemailaddress.md): Fetches information about a single user based on the user’s email address.
- [discoverUserIdentityWithPhoneNumber](discoveruseridentitywithphonenumber.md): Fetches information about a single user based on the user’s phone number.
- [discoverUserIdentityWithUserRecordName](discoveruseridentitywithuserrecordname.md): Fetches information about a single user using the record name.

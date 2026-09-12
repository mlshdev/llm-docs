> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/init(userrecordid:)](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/init(userrecordid:))

# init(userRecordID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a lookup info for the specified user record ID.

## Declaration

```swift
init(userRecordID: CKRecord.ID)
```

## Parameters

- `userRecordID`: The user record ID for looking up the user identity.

<a id="discussion"></a>

## Discussion

After you create a lookup info, use the [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or the  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identity.

## See Also

### Creating a Lookup Info

- [init(emailAddress:)](init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [init(phoneNumber:)](init%28phonenumber_%29.md): Creates a lookup info for the specified phone number.

# initWithUserRecordID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a lookup info for the specified user record ID.

## Declaration

```objectivec
- (instancetype) initWithUserRecordID:(CKRecordID *) userRecordID;
```

## Parameters

- `userRecordID`: The user record ID for looking up the user identity.

<a id="discussion"></a>

## Discussion

After you create a lookup info, use the [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or the  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identity.

## See Also

### Creating a Lookup Info

- [initWithEmailAddress:](init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [initWithPhoneNumber:](init%28phonenumber_%29.md): Creates a lookup info for the specified phone number.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/init(phonenumber:)](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/init(phonenumber:))

# init(phoneNumber:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a lookup info for the specified phone number.

## Declaration

```swift
init(phoneNumber: String)
```

## Parameters

- `phoneNumber`: The phone number for looking up the user identity.

<a id="discussion"></a>

## Discussion

After you create a lookup info, use the [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or the  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identity.

## See Also

### Creating a Lookup Info

- [init(emailAddress:)](init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [init(userRecordID:)](init%28userrecordid_%29.md): Creates a lookup info for the specified user record ID.

# initWithPhoneNumber: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a lookup info for the specified phone number.

## Declaration

```objectivec
- (instancetype) initWithPhoneNumber:(NSString *) phoneNumber;
```

## Parameters

- `phoneNumber`: The phone number for looking up the user identity.

<a id="discussion"></a>

## Discussion

After you create a lookup info, use the [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or the  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identity.

## See Also

### Creating a Lookup Info

- [initWithEmailAddress:](init%28emailaddress_%29.md): Creates a lookup info for the specified email address.
- [initWithUserRecordID:](init%28userrecordid_%29.md): Creates a lookup info for the specified user record ID.

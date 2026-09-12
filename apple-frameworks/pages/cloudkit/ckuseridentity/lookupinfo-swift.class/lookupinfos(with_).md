> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/lookupinfos(with:)](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/lookupinfos(with:))

# lookupInfos(with:) (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of lookup infos for the specified user record IDs.

## Declaration

```swift
class func lookupInfos(with recordIDs: [CKRecord.ID]) -> [CKUserIdentity.LookupInfo]
```

## Parameters

- `recordIDs`: The user record IDs for looking up the user identities.

<a id="discussion"></a>

## Discussion

Use the values that this method returns in an [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or an  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identities.

## See Also

### Creating Multiple Lookup Infos

- [lookupInfos(withEmails:)](lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfos(withPhoneNumbers:)](lookupinfos%28withphonenumbers_%29.md): Returns an array of lookup infos for the specified phone numbers.

# lookupInfosWithRecordIDs: (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of lookup infos for the specified user record IDs.

## Declaration

```objectivec
+ (NSArray<CKUserIdentityLookupInfo *> *) lookupInfosWithRecordIDs:(NSArray<CKRecordID *> *) recordIDs;
```

## Parameters

- `recordIDs`: The user record IDs for looking up the user identities.

<a id="discussion"></a>

## Discussion

Use the values that this method returns in an [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or an  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identities.

## See Also

### Creating Multiple Lookup Infos

- [lookupInfosWithEmails:](lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfosWithPhoneNumbers:](lookupinfos%28withphonenumbers_%29.md): Returns an array of lookup infos for the specified phone numbers.

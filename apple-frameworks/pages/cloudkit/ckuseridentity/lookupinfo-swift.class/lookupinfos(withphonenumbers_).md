> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/lookupinfos(withphonenumbers:)](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/lookupinfos(withphonenumbers:))

# lookupInfos(withPhoneNumbers:) (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of lookup infos for the specified phone numbers.

## Declaration

```swift
class func lookupInfos(withPhoneNumbers phoneNumbers: [String]) -> [CKUserIdentity.LookupInfo]
```

## Parameters

- `phoneNumbers`: The phone numbers for looking up the user identities.

<a id="discussion"></a>

## Discussion

Use the values that this method returns in an [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or an  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identities.

## See Also

### Creating Multiple Lookup Infos

- [lookupInfos(withEmails:)](lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfos(with:)](lookupinfos%28with_%29.md): Returns an array of lookup infos for the specified user record IDs.

# lookupInfosWithPhoneNumbers: (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of lookup infos for the specified phone numbers.

## Declaration

```objectivec
+ (NSArray<CKUserIdentityLookupInfo *> *) lookupInfosWithPhoneNumbers:(NSArray<NSString *> *) phoneNumbers;
```

## Parameters

- `phoneNumbers`: The phone numbers for looking up the user identities.

<a id="discussion"></a>

## Discussion

Use the values that this method returns in an [CKDiscoverUserIdentitiesOperation](../../ckdiscoveruseridentitiesoperation.md) operation or an  [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) operation to retrieve the corresponding user identities.

## See Also

### Creating Multiple Lookup Infos

- [lookupInfosWithEmails:](lookupinfos%28withemails_%29.md): Returns an array of lookup infos for the specified email addresses.
- [lookupInfosWithRecordIDs:](lookupinfos%28with_%29.md): Returns an array of lookup infos for the specified user record IDs.

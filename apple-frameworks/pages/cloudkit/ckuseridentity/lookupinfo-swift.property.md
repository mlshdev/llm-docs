> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.property](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.property)

# lookupInfo (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The lookup info for retrieving the user identity.

## Declaration

```swift
@NSCopying var lookupInfo: CKUserIdentity.LookupInfo? { get }
```

<a id="discussion"></a>

## Discussion

Use this property’s value to retrieve the user identity when using the [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) operations.

## See Also

### Accessing iCloud Information

- [hasiCloudAccount](hasicloudaccount.md): A Boolean value that indicates whether the user has an iCloud account.
- [CKUserIdentity.LookupInfo](lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

# lookupInfo (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The lookup info for retrieving the user identity.

## Declaration

```objectivec
@property (copy, readonly, nullable) CKUserIdentityLookupInfo * lookupInfo;
```

<a id="discussion"></a>

## Discussion

Use this property’s value to retrieve the user identity when using the [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) operations.

## See Also

### Accessing iCloud Information

- [hasiCloudAccount](hasicloudaccount.md): A Boolean value that indicates whether the user has an iCloud account.
- [CKUserIdentityLookupInfo](lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

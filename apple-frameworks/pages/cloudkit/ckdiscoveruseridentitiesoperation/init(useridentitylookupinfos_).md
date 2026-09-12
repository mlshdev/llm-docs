> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation/init(useridentitylookupinfos:)](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/init(useridentitylookupinfos:))

# init(userIdentityLookupInfos:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Creates an operation for discovering the user identities of the specified lookup infos.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
convenience init(userIdentityLookupInfos: [CKUserIdentity.LookupInfo])
```

## Parameters

- `userIdentityLookupInfos`: An array that contains instances of [CKUserIdentity.LookupInfo](../ckuseridentity/lookupinfo-swift.class.md). CloudKit uses this parameter as the default value for the [userIdentityLookupInfos](useridentitylookupinfos.md) property. If you specify `nil`, you must assign a value to that property before you execute the operation.

<a id="discussion"></a>

## Discussion

After you create the operation, assign a handler to [discoverUserIdentitiesCompletionBlock](discoveruseridentitiescompletionblock.md) so that you can process the search results.

## See Also

### Creating an Operation

- [init()](init%28%29.md): Deprecated. Creates an operation for discovering user identities.

# initWithUserIdentityLookupInfos: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Creates an operation for discovering the user identities of the specified lookup infos.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
- (instancetype) initWithUserIdentityLookupInfos:(NSArray<CKUserIdentityLookupInfo *> *) userIdentityLookupInfos;
```

## Parameters

- `userIdentityLookupInfos`: An array that contains instances of [CKUserIdentityLookupInfo](../ckuseridentity/lookupinfo-swift.class.md). CloudKit uses this parameter as the default value for the [userIdentityLookupInfos](useridentitylookupinfos.md) property. If you specify `nil`, you must assign a value to that property before you execute the operation.

<a id="discussion"></a>

## Discussion

After you create the operation, assign a handler to [discoverUserIdentitiesCompletionBlock](discoveruseridentitiescompletionblock.md) so that you can process the search results.

## See Also

### Creating an Operation

- [init](init%28%29.md): Deprecated. Creates an operation for discovering user identities.

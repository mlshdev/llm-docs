> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation/useridentitylookupinfos](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/useridentitylookupinfos)

# userIdentityLookupInfos (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The lookup info for discovering user identities.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
var userIdentityLookupInfos: [CKUserIdentity.LookupInfo] { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the lookup info that CloudKit uses to discover user identities. If you intend to modify this property’s value, do so before you execute the operation or submit it to a queue.

# userIdentityLookupInfos (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The lookup info for discovering user identities.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CKUserIdentityLookupInfo *> * userIdentityLookupInfos;
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the lookup info that CloudKit uses to discover user identities. If you intend to modify this property’s value, do so before you execute the operation or submit it to a queue.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation/init()](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Creates an operation for discovering user identities.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You can use the operation only once. Create a new operation for each subsequent search.

## See Also

### Creating an Operation

- [init(userIdentityLookupInfos:)](init%28useridentitylookupinfos_%29.md): Deprecated. Creates an operation for discovering the user identities of the specified lookup infos.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

Creates an operation for discovering user identities.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You can use the operation only once. Create a new operation for each subsequent search.

## See Also

### Creating an Operation

- [initWithUserIdentityLookupInfos:](init%28useridentitylookupinfos_%29.md): Deprecated. Creates an operation for discovering the user identities of the specified lookup infos.

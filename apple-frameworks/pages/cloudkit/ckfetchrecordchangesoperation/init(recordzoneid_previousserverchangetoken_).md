> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/init(recordzoneid:previousserverchangetoken:)](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/init(recordzoneid:previousserverchangetoken:))

# init(recordZoneID:previousServerChangeToken:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Creates an operation for fetching changes in the specified record zone.

## Declaration

```swift
convenience init(recordZoneID: CKRecordZone.ID, previousServerChangeToken: CKServerChangeToken?)
```

## Parameters

- `recordZoneID`: The zone that contains the records you want to fetch. You can fetch changes in a custom zone. CloudKit doesn’t support syncing the default zone.
- `previousServerChangeToken`: The change token from a previous fetch operation. This is the token that the system passes to your [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) handler during a previous fetch operation. Use this token to limit the returned data to only those changes that occur after that fetch request. If you specify `nil` for this parameter, the operation object fetches all records and their contents.

<a id="return-value"></a>

## Return Value

An initialized operation object.

<a id="discussion"></a>

## Discussion

When initializing the operation object, use the token from a previous fetch request if you have one. You can archive tokens and write them to disk for later use.

The returned operation object retrieves all changed fields of the record, including any assets in those fields. If you want to minimize the amount of data that returns even further, configure the [desiredKeys](desiredkeys.md) property with the subset of keys that have values you want to fetch.

After initializing the operation, associate at least one progress block with the operation object (excluding the completion block) to process the results.

## See Also

### Creating the Fetch Record Changes Operation

- [init()](init%28%29.md): Deprecated. Creates an empty fetch record changes operation.

# initWithRecordZoneID:previousServerChangeToken: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Creates an operation for fetching changes in the specified record zone.

## Declaration

```objectivec
- (instancetype) initWithRecordZoneID:(CKRecordZoneID *) recordZoneID previousServerChangeToken:(CKServerChangeToken *) previousServerChangeToken;
```

## Parameters

- `recordZoneID`: The zone that contains the records you want to fetch. You can fetch changes in a custom zone. CloudKit doesn’t support syncing the default zone.
- `previousServerChangeToken`: The change token from a previous fetch operation. This is the token that the system passes to your [fetchRecordChangesCompletionBlock](fetchrecordchangescompletionblock.md) handler during a previous fetch operation. Use this token to limit the returned data to only those changes that occur after that fetch request. If you specify `nil` for this parameter, the operation object fetches all records and their contents.

<a id="return-value"></a>

## Return Value

An initialized operation object.

<a id="discussion"></a>

## Discussion

When initializing the operation object, use the token from a previous fetch request if you have one. You can archive tokens and write them to disk for later use.

The returned operation object retrieves all changed fields of the record, including any assets in those fields. If you want to minimize the amount of data that returns even further, configure the [desiredKeys](desiredkeys.md) property with the subset of keys that have values you want to fetch.

After initializing the operation, associate at least one progress block with the operation object (excluding the completion block) to process the results.

## See Also

### Creating the Fetch Record Changes Operation

- [init](init%28%29.md): Deprecated. Creates an empty fetch record changes operation.

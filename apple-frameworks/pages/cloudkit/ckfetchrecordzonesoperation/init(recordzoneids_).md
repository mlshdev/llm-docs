> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation/init(recordzoneids:)](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/init(recordzoneids:))

# init(recordZoneIDs:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation for fetching the specified record zones.

## Declaration

```swift
convenience init(recordZoneIDs zoneIDs: [CKRecordZone.ID])
```

## Parameters

- `zoneIDs`: An array of [CKRecordZone.ID](../ckrecordzone/id.md) objects that represents the zones you want to retrieve. If you provide an empty array, you must set the [recordZoneIDs](recordzoneids.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property so you can process the results.

## See Also

### Initializing the Zone Fetch Operation

- [init()](init%28%29.md): Creates an empty fetch zones operation.

# initWithRecordZoneIDs: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation for fetching the specified record zones.

## Declaration

```objectivec
- (instancetype) initWithRecordZoneIDs:(NSArray<CKRecordZoneID *> *) zoneIDs;
```

## Parameters

- `zoneIDs`: An array of [CKRecordZoneID](../ckrecordzone/id.md) objects that represents the zones you want to retrieve. If you provide an empty array, you must set the [recordZoneIDs](recordzoneids.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property so you can process the results.

## See Also

### Initializing the Zone Fetch Operation

- [init](init%28%29.md): Creates an empty fetch zones operation.

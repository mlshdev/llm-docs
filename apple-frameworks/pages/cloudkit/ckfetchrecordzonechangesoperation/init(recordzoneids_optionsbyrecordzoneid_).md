> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/init(recordzoneids:optionsbyrecordzoneid:)](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/init(recordzoneids:optionsbyrecordzoneid:))

# init(recordZoneIDs:optionsByRecordZoneID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Creates an operation for fetching record zone changes.

> Use [init(recordZoneIDs:configurationsByRecordZoneID:)](init%28recordzoneids_configurationsbyrecordzoneid_%29.md) instead.

## Declaration

```swift
convenience init(recordZoneIDs: [CKRecordZone.ID], optionsByRecordZoneID: [CKRecordZone.ID : CKFetchRecordZoneChangesOperation.ZoneOptions]? = nil)
```

## Parameters

- `recordZoneIDs`: The IDs of the record zones that you want to query for changes.
- `optionsByRecordZoneID`: A dictionary that maps record zone IDs to their corresponding options. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

CloudKit configures the operation for retrieving all of the record zones that you specify. If you want to reduce the amount of data that CloudKit returns, provide zone options for each record zone.

## See Also

### Deprecated Methods

- [CKFetchRecordZoneChangesOperation.ZoneOptions](zoneoptions.md): Deprecated. A configuration object that describes the information to fetch from a record zone.

# initWithRecordZoneIDs:optionsByRecordZoneID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Creates an operation for fetching record zone changes.

> Use [init(recordZoneIDs:configurationsByRecordZoneID:)](init%28recordzoneids_configurationsbyrecordzoneid_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithRecordZoneIDs:(NSArray<CKRecordZoneID *> *) recordZoneIDs optionsByRecordZoneID:(NSDictionary<CKRecordZoneID *,CKFetchRecordZoneChangesOptions *> *) optionsByRecordZoneID;
```

## Parameters

- `recordZoneIDs`: The IDs of the record zones that you want to query for changes.
- `optionsByRecordZoneID`: A dictionary that maps record zone IDs to their corresponding options. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

CloudKit configures the operation for retrieving all of the record zones that you specify. If you want to reduce the amount of data that CloudKit returns, provide zone options for each record zone.

## See Also

### Deprecated Methods

- [CKFetchRecordZoneChangesOptions](zoneoptions.md): Deprecated. A configuration object that describes the information to fetch from a record zone.

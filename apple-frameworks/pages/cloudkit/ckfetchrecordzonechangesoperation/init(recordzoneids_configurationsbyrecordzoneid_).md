> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/init(recordzoneids:configurationsbyrecordzoneid:)](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/init(recordzoneids:configurationsbyrecordzoneid:))

# init(recordZoneIDs:configurationsByRecordZoneID:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+ · Swift 4.2+

Creates an operation for fetching record zone changes.

## Declaration

```swift
convenience init(recordZoneIDs: [CKRecordZone.ID]? = nil, configurationsByRecordZoneID: [CKRecordZone.ID : CKFetchRecordZoneChangesOperation.ZoneConfiguration]? = nil)
```

## Parameters

- `recordZoneIDs`: The IDs of the record zones that you want to query for changes. You can specify `nil` for this parameter.
- `configurationsByRecordZoneID`: A dictionary that maps record zone IDs to their corresponding configurations. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

CloudKit configures the operation for retrieving all of the record zones that you specify. If you want to reduce the amount of data that CloudKit returns, provide zone configurations for each record zone.

## See Also

### Creating a Zone Change Operation

- [init()](init%28%29.md): Creates an empty fetch record zone changes operation.

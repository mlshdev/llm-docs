> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/configurationsbyrecordzoneid](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/configurationsbyrecordzoneid)

# configurationsByRecordZoneID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary of configurations for fetching change operations by zone identifier.

## Declaration

```swift
var configurationsByRecordZoneID: [CKRecordZone.ID : CKFetchRecordZoneChangesOperation.ZoneConfiguration]? { get set }
```

## See Also

### Configuring the Zone Change Operation

- [CKFetchRecordZoneChangesOperation.ZoneConfiguration](zoneconfiguration.md): A configuration object that describes the information to fetch from a record zone.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [recordZoneIDs](recordzoneids.md): The IDs of the record zones that contain the records to fetch.

# configurationsByRecordZoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary of configurations for fetching change operations by zone identifier.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<CKRecordZoneID *,CKFetchRecordZoneChangesConfiguration *> * configurationsByRecordZoneID;
```

## See Also

### Configuring the Zone Change Operation

- [CKFetchRecordZoneChangesConfiguration](zoneconfiguration.md): A configuration object that describes the information to fetch from a record zone.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.
- [recordZoneIDs](recordzoneids.md): The IDs of the record zones that contain the records to fetch.

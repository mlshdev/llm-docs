> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzoneids](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/recordzoneids)

# recordZoneIDs (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The IDs of the record zones that contain the records to fetch.

## Declaration

```swift
var recordZoneIDs: [CKRecordZone.ID]? { get set }
```

<a id="discussion"></a>

## Discussion

Typically, you set the value of this property when you create the operation. If you intend to change the record zone IDs, update the value before you execute the operation or submit it to a queue.

## See Also

### Configuring the Zone Change Operation

- [configurationsByRecordZoneID](configurationsbyrecordzoneid.md): A dictionary of configurations for fetching change operations by zone identifier.
- [CKFetchRecordZoneChangesOperation.ZoneConfiguration](zoneconfiguration.md): A configuration object that describes the information to fetch from a record zone.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.

# recordZoneIDs (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The IDs of the record zones that contain the records to fetch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKRecordZoneID *> * recordZoneIDs;
```

<a id="discussion"></a>

## Discussion

Typically, you set the value of this property when you create the operation. If you intend to change the record zone IDs, update the value before you execute the operation or submit it to a queue.

## See Also

### Configuring the Zone Change Operation

- [configurationsByRecordZoneID](configurationsbyrecordzoneid.md): A dictionary of configurations for fetching change operations by zone identifier.
- [CKFetchRecordZoneChangesConfiguration](zoneconfiguration.md): A configuration object that describes the information to fetch from a record zone.
- [fetchAllChanges](fetchallchanges.md): A Boolean value that indicates whether to send repeated requests to the server.

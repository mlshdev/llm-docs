> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/modifyrecordzones(saving:deleting:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/modifyrecordzones(saving:deleting:completionhandler:))

# modifyRecordZones(saving:deleting:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Modifies the specified record zones and delivers the results to a completion handler.

## Declaration

```swift
@preconcurrency func modifyRecordZones(saving recordZonesToSave: [CKRecordZone], deleting recordZoneIDsToDelete: [CKRecordZone.ID], completionHandler: @escaping @Sendable (Result<(saveResults: [CKRecordZone.ID : Result<CKRecordZone, any Error>], deleteResults: [CKRecordZone.ID : Result<Void, any Error>]), any Error>) -> Void)
```

## Parameters

- `recordZonesToSave`: The record zones to save.
- `recordZoneIDsToDelete`: The identifiers of the record zones to permanently delete.
- `completionHandler`: The closure to execute after CloudKit processes the changes.

<a id="discussion"></a>

## Discussion

> **Warning**

> Deleting a record zone is a permanent action that deletes every record in that zone. You can’t restore a deleted record zone.

The completion handler takes a single [Result](https://developer.apple.com/documentation/swift/result) parameter that contains either a tuple, or an error if the request fails. For example, when the network is unavailable or the device doesn’t have an active iCloud account.

When present, the tuple contains the following named elements:

- **`saveResults`**: A dictionary of saved record zones. The dictionary uses the identifiers of the record zones you specify in `recordsZonesToSave` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding modified record zone (as it appears on the server), or an error that describes why CloudKit can’t modify that record.
- **`deleteResults`**: A dictionary of deleted record zones. The dictionary uses the identifiers you specify in `recordZoneIDsToDelete` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either [Void](https://developer.apple.com/documentation/swift/void) to indicate a successful deletion, or an error that describes why CloudKit can’t delete that record zone.

For information on a more configurable way to modify record zones, see [CKModifyRecordZonesOperation](../ckmodifyrecordzonesoperation.md).

## See Also

### Modifying Record Zones

- [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md): Modifies the specified record zones and returns the results to an awaiting caller.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-32ffr.md): Saves a specific record zone.
- [delete(withRecordZoneID:completionHandler:)](delete%28withrecordzoneid_completionhandler_%29.md): Deletes a specific record zone.

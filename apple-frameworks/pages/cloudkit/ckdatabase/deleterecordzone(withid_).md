> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/deleterecordzone(withid:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/deleterecordzone(withid:))

# deleteRecordZone(withID:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Deletes a specific record zone.

## Declaration

```swift
@discardableResult func deleteRecordZone(withID zoneID: CKRecordZone.ID) async throws -> CKRecordZone.ID
```

## Parameters

- `zoneID`: The identifier of the record zone to delete.

<a id="return-value"></a>

## Return Value

The identifier of the deleted record zone.

<a id="discussion"></a>

## Discussion

> **Warning**

> Deleting a record zone is a permanent action that deletes every record in that zone. You can’t restore a deleted record zone.

This method throws an error if the request fails, such as when the zone does not exist on the server, the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to delete record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

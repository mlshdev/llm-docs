> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/recordzones(for:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/recordzones(for:))

# recordZones(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified record zones and returns them to an awaiting caller.

## Declaration

```swift
func recordZones(for ids: [CKRecordZone.ID]) async throws -> [CKRecordZone.ID : Result<CKRecordZone, any Error>]
```

## Parameters

- `ids`: The identifiers of the record zones to fetch.

<a id="return-value"></a>

## Return Value

A dictionary that contains the fetched record zones. The dictionary uses the specified record zone identifiers as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched record zone, or an error that describes why CloudKit can’t provide that record zone.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account; otherwise, the returned dictionary includes any individual record zone errors.

For information on a more configurable way to fetch specific record zones, see [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md).

## See Also

### Fetching Record Zones

- [fetch(withRecordZoneIDs:completionHandler:)](fetch%28withrecordzoneids_completionhandler_%29.md): Fetches the specified record zones and delivers them to a completion handler.
- [fetchAllRecordZones(completionHandler:)](fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.
- [fetch(withRecordZoneID:completionHandler:)](fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

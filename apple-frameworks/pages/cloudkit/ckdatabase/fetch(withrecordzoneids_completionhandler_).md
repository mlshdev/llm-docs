> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withrecordzoneids:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withrecordzoneids:completionhandler:))

# fetch(withRecordZoneIDs:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified record zones and delivers them to a completion handler.

## Declaration

```swift
@preconcurrency func fetch(withRecordZoneIDs zoneIDs: [CKRecordZone.ID], completionHandler: @escaping @Sendable (Result<[CKRecordZone.ID : Result<CKRecordZone, any Error>], any Error>) -> Void)
```

## Parameters

- `zoneIDs`: The identifiers of the record zones to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a dictionary of fetched record zones, or an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account. When present, the dictionary uses the identifiers you specify in `zoneIDs` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched record zone, or an error that describes why CloudKit can’t provide that record zone.

For information on a more configurable way to fetch specific record zones, see [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md).

## See Also

### Fetching Record Zones

- [recordZones(for:)](recordzones%28for_%29.md): Fetches the specified record zones and returns them to an awaiting caller.
- [fetchAllRecordZones(completionHandler:)](fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.
- [fetch(withRecordZoneID:completionHandler:)](fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

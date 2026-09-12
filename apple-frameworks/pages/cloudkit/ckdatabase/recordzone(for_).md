> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/recordzone(for:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/recordzone(for:))

# recordZone(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches a specific record zone.

## Declaration

```swift
func recordZone(for zoneID: CKRecordZone.ID) async throws -> CKRecordZone
```

## Parameters

- `zoneID`: The identifier of the record zone to fetch.

<a id="return-value"></a>

## Return Value

The fetched record zone.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the zone does not exist, the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to fetch specific record zones, see [recordZones(for:)](recordzones%28for_%29.md).

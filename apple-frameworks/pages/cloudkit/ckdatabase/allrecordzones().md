> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/allrecordzones()](https://developer.apple.com/documentation/cloudkit/ckdatabase/allrecordzones())

# allRecordZones()

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches all record zones from the current database.

## Declaration

```swift
func allRecordZones() async throws -> [CKRecordZone]
```

<a id="return-value"></a>

## Return Value

An array of fetched record zones which contains at least one record zone, the default zone.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

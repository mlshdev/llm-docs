> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/save(_:)-7btlo](https://developer.apple.com/documentation/cloudkit/ckdatabase/save(_:)-7btlo)

# save(\_:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Saves a specific record zone.

## Declaration

```swift
func save(_ zone: CKRecordZone) async throws -> CKRecordZone
```

## Parameters

- `zone`: The record zone to save.

<a id="return-value"></a>

## Return Value

The saved record zone (as it appears on the server).

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to save record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

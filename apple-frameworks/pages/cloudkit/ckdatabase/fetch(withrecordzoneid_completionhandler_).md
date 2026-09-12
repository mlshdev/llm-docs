> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withrecordzoneid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withrecordzoneid:completionhandler:))

# fetch(withRecordZoneID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches a specific record zone.

## Declaration

```swift
func fetch(withRecordZoneID zoneID: CKRecordZone.ID, completionHandler: @escaping @Sendable (CKRecordZone?, (any Error)?) -> Void)
```

```swift
func fetch(withRecordZoneID zoneID: CKRecordZone.ID) async throws -> CKRecordZone
```

## Parameters

- `zoneID`: The identifier of the record zone to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The fetched record zone, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches the specified record zone.

For information on a more convenient way to fetch specific record zones, see [recordZones(for:)](recordzones%28for_%29.md) in Swift or [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) in Objective-C.

## See Also

### Fetching Record Zones

- [recordZones(for:)](recordzones%28for_%29.md): Fetches the specified record zones and returns them to an awaiting caller.
- [fetch(withRecordZoneIDs:completionHandler:)](fetch%28withrecordzoneids_completionhandler_%29.md): Fetches the specified record zones and delivers them to a completion handler.
- [fetchAllRecordZones(completionHandler:)](fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.

# fetchRecordZoneWithID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches a specific record zone.

## Declaration

```objectivec
- (void) fetchRecordZoneWithID:(CKRecordZoneID *) zoneID completionHandler:(void (^)(CKRecordZone *zone, NSError *error)) completionHandler;
```

## Parameters

- `zoneID`: The identifier of the record zone to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The fetched record zone, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches the specified record zone.

For information on a more convenient way to fetch specific record zones, see [recordZones(for:)](recordzones%28for_%29.md) in Swift or [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) in Objective-C.

## See Also

### Fetching Record Zones

- [fetchAllRecordZonesWithCompletionHandler:](fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.

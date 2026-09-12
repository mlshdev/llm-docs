> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetchallrecordzones(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetchallrecordzones(completionhandler:))

# fetchAllRecordZones(completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches all record zones from the current database.

## Declaration

```swift
func fetchAllRecordZones(completionHandler: @escaping @Sendable ([CKRecordZone]?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An array of fetched record zones, or `nil` if there’s an error. When present, the array contains at least one record zone, the default zone.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches all record zones.

## See Also

### Fetching Record Zones

- [recordZones(for:)](recordzones%28for_%29.md): Fetches the specified record zones and returns them to an awaiting caller.
- [fetch(withRecordZoneIDs:completionHandler:)](fetch%28withrecordzoneids_completionhandler_%29.md): Fetches the specified record zones and delivers them to a completion handler.
- [fetch(withRecordZoneID:completionHandler:)](fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

# fetchAllRecordZonesWithCompletionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fetches all record zones from the current database.

## Declaration

```objectivec
- (void) fetchAllRecordZonesWithCompletionHandler:(void (^)(NSArray<CKRecordZone *> *zones, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An array of fetched record zones, or `nil` if there’s an error. When present, the array contains at least one record zone, the default zone.
- An error if a problem occurs, or `nil` if CloudKit successfully fetches all record zones.

## See Also

### Fetching Record Zones

- [fetchRecordZoneWithID:completionHandler:](fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

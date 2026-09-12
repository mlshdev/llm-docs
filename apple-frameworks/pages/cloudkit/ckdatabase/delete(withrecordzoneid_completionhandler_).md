> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/delete(withrecordzoneid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/delete(withrecordzoneid:completionhandler:))

# delete(withRecordZoneID:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes a specific record zone.

## Declaration

```swift
func delete(withRecordZoneID zoneID: CKRecordZone.ID, completionHandler: @escaping @Sendable (CKRecordZone.ID?, (any Error)?) -> Void)
```

```swift
func delete(withRecordZoneID zoneID: CKRecordZone.ID) async throws -> CKRecordZone.ID
```

## Parameters

- `zoneID`: The identifier of the record zone to delete.
- `completionHandler`: The closure to execute after CloudKit deletes the record zone.

<a id="discussion"></a>

## Discussion

> **Warning**

> Deleting a record zone is a permanent action that deletes every record in that zone. You can’t restore a deleted record zone.

The completion handler takes the following parameters:

- The identifier of the deleted record zone, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully deletes the record zone.

For information on a more convenient way to delete record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

## See Also

### Modifying Record Zones

- [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md): Modifies the specified record zones and returns the results to an awaiting caller.
- [modifyRecordZones(saving:deleting:completionHandler:)](modifyrecordzones%28saving_deleting_completionhandler_%29.md): Modifies the specified record zones and delivers the results to a completion handler.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-32ffr.md): Saves a specific record zone.

# deleteRecordZoneWithID:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes a specific record zone.

## Declaration

```objectivec
- (void) deleteRecordZoneWithID:(CKRecordZoneID *) zoneID completionHandler:(void (^)(CKRecordZoneID *zoneID, NSError *error)) completionHandler;
```

## Parameters

- `zoneID`: The identifier of the record zone to delete.
- `completionHandler`: The closure to execute after CloudKit deletes the record zone.

<a id="discussion"></a>

## Discussion

> **Warning**

> Deleting a record zone is a permanent action that deletes every record in that zone. You can’t restore a deleted record zone.

The completion handler takes the following parameters:

- The identifier of the deleted record zone, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully deletes the record zone.

For information on a more convenient way to delete record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

## See Also

### Modifying Record Zones

- [saveRecordZone:completionHandler:](save%28__completionhandler_%29-32ffr.md): Saves a specific record zone.

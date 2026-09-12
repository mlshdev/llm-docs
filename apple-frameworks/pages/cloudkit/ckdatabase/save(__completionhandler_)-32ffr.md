> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/save(_:completionhandler:)-32ffr](https://developer.apple.com/documentation/cloudkit/ckdatabase/save(_:completionhandler:)-32ffr)

# save(\_:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Saves a specific record zone.

## Declaration

```swift
func save(_ zone: CKRecordZone, completionHandler: @escaping @Sendable (CKRecordZone?, (any Error)?) -> Void)
```

## Parameters

- `zone`: The record zone to save.
- `completionHandler`: The closure to execute after CloudKit saves the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved record zone (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the record zone.

For information on a more convenient way to save record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

## See Also

### Modifying Record Zones

- [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md): Modifies the specified record zones and returns the results to an awaiting caller.
- [modifyRecordZones(saving:deleting:completionHandler:)](modifyrecordzones%28saving_deleting_completionhandler_%29.md): Modifies the specified record zones and delivers the results to a completion handler.
- [delete(withRecordZoneID:completionHandler:)](delete%28withrecordzoneid_completionhandler_%29.md): Deletes a specific record zone.

# saveRecordZone:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Saves a specific record zone.

## Declaration

```objectivec
- (void) saveRecordZone:(CKRecordZone *) zone completionHandler:(void (^)(CKRecordZone *zone, NSError *error)) completionHandler;
```

## Parameters

- `zone`: The record zone to save.
- `completionHandler`: The closure to execute after CloudKit saves the record.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved record zone (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the record zone.

For information on a more convenient way to save record zones, see [modifyRecordZones(saving:deleting:)](modifyrecordzones%28saving_deleting_%29.md).

## See Also

### Modifying Record Zones

- [deleteRecordZoneWithID:completionHandler:](delete%28withrecordzoneid_completionhandler_%29.md): Deletes a specific record zone.

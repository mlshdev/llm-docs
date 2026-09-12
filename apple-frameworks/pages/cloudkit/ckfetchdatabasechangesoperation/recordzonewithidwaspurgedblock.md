> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidwaspurgedblock](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/recordzonewithidwaspurgedblock)

# recordZoneWithIDWasPurgedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The closure to execute when CloudKit purges a record zone.

## Declaration

```swift
var recordZoneWithIDWasPurgedBlock: ((CKRecordZone.ID) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- **`zoneID`**: The purged record zone’s ID.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# recordZoneWithIDWasPurgedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The closure to execute when CloudKit purges a record zone.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordZoneWithIDWasPurgedBlock)(CKRecordZoneID *zoneID);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- **`zoneID`**: The purged record zone’s ID.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

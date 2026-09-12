> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/changetokenupdatedblock](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/changetokenupdatedblock)

# changeTokenUpdatedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the change token updates.

## Declaration

```swift
var changeTokenUpdatedBlock: ((CKServerChangeToken) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure executes periodically, and provides a new change token so that you don’t need to refetch previously fetched record zone changes in a subsequent operation.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# changeTokenUpdatedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the change token updates.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^changeTokenUpdatedBlock)(CKServerChangeToken *serverChangeToken);
```

<a id="discussion"></a>

## Discussion

The closure executes periodically, and provides a new change token so that you don’t need to refetch previously fetched record zone changes in a subsequent operation.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [fetchDatabaseChangesCompletionBlock](fetchdatabasechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

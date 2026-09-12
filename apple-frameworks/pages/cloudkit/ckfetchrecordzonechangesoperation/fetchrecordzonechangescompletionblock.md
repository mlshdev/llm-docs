> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/fetchrecordzonechangescompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/fetchrecordzonechangescompletionblock)

# fetchRecordZoneChangesCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when the operation finishes.

> Use fetchRecordZoneChangesResultBlock instead

## Declaration

```swift
var fetchRecordZoneChangesCompletionBlock: (((any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure has no return value and takes the following parameter:

- An error object that contains information about a problem, or `nil` if CloudKit successfully retrieves the record zone changes.

This closure executes only once, and represents your final opportunity to process the results. The closure executes serially with respect to the other closures of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-3z14c.md): The closure to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.

# fetchRecordZoneChangesCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the operation finishes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^fetchRecordZoneChangesCompletionBlock)(NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The closure has no return value and takes the following parameter:

- An error object that contains information about a problem, or `nil` if CloudKit successfully retrieves the record zone changes.

This closure executes only once, and represents your final opportunity to process the results. The closure executes serially with respect to the other closures of the operation.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](recordwithidwasdeletedblock-912xy.md): The block to execute when a record no longer exists.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.

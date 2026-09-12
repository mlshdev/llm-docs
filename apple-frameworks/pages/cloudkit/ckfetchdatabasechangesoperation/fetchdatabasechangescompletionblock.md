> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchdatabasechangesoperation/fetchdatabasechangescompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/fetchdatabasechangescompletionblock)

# fetchDatabaseChangesCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when the operation finishes.

> Use fetchDatabaseChangesResultBlock instead

## Declaration

```swift
var fetchDatabaseChangesCompletionBlock: ((CKServerChangeToken?, Bool, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The change token to store and use in subsequent instances of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md).
- A Boolean value that indicates whether this is the final database change. If [fetchAllChanges](fetchallchanges.md) is [false](https://developer.apple.com/documentation/swift/false), it’s the app’s responsibility to create additional instances of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md) to fetch further changes.
- An error object that contains information about a problem, or `nil` if CloudKit successfully retrieves the database changes.

> **Note**

> The change token and error parameters are mutually exclusive — that is, the closure provides one of them but not both.

Your app is responsible for saving the change token at the end of the operation and providing it to future uses of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md). If the server returns a [CKError.Code.changeTokenExpired](../ckerror/code/changetokenexpired.md) error, the [previousServerChangeToken](previousserverchangetoken.md) value is stale and your app needs to clear its local cache and refetch the database changes, starting with a `nil` change token.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.

# fetchDatabaseChangesCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The closure to execute when the operation finishes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^fetchDatabaseChangesCompletionBlock)(CKServerChangeToken *serverChangeToken, BOOL moreComing, NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The change token to store and use in subsequent instances of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md).
- A Boolean value that indicates whether this is the final database change. If [fetchAllChanges](fetchallchanges.md) is [false](https://developer.apple.com/documentation/swift/false), it’s the app’s responsibility to create additional instances of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md) to fetch further changes.
- An error object that contains information about a problem, or `nil` if CloudKit successfully retrieves the database changes.

> **Note**

> The change token and error parameters are mutually exclusive — that is, the closure provides one of them but not both.

Your app is responsible for saving the change token at the end of the operation and providing it to future uses of [CKFetchDatabaseChangesOperation](../ckfetchdatabasechangesoperation.md). If the server returns a [CKErrorChangeTokenExpired](../ckerror/code/changetokenexpired.md) error, the [previousServerChangeToken](previousserverchangetoken.md) value is stale and your app needs to clear its local cache and refetch the database changes, starting with a `nil` change token.

## See Also

### Processing the Operation’s Results

- [recordZoneWithIDChangedBlock](recordzonewithidchangedblock.md): The closure to execute with a single record zone change.
- [recordZoneWithIDWasDeletedBlock](recordzonewithidwasdeletedblock.md): The closure to execute when a record zone no longer exists.
- [recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock](recordzonewithidwasdeletedduetouserencrypteddataresetblock.md): The closure to execute when a user-invoked account reset deletes a record zone.
- [recordZoneWithIDWasPurgedBlock](recordzonewithidwaspurgedblock.md): The closure to execute when CloudKit purges a record zone.
- [changeTokenUpdatedBlock](changetokenupdatedblock.md): The closure to execute when the change token updates.

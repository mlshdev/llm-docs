> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation)

# CKFetchRecordChangesOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

An operation that reports on the changed and deleted records in the specified record zone.

> Use [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md) instead.

## Declaration

```swift
class CKFetchRecordChangesOperation
```

<a id="overview"></a>

## Overview

Use this type of operation object to optimize fetch operations for sets of records you manage locally. Specifically, use it when you maintain a local cache of your record data and need to synchronize that cache periodically with the server.

To get the most benefit out of a `CKFetchRecordChangesOperation` object, you must maintain a local cache of the records from the specified zone. Each time you fetch changes from that zone, the server provides a token that identifies your request. With each subsequent fetch request, you initialize the operation object with the token from the previous request, and the server returns only the records with changes since that request.

The blocks you assign to process the fetched records execute serially on an internal queue that the operation manages. You must provide blocks capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

If you assign a completion block to the [completionBlock](../foundation/operation/completionblock.md) property of the operation object, the system calls the completion block after the operation executes and returns its results to you. You can use a completion block to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. Any completion block you specify should handle the failure of the operation to complete its task, whether due to an error or an explicit cancellation.

## Topics

### Creating the Fetch Record Changes Operation

- [init(recordZoneID:previousServerChangeToken:)](ckfetchrecordchangesoperation/init%28recordzoneid_previousserverchangetoken_%29.md): Deprecated. Creates an operation for fetching changes in the specified record zone.
- [init()](ckfetchrecordchangesoperation/init%28%29.md): Deprecated. Creates an empty fetch record changes operation.

### Configuring the Fetch Record Changes Operation

- [recordZoneID](ckfetchrecordchangesoperation/recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](ckfetchrecordchangesoperation/previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](ckfetchrecordchangesoperation/desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](ckfetchrecordchangesoperation/resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](ckfetchrecordchangesoperation/morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

### Processing the Fetch Record Changes Results

- [recordChangedBlock](ckfetchrecordchangesoperation/recordchangedblock.md): Deprecated. The block to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](ckfetchrecordchangesoperation/recordwithidwasdeletedblock.md): Deprecated. The block to execute with the ID of a deleted record.
- [fetchRecordChangesCompletionBlock](ckfetchrecordchangesoperation/fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated classes

- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md): Deprecated. An operation that uses the device’s contacts to search for discoverable iCloud users.
- [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md): Deprecated. An operation that uses the provided criteria to search for discoverable iCloud users.

# CKFetchRecordChangesOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

An operation that reports on the changed and deleted records in the specified record zone.

> Use [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md) instead.

## Declaration

```objectivec
@interface CKFetchRecordChangesOperation : CKDatabaseOperation
```

<a id="overview"></a>

## Overview

Use this type of operation object to optimize fetch operations for sets of records you manage locally. Specifically, use it when you maintain a local cache of your record data and need to synchronize that cache periodically with the server.

To get the most benefit out of a `CKFetchRecordChangesOperation` object, you must maintain a local cache of the records from the specified zone. Each time you fetch changes from that zone, the server provides a token that identifies your request. With each subsequent fetch request, you initialize the operation object with the token from the previous request, and the server returns only the records with changes since that request.

The blocks you assign to process the fetched records execute serially on an internal queue that the operation manages. You must provide blocks capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

If you assign a completion block to the [completionBlock](../foundation/operation/completionblock.md) property of the operation object, the system calls the completion block after the operation executes and returns its results to you. You can use a completion block to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. Any completion block you specify should handle the failure of the operation to complete its task, whether due to an error or an explicit cancellation.

## Topics

### Creating the Fetch Record Changes Operation

- [initWithRecordZoneID:previousServerChangeToken:](ckfetchrecordchangesoperation/init%28recordzoneid_previousserverchangetoken_%29.md): Deprecated. Creates an operation for fetching changes in the specified record zone.
- [init](ckfetchrecordchangesoperation/init%28%29.md): Deprecated. Creates an empty fetch record changes operation.

### Configuring the Fetch Record Changes Operation

- [recordZoneID](ckfetchrecordchangesoperation/recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](ckfetchrecordchangesoperation/previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [desiredKeys](ckfetchrecordchangesoperation/desiredkeys.md): Deprecated. The fields to fetch for the requested records.
- [resultsLimit](ckfetchrecordchangesoperation/resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](ckfetchrecordchangesoperation/morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

### Processing the Fetch Record Changes Results

- [recordChangedBlock](ckfetchrecordchangesoperation/recordchangedblock.md): Deprecated. The block to execute with the contents of a changed record.
- [recordWithIDWasDeletedBlock](ckfetchrecordchangesoperation/recordwithidwasdeletedblock.md): Deprecated. The block to execute with the ID of a deleted record.
- [fetchRecordChangesCompletionBlock](ckfetchrecordchangesoperation/fetchrecordchangescompletionblock.md): Deprecated. The block to execute when the system finishes processing all changes.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Deprecated classes

- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md): Deprecated. An operation that uses the device’s contacts to search for discoverable iCloud users.
- [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md): Deprecated. An operation that uses the provided criteria to search for discoverable iCloud users.

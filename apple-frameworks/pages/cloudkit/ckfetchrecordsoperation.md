> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordsoperation](https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation)

# CKFetchRecordsOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for retrieving records from a database.

## Declaration

```swift
class CKFetchRecordsOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Use this operation to retrieve the entire contents of each record or only a subset of its contained values. As records become available, the operation object reports progress about the state of the operation to several different blocks, which you can use to process the results.

Fetching records is a common use of CloudKit, even if your app doesn’t cache record IDs locally. For example, when you fetch a record related to the current record through a [CKRecord.Reference](ckrecord/reference.md) object, you use the ID in the reference to perform the fetch.

The handlers you assign to process the fetched records execute serially on an internal queue that the fetch operation manages. You must provide handlers capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

In addition to data records, a fetch records operation can fetch the current user record. The [fetchCurrentUserRecordOperation()](ckfetchrecordsoperation/fetchcurrentuserrecordoperation%28%29.md) method returns a specially configured operation object that retrieves the current user record. That record is a standard [CKRecord](ckrecord.md) object that has no content initially. You can add data to the user record and save it as necessary. Don’t store sensitive personal information, such as passwords, in the user record because other users of your app can access the discoverable user record in a public database. If you must store sensitive information about a user, do so in a separate record that is accessible only to that user.

If you assign a closure to the [completionBlock](../foundation/operation/completionblock.md) property of the operation object, CloudKit calls it after the operation executes and returns its results. Use a closure to perform any housekeeping tasks for the operation, but don’t use it to process the results of the operation. The closure you specify should handle the failure of the operation to complete its task, whether due to an error or an explicit cancellation.

## Topics

### Creating a Record Fetch Operation

- [init(recordIDs:)](ckfetchrecordsoperation/init%28recordids_%29.md): Creates a fetch operation for retrieving the records with the specified IDs.
- [init()](ckfetchrecordsoperation/init%28%29.md): Creates an empty fetch operation.

### Getting the Current User Record

- [fetchCurrentUserRecordOperation()](ckfetchrecordsoperation/fetchcurrentuserrecordoperation%28%29.md): Returns a fetch operation for retrieving the current user record.

### Configuring a Record Fetch Operation

- [recordIDs](ckfetchrecordsoperation/recordids.md): The record IDs of the records to fetch.
- [desiredKeys](ckfetchrecordsoperation/desiredkeys-31bbq.md): The fields of the records to fetch.

### Processing Record Fetch Results

- [perRecordProgressBlock](ckfetchrecordsoperation/perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](ckfetchrecordsoperation/perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.
- [fetchRecordsCompletionBlock](ckfetchrecordsoperation/fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

### Instance Properties

- [fetchRecordsResultBlock](ckfetchrecordsoperation/fetchrecordsresultblock.md): The closure to execute after CloudKit retrieves all of the records.
- [perRecordResultBlock](ckfetchrecordsoperation/perrecordresultblock.md): The closure to execute when a record becomes available.

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

### Fetch Requests

- [CKFetchRecordZonesOperation](ckfetchrecordzonesoperation.md): An operation for retrieving record zones from a database.

# CKFetchRecordsOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for retrieving records from a database.

## Declaration

```objectivec
@interface CKFetchRecordsOperation : CKDatabaseOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Use this operation to retrieve the entire contents of each record or only a subset of its contained values. As records become available, the operation object reports progress about the state of the operation to several different blocks, which you can use to process the results.

Fetching records is a common use of CloudKit, even if your app doesn’t cache record IDs locally. For example, when you fetch a record related to the current record through a [CKReference](ckrecord/reference.md) object, you use the ID in the reference to perform the fetch.

The handlers you assign to process the fetched records execute serially on an internal queue that the fetch operation manages. You must provide handlers capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

In addition to data records, a fetch records operation can fetch the current user record. The [fetchCurrentUserRecordOperation](ckfetchrecordsoperation/fetchcurrentuserrecordoperation%28%29.md) method returns a specially configured operation object that retrieves the current user record. That record is a standard [CKRecord](ckrecord.md) object that has no content initially. You can add data to the user record and save it as necessary. Don’t store sensitive personal information, such as passwords, in the user record because other users of your app can access the discoverable user record in a public database. If you must store sensitive information about a user, do so in a separate record that is accessible only to that user.

If you assign a closure to the [completionBlock](../foundation/operation/completionblock.md) property of the operation object, CloudKit calls it after the operation executes and returns its results. Use a closure to perform any housekeeping tasks for the operation, but don’t use it to process the results of the operation. The closure you specify should handle the failure of the operation to complete its task, whether due to an error or an explicit cancellation.

## Topics

### Creating a Record Fetch Operation

- [initWithRecordIDs:](ckfetchrecordsoperation/init%28recordids_%29.md): Creates a fetch operation for retrieving the records with the specified IDs.
- [init](ckfetchrecordsoperation/init%28%29.md): Creates an empty fetch operation.

### Getting the Current User Record

- [fetchCurrentUserRecordOperation](ckfetchrecordsoperation/fetchcurrentuserrecordoperation%28%29.md): Returns a fetch operation for retrieving the current user record.

### Configuring a Record Fetch Operation

- [recordIDs](ckfetchrecordsoperation/recordids.md): The record IDs of the records to fetch.
- [desiredKeys](ckfetchrecordsoperation/desiredkeys-34l1l.md): The fields of the records to fetch.

### Processing Record Fetch Results

- [perRecordProgressBlock](ckfetchrecordsoperation/perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](ckfetchrecordsoperation/perrecordcompletionblock.md): Deprecated. The closure to execute when a record becomes available.
- [fetchRecordsCompletionBlock](ckfetchrecordsoperation/fetchrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Fetch Requests

- [CKFetchRecordZonesOperation](ckfetchrecordzonesoperation.md): An operation for retrieving record zones from a database.

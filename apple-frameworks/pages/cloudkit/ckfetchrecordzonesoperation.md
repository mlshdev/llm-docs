> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation)

# CKFetchRecordZonesOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for retrieving record zones from a database.

## Declaration

```swift
class CKFetchRecordZonesOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Use this operation object to fetch record zones so that you can ascertain their capabilities.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls it after the operation executes and returns its results. You can use the handler to perform any housekeeping tasks that relate to the operation, but don’t use it to process the results of the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Initializing the Zone Fetch Operation

- [init(recordZoneIDs:)](ckfetchrecordzonesoperation/init%28recordzoneids_%29.md): Creates an operation for fetching the specified record zones.
- [init()](ckfetchrecordzonesoperation/init%28%29.md): Creates an empty fetch zones operation.

### Getting All Record Zones

- [fetchAllRecordZonesOperation()](ckfetchrecordzonesoperation/fetchallrecordzonesoperation%28%29.md): Returns an operation for fetching all record zones in the current database.

### Configuring a Zone Fetch Operation

- [recordZoneIDs](ckfetchrecordzonesoperation/recordzoneids.md): The IDs of the record zones to retrieve.

### Processing Zone Fetch Results

- [fetchRecordZonesCompletionBlock](ckfetchrecordzonesoperation/fetchrecordzonescompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the record zones.

### Instance Properties

- [fetchRecordZonesResultBlock](ckfetchrecordzonesoperation/fetchrecordzonesresultblock.md): The closure to execute after CloudKit retrieves all of the record zones.
- [perRecordZoneResultBlock](ckfetchrecordzonesoperation/perrecordzoneresultblock.md): The closure to execute when a record zone becomes available.

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

- [CKFetchRecordsOperation](ckfetchrecordsoperation.md): An operation for retrieving records from a database.

# CKFetchRecordZonesOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for retrieving record zones from a database.

## Declaration

```objectivec
@interface CKFetchRecordZonesOperation : CKDatabaseOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Use this operation object to fetch record zones so that you can ascertain their capabilities.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls it after the operation executes and returns its results. You can use the handler to perform any housekeeping tasks that relate to the operation, but don’t use it to process the results of the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Initializing the Zone Fetch Operation

- [initWithRecordZoneIDs:](ckfetchrecordzonesoperation/init%28recordzoneids_%29.md): Creates an operation for fetching the specified record zones.
- [init](ckfetchrecordzonesoperation/init%28%29.md): Creates an empty fetch zones operation.

### Getting All Record Zones

- [fetchAllRecordZonesOperation](ckfetchrecordzonesoperation/fetchallrecordzonesoperation%28%29.md): Returns an operation for fetching all record zones in the current database.

### Configuring a Zone Fetch Operation

- [recordZoneIDs](ckfetchrecordzonesoperation/recordzoneids.md): The IDs of the record zones to retrieve.

### Processing Zone Fetch Results

- [fetchRecordZonesCompletionBlock](ckfetchrecordzonesoperation/fetchrecordzonescompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the record zones.

### Instance Properties

- [perRecordZoneCompletionBlock](ckfetchrecordzonesoperation/perrecordzonecompletionblock.md): The closure to execute as the operation fetches individual record zones.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Fetch Requests

- [CKFetchRecordsOperation](ckfetchrecordsoperation.md): An operation for retrieving records from a database.

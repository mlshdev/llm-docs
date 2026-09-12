> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation)

# CKModifyRecordZonesOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation that modifies one or more record zones.

## Declaration

```swift
class CKModifyRecordZonesOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)
- [Responding to Requests to Delete Data](responding-to-requests-to-delete-data.md)

<a id="overview"></a>

## Overview

After you create one or more record zones, use this operation to save those zones to the database. You can also use the operation to delete record zones and their records.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls the handler after the operation executes and returns its results. Use the handler to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. The handler you provide should manage any failures of the operation, whether due to an error or an explicit cancellation.

## Topics

### Creating a Modify Zones Operation

- [init(recordZonesToSave:recordZoneIDsToDelete:)](ckmodifyrecordzonesoperation/init%28recordzonestosave_recordzoneidstodelete_%29.md): Creates an operation for modifying the specified record zones.
- [init()](ckmodifyrecordzonesoperation/init%28%29.md): Creates an empty modify record zones operation.

### Configuring the Modify Zones Operation

- [recordZonesToSave](ckmodifyrecordzonesoperation/recordzonestosave.md): The record zones to save to the database.
- [recordZoneIDsToDelete](ckmodifyrecordzonesoperation/recordzoneidstodelete.md): The IDs of the record zones to delete permanently from the database.

### Processing the Modify Zones Results

- [modifyRecordZonesCompletionBlock](ckmodifyrecordzonesoperation/modifyrecordzonescompletionblock.md): Deprecated. The closure to execute after CloudKit modifies all of the record zones.

### Instance Properties

- [modifyRecordZonesResultBlock](ckmodifyrecordzonesoperation/modifyrecordzonesresultblock.md): The closure to execute after CloudKit modifies all of the record zones.
- [perRecordZoneDeleteBlock](ckmodifyrecordzonesoperation/perrecordzonedeleteblock-6c82y.md): The closure to execute when CloudKit deletes a record zone.
- [perRecordZoneSaveBlock](ckmodifyrecordzonesoperation/perrecordzonesaveblock-1m45y.md): The closure to execute when CloudKit saves a record zone.

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

### Transactions

- [CKModifyRecordsOperation](ckmodifyrecordsoperation.md): An operation that modifies one or more records.

# CKModifyRecordZonesOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation that modifies one or more record zones.

## Declaration

```objectivec
@interface CKModifyRecordZonesOperation : CKDatabaseOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)
- [Responding to Requests to Delete Data](responding-to-requests-to-delete-data.md)

<a id="overview"></a>

## Overview

After you create one or more record zones, use this operation to save those zones to the database. You can also use the operation to delete record zones and their records.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls the handler after the operation executes and returns its results. Use the handler to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. The handler you provide should manage any failures of the operation, whether due to an error or an explicit cancellation.

## Topics

### Creating a Modify Zones Operation

- [initWithRecordZonesToSave:recordZoneIDsToDelete:](ckmodifyrecordzonesoperation/initwithrecordzonestosave_recordzoneidstodelete_.md): Creates an operation for modifying the specified record zones.
- [init](ckmodifyrecordzonesoperation/init%28%29.md): Creates an empty modify record zones operation.

### Configuring the Modify Zones Operation

- [recordZonesToSave](ckmodifyrecordzonesoperation/recordzonestosave.md): The record zones to save to the database.
- [recordZoneIDsToDelete](ckmodifyrecordzonesoperation/recordzoneidstodelete.md): The IDs of the record zones to delete permanently from the database.

### Processing the Modify Zones Results

- [modifyRecordZonesCompletionBlock](ckmodifyrecordzonesoperation/modifyrecordzonescompletionblock.md): Deprecated. The closure to execute after CloudKit modifies all of the record zones.

### Instance Properties

- [perRecordZoneDeleteBlock](ckmodifyrecordzonesoperation/perrecordzonedeleteblock-27i5g.md): The closure to execute when CloudKit deletes a record zone.
- [perRecordZoneSaveBlock](ckmodifyrecordzonesoperation/perrecordzonesaveblock-3txst.md): The closure to execute when CloudKit saves a record zone.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Transactions

- [CKModifyRecordsOperation](ckmodifyrecordsoperation.md): An operation that modifies one or more records.

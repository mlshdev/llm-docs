> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation)

# CKModifyRecordsOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation that modifies one or more records.

## Declaration

```swift
class CKModifyRecordsOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

After modifying the fields of a record, use this operation to save those changes to a database. You also use this operation to delete records permanently from a database.

If you’re saving a record that contains a reference to another record, set the reference’s [action](ckrecord/reference/action-swift.property.md) to indicate if the target record’s deletion should cascade to the saved record. This helps avoid orphaned records in explicit record hierarchies. When creating two new records that have a reference between them, use the same operation to save both records at the same time. During a save operation, CloudKit requires that the target record of the [parent](ckrecord/parent.md) reference, if set, exists in the database or is part of the same operation; all other reference fields are exempt from this requirement.

When you save records, the value in the [savePolicy](ckmodifyrecordsoperation/savepolicy.md) property determines how to proceed when CloudKit detects conflicts. Because records can change between the time you fetch them and the time you save them, the save policy determines whether new changes overwrite existing changes. By default, the operation reports an error when there’s a newer version on the server. You can change the default setting to permit your changes to overwrite the server values wholly or partially.

The handlers you assign to monitor progress of the operation execute serially on an internal queue that the operation manages. You must provide handlers capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

If you assign a completion handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls it after the operation executes and returns the results. Use the completion handler to perform any housekeeping tasks for the operation, but don’t use it to process the results of the operation. The completion handler you provide should manage any failures of the operation, whether due to an error or an explicit cancellation.

> **Important**

> To ensure the speed of fetching and saving records, the server may reject large operations. When this occurs, a block reports the [CKError.Code.limitExceeded](ckerror/code/limitexceeded.md) error. Your app should handle this error, and refactor the operation into multiple smaller batches.

## Topics

### Creating a Modify Record Operation

- [init(recordsToSave:recordIDsToDelete:)](ckmodifyrecordsoperation/init%28recordstosave_recordidstodelete_%29.md): Creates an operation for modifying the specified records.
- [init()](ckmodifyrecordsoperation/init%28%29.md): Creates an empty modify records operation.

### Configuring the Modify Record Operation

- [recordsToSave](ckmodifyrecordsoperation/recordstosave.md): The records to save to the database.
- [recordIDsToDelete](ckmodifyrecordsoperation/recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [clientChangeTokenData](ckmodifyrecordsoperation/clientchangetokendata.md): A token that tracks local changes to records.
- [isAtomic](ckmodifyrecordsoperation/isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](ckmodifyrecordsoperation/savepolicy.md): The policy to use when saving changes to records.
- [CKModifyRecordsOperation.RecordSavePolicy](ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.

### Processing the Modify Record Results

- [perRecordProgressBlock](ckmodifyrecordsoperation/perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](ckmodifyrecordsoperation/perrecordcompletionblock.md): Deprecated. The closure to execute when CloudKit saves a record.
- [modifyRecordsCompletionBlock](ckmodifyrecordsoperation/modifyrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit modifies all of the records.

### Instance Properties

- [modifyRecordsResultBlock](ckmodifyrecordsoperation/modifyrecordsresultblock.md): The closure to execute after CloudKit modifies all of the records.
- [perRecordDeleteBlock](ckmodifyrecordsoperation/perrecorddeleteblock-9czoo.md): The closure to execute when CloudKit deletes a record.
- [perRecordSaveBlock](ckmodifyrecordsoperation/perrecordsaveblock-7yq9d.md): The closure to execute when CloudKit saves a record.

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

- [CKModifyRecordZonesOperation](ckmodifyrecordzonesoperation.md): An operation that modifies one or more record zones.

# CKModifyRecordsOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation that modifies one or more records.

## Declaration

```objectivec
@interface CKModifyRecordsOperation : CKDatabaseOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

After modifying the fields of a record, use this operation to save those changes to a database. You also use this operation to delete records permanently from a database.

If you’re saving a record that contains a reference to another record, set the reference’s [referenceAction](ckrecord/reference/action-swift.property.md) to indicate if the target record’s deletion should cascade to the saved record. This helps avoid orphaned records in explicit record hierarchies. When creating two new records that have a reference between them, use the same operation to save both records at the same time. During a save operation, CloudKit requires that the target record of the [parent](ckrecord/parent.md) reference, if set, exists in the database or is part of the same operation; all other reference fields are exempt from this requirement.

When you save records, the value in the [savePolicy](ckmodifyrecordsoperation/savepolicy.md) property determines how to proceed when CloudKit detects conflicts. Because records can change between the time you fetch them and the time you save them, the save policy determines whether new changes overwrite existing changes. By default, the operation reports an error when there’s a newer version on the server. You can change the default setting to permit your changes to overwrite the server values wholly or partially.

The handlers you assign to monitor progress of the operation execute serially on an internal queue that the operation manages. You must provide handlers capable of executing on a background thread, so any tasks that require access to the main thread must redirect accordingly.

If you assign a completion handler to the [completionBlock](../foundation/operation/completionblock.md) property of the operation, CloudKit calls it after the operation executes and returns the results. Use the completion handler to perform any housekeeping tasks for the operation, but don’t use it to process the results of the operation. The completion handler you provide should manage any failures of the operation, whether due to an error or an explicit cancellation.

> **Important**

> To ensure the speed of fetching and saving records, the server may reject large operations. When this occurs, a block reports the [CKErrorLimitExceeded](ckerror/code/limitexceeded.md) error. Your app should handle this error, and refactor the operation into multiple smaller batches.

## Topics

### Creating a Modify Record Operation

- [initWithRecordsToSave:recordIDsToDelete:](ckmodifyrecordsoperation/initwithrecordstosave_recordidstodelete_.md): Creates an operation for modifying the specified records.
- [init](ckmodifyrecordsoperation/init%28%29.md): Creates an empty modify records operation.

### Configuring the Modify Record Operation

- [recordsToSave](ckmodifyrecordsoperation/recordstosave.md): The records to save to the database.
- [recordIDsToDelete](ckmodifyrecordsoperation/recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [clientChangeTokenData](ckmodifyrecordsoperation/clientchangetokendata.md): A token that tracks local changes to records.
- [atomic](ckmodifyrecordsoperation/isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](ckmodifyrecordsoperation/savepolicy.md): The policy to use when saving changes to records.
- [CKRecordSavePolicy](ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.

### Processing the Modify Record Results

- [perRecordProgressBlock](ckmodifyrecordsoperation/perrecordprogressblock.md): The closure to execute with progress information for individual records.
- [perRecordCompletionBlock](ckmodifyrecordsoperation/perrecordcompletionblock.md): Deprecated. The closure to execute when CloudKit saves a record.
- [modifyRecordsCompletionBlock](ckmodifyrecordsoperation/modifyrecordscompletionblock.md): Deprecated. The closure to execute after CloudKit modifies all of the records.

### Instance Properties

- [perRecordDeleteBlock](ckmodifyrecordsoperation/perrecorddeleteblock-7gaqj.md): The closure to execute when CloudKit deletes a record.
- [perRecordSaveBlock](ckmodifyrecordsoperation/perrecordsaveblock-80dn4.md): The closure to execute when CloudKit saves a record.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Transactions

- [CKModifyRecordZonesOperation](ckmodifyrecordzonesoperation.md): An operation that modifies one or more record zones.

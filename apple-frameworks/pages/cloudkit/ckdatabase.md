> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase](https://developer.apple.com/documentation/cloudkit/ckdatabase)

# CKDatabase (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that represents a collection of record zones and subscriptions.

## Declaration

```swift
class CKDatabase
```

## Mentioned In

- [Deciding whether CloudKit is right for your app](deciding-whether-cloudkit-is-right-for-your-app.md)

<a id="overview"></a>

## Overview

A database takes requests and operations and applies them to the objects it contains, whether that’s record zones, records, or subscriptions. Each of your app’s users has access to the three separate databases:

- A public database that’s accessible to all users of your app.
- A private database that’s accessible only to the user of the current device.
- A shared database that’s accessible only to the user of the current device, which contains records that other iCloud users share with them.

The public database is always available, even when the device doesn’t have an active iCloud account. In this scenario, your app can fetch specific records and perform searches, but it can’t create or modify records. CloudKit requires an iCloud account for writing to the public database so it can identify the authors of any changes. All access to the private and shared databases requires an iCloud account.

You don’t create instances of [CKDatabase](ckdatabase.md), nor do you subclass it. Instead, you access the required database using one of your app’s containers. For more information, see [CKContainer](ckcontainer.md).

By default, CloudKit executes the methods in this class with a low-priority quality of service (QoS). To use a higher-priority QoS, perform the following:

1. Create an instance of [CKOperation.Configuration](ckoperation/configuration-swift.class.md) and set its [qualityOfService](ckoperation/configuration-swift.class/qualityofservice.md) property to the preferred value.
2. Call the databaseʼs [configuredWith(configuration:group:body:)](ckdatabase/configuredwith%28configuration_group_body_%29-637p1.md) method and provide the configuration and a trailing closure.
3. In the closure, use the provided database to execute the relevant methods at the preferred QoS.

```swift
func fetchRecords(
    with ids: [CKRecord.ID]
) async throws -> [CKRecord.ID: Result<CKRecord, any Error>] {

    // Get a reference to the user's private database.
    let database = CKContainer.default().privateCloudDatabase

    // Create a configuration with a higher-priority quality of service.
    let config = CKOperation.Configuration()
    config.qualityOfService = .userInitiated

    // Configure the database and execute the fetch.
    return try await database.configuredWith(configuration: config) { db in
        try await db.records(for: ids)
    }
}
```

## Topics

### Configuring Database Requests

- [configuredWith(configuration:group:body:)](ckdatabase/configuredwith%28configuration_group_body_%29-637p1.md): Applies a temporary configuration to the database within the scope of a closure that supports concurrency.
- [configuredWith(configuration:group:body:)](ckdatabase/configuredwith%28configuration_group_body_%29-12vrs.md): Applies a temporary configuration to the database within the scope of a closure.

### Fetching Records

- [records(for:desiredKeys:)](ckdatabase/records%28for_desiredkeys_%29.md): Fetches the specified records and returns them to an awaiting caller.
- [fetch(withRecordIDs:desiredKeys:completionHandler:)](ckdatabase/fetch%28withrecordids_desiredkeys_completionhandler_%29.md): Fetches the specified records and delivers them to a completion handler.
- [fetch(withRecordID:completionHandler:)](ckdatabase/fetch%28withrecordid_completionhandler_%29.md): Fetches a specific record.

### Querying Records

- [records(matching:inZoneWith:desiredKeys:resultsLimit:)](ckdatabase/records%28matching_inzonewith_desiredkeys_resultslimit_%29.md): Searches for records that match a predicate and returns them to an awaiting caller.
- [records(continuingMatchFrom:desiredKeys:resultsLimit:)](ckdatabase/records%28continuingmatchfrom_desiredkeys_resultslimit_%29.md): Retrieves the next batch of records from an existing search and returns them to an awaiting caller.
- [fetch(withQuery:inZoneWith:desiredKeys:resultsLimit:completionHandler:)](ckdatabase/fetch%28withquery_inzonewith_desiredkeys_resultslimit_completionhandler_%29.md): Searches for records that match a predicate and delivers them to a completion handler.
- [fetch(withCursor:desiredKeys:resultsLimit:completionHandler:)](ckdatabase/fetch%28withcursor_desiredkeys_resultslimit_completionhandler_%29.md): Retrieves the next batch of records from an existing search and delivers them to a completion handler.
- [perform(\_:inZoneWith:completionHandler:)](ckdatabase/perform%28__inzonewith_completionhandler_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.
- [records(matching:inZoneWith:)](ckdatabase/records%28matching_inzonewith_%29.md): Deprecated. Searches for records in the specified record zone and returns them to an awaiting caller.

### Modifying Records

- [modifyRecords(saving:deleting:savePolicy:atomically:)](ckdatabase/modifyrecords%28saving_deleting_savepolicy_atomically_%29.md): Modifies the specified records and returns the results to an awaiting caller.
- [modifyRecords(saving:deleting:savePolicy:atomically:completionHandler:)](ckdatabase/modifyrecords%28saving_deleting_savepolicy_atomically_completionhandler_%29.md): Modifies the specified records and delivers the results to a completion handler.
- [CKModifyRecordsOperation.RecordSavePolicy](ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [save(\_:completionHandler:)](ckdatabase/save%28__completionhandler_%29-3tatz.md): Saves a specific record.
- [delete(withRecordID:completionHandler:)](ckdatabase/delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.

### Fetching Record Zones

- [recordZones(for:)](ckdatabase/recordzones%28for_%29.md): Fetches the specified record zones and returns them to an awaiting caller.
- [fetch(withRecordZoneIDs:completionHandler:)](ckdatabase/fetch%28withrecordzoneids_completionhandler_%29.md): Fetches the specified record zones and delivers them to a completion handler.
- [fetchAllRecordZones(completionHandler:)](ckdatabase/fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.
- [fetch(withRecordZoneID:completionHandler:)](ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

### Modifying Record Zones

- [modifyRecordZones(saving:deleting:)](ckdatabase/modifyrecordzones%28saving_deleting_%29.md): Modifies the specified record zones and returns the results to an awaiting caller.
- [modifyRecordZones(saving:deleting:completionHandler:)](ckdatabase/modifyrecordzones%28saving_deleting_completionhandler_%29.md): Modifies the specified record zones and delivers the results to a completion handler.
- [save(\_:completionHandler:)](ckdatabase/save%28__completionhandler_%29-32ffr.md): Saves a specific record zone.
- [delete(withRecordZoneID:completionHandler:)](ckdatabase/delete%28withrecordzoneid_completionhandler_%29.md): Deletes a specific record zone.

### Fetching Subscriptions

- [subscriptions(for:)](ckdatabase/subscriptions%28for_%29.md): Fetches the specified subscriptions and returns them to an awaiting caller.
- [fetch(withSubscriptionIDs:completionHandler:)](ckdatabase/fetch%28withsubscriptionids_completionhandler_%29.md): Fetches the specified subscriptions and delivers them to a completion handler.
- [subscription(for:)](ckdatabase/subscription%28for_%29.md): Fetches a specific subscription and returns it to an awaiting caller.
- [fetch(withSubscriptionID:completionHandler:)](ckdatabase/fetch%28withsubscriptionid_completionhandler_%29.md): Fetches a specific subscription and delivers it to a completion handler.
- [fetchAllSubscriptions(completionHandler:)](ckdatabase/fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.

### Modifying Subscriptions

- [modifySubscriptions(saving:deleting:)](ckdatabase/modifysubscriptions%28saving_deleting_%29.md): Modifies the specified subscriptions and returns the results to an awaiting caller.
- [modifySubscriptions(saving:deleting:completionHandler:)](ckdatabase/modifysubscriptions%28saving_deleting_completionhandler_%29.md): Modifies the specified subscriptions and delivers the results to a completion handler.
- [save(\_:completionHandler:)](ckdatabase/save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
- [deleteSubscription(withID:)](ckdatabase/deletesubscription%28withid_%29.md): Deletes a specific subscription and returns the deleted subscription’s identifier to an awaiting caller.
- [delete(withSubscriptionID:completionHandler:)](ckdatabase/delete%28withsubscriptionid_completionhandler_%29.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.

### Fetching Changes

- [databaseChanges(since:resultsLimit:)](ckdatabase/databasechanges%28since_resultslimit_%29.md): Fetches all modified record zones and returns them to an awaiting caller.
- [fetchDatabaseChanges(since:resultsLimit:completionHandler:)](ckdatabase/fetchdatabasechanges%28since_resultslimit_completionhandler_%29.md): Fetches all modified record zones and delivers them to a completion handler.
- [CKDatabase.DatabaseChange](ckdatabase/databasechange.md): Objects that indicate the type of database change.
- [recordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:)](ckdatabase/recordzonechanges%28inzonewith_since_desiredkeys_resultslimit_%29.md): Fetches all modified records from a specific record zone and returns them to an awaiting caller.
- [fetchRecordZoneChanges(inZoneWith:since:desiredKeys:resultsLimit:completionHandler:)](ckdatabase/fetchrecordzonechanges%28inzonewith_since_desiredkeys_resultslimit_completionhandler_%29.md): Fetches all modified records from a specific record zone and delivers them to a completion handler.
- [CKDatabase.RecordZoneChange](ckdatabase/recordzonechange.md): Objects that indicate the type of record zone change.

### Running Operations

- [add(\_:)](ckdatabase/add%28__%29.md): Executes the specified operation in the current database.

### Getting the Database Type

- [databaseScope](ckdatabase/databasescope.md): The type of database.
- [CKDatabase.Scope](ckdatabase/scope.md): Constants that represent the scope of a database.

### Instance Methods

- [allRecordZones()](ckdatabase/allrecordzones%28%29.md): Fetches all record zones from the current database.
- [allSubscriptions()](ckdatabase/allsubscriptions%28%29.md): Fetches all subscriptions from the current database.
- [deleteRecord(withID:)](ckdatabase/deleterecord%28withid_%29.md): Deletes a specific record.
- [deleteRecordZone(withID:)](ckdatabase/deleterecordzone%28withid_%29.md): Deletes a specific record zone.
- [perform(\_:inZoneWith:)](ckdatabase/perform%28__inzonewith_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.
- [record(for:)](ckdatabase/record%28for_%29.md): Fetches a specific record.
- [recordZone(for:)](ckdatabase/recordzone%28for_%29.md): Fetches a specific record zone.
- [save(\_:)](ckdatabase/save%28__%29-1j6fq.md): Saves a specific record.
- [save(\_:)](ckdatabase/save%28__%29-69wq8.md): Saves a specific subscription.
- [save(\_:)](ckdatabase/save%28__%29-7btlo.md): Saves a specific record zone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Core objects

- [CKContainer](ckcontainer.md): A conduit to your app’s databases.
- [CKOperationGroup](ckoperationgroup.md): An explicit association between two or more operations.

# CKDatabase (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that represents a collection of record zones and subscriptions.

## Declaration

```objectivec
@interface CKDatabase : NSObject
```

## Mentioned In

- [Deciding whether CloudKit is right for your app](deciding-whether-cloudkit-is-right-for-your-app.md)

<a id="overview"></a>

## Overview

A database takes requests and operations and applies them to the objects it contains, whether that’s record zones, records, or subscriptions. Each of your app’s users has access to the three separate databases:

- A public database that’s accessible to all users of your app.
- A private database that’s accessible only to the user of the current device.
- A shared database that’s accessible only to the user of the current device, which contains records that other iCloud users share with them.

The public database is always available, even when the device doesn’t have an active iCloud account. In this scenario, your app can fetch specific records and perform searches, but it can’t create or modify records. CloudKit requires an iCloud account for writing to the public database so it can identify the authors of any changes. All access to the private and shared databases requires an iCloud account.

You don’t create instances of [CKDatabase](ckdatabase.md), nor do you subclass it. Instead, you access the required database using one of your app’s containers. For more information, see [CKContainer](ckcontainer.md).

By default, CloudKit executes the methods in this class with a low-priority quality of service (QoS). To use a higher-priority QoS, perform the following:

1. Create an instance of [CKOperationConfiguration](ckoperation/configuration-swift.class.md) and set its [qualityOfService](ckoperation/configuration-swift.class/qualityofservice.md) property to the preferred value.
2. Call the databaseʼs [configuredWith(configuration:group:body:)](ckdatabase/configuredwith%28configuration_group_body_%29-637p1.md) method and provide the configuration and a trailing closure.
3. In the closure, use the provided database to execute the relevant methods at the preferred QoS.

```swift
func fetchRecords(
    with ids: [CKRecord.ID]
) async throws -> [CKRecord.ID: Result<CKRecord, any Error>] {

    // Get a reference to the user's private database.
    let database = CKContainer.default().privateCloudDatabase

    // Create a configuration with a higher-priority quality of service.
    let config = CKOperation.Configuration()
    config.qualityOfService = .userInitiated

    // Configure the database and execute the fetch.
    return try await database.configuredWith(configuration: config) { db in
        try await db.records(for: ids)
    }
}
```

## Topics

### Fetching Records

- [fetchRecordWithID:completionHandler:](ckdatabase/fetch%28withrecordid_completionhandler_%29.md): Fetches a specific record.

### Querying Records

- [performQuery:inZoneWithID:completionHandler:](ckdatabase/perform%28__inzonewith_completionhandler_%29.md): Deprecated. Searches for records matching a predicate in the specified record zone.

### Modifying Records

- [CKRecordSavePolicy](ckmodifyrecordsoperation/recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
- [saveRecord:completionHandler:](ckdatabase/save%28__completionhandler_%29-3tatz.md): Saves a specific record.
- [deleteRecordWithID:completionHandler:](ckdatabase/delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.

### Fetching Record Zones

- [fetchAllRecordZonesWithCompletionHandler:](ckdatabase/fetchallrecordzones%28completionhandler_%29.md): Fetches all record zones from the current database.
- [fetchRecordZoneWithID:completionHandler:](ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md): Fetches a specific record zone.

### Modifying Record Zones

- [saveRecordZone:completionHandler:](ckdatabase/save%28__completionhandler_%29-32ffr.md): Saves a specific record zone.
- [deleteRecordZoneWithID:completionHandler:](ckdatabase/delete%28withrecordzoneid_completionhandler_%29.md): Deletes a specific record zone.

### Fetching Subscriptions

- [fetchSubscriptionWithID:completionHandler:](ckdatabase/fetchsubscriptionwithid_completionhandler_.md): Fetches a specific subscription and delivers it to a completion handler.
- [fetchAllSubscriptionsWithCompletionHandler:](ckdatabase/fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.

### Modifying Subscriptions

- [saveSubscription:completionHandler:](ckdatabase/save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
- [deleteSubscriptionWithID:completionHandler:](ckdatabase/deletesubscriptionwithid_completionhandler_.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.

### Running Operations

- [addOperation:](ckdatabase/add%28__%29.md): Executes the specified operation in the current database.

### Getting the Database Type

- [databaseScope](ckdatabase/databasescope.md): The type of database.
- [CKDatabaseScope](ckdatabase/scope.md): Constants that represent the scope of a database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Core objects

- [CKContainer](ckcontainer.md): A conduit to your app’s databases.
- [CKOperationGroup](ckoperationgroup.md): An explicit association between two or more operations.
- [CKRecordValue](ckrecordvalue-c.protocol.md): The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.

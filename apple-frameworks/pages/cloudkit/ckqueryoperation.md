> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation](https://developer.apple.com/documentation/cloudkit/ckqueryoperation)

# CKQueryOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for executing queries in a database.

## Declaration

```swift
class CKQueryOperation
```

<a id="overview"></a>

## Overview

A `CKQueryOperation` object is a concrete operation that you can use to execute queries. A query operation applies query parameters to the specified database and record zone, delivering any matching records asynchronously to the handlers that you provide.

To perform a new search:

1. Initialize a `CKQueryOperation` object with a [CKQuery](ckquery.md) object that contains the search criteria and sorting information for the records you want.
2. Assign a handler to the [queryCompletionBlock](ckqueryoperation/querycompletionblock.md) property so that you can process the results and execute the operation.

   If the search yields many records, the operation object may deliver a portion of the total results to your blocks immediately, along with a cursor for obtaining the remaining records. Use the cursor to initialize and execute a separate `CKQueryOperation` instance when you’re ready to process the next batch of results.
3. Optionally, configure the results by specifying values for the [resultsLimit](ckqueryoperation/resultslimit.md) and [desiredKeys](ckqueryoperation/desiredkeys-4a6vy.md) properties.
4. Pass the query operation object to the [add(\_:)](ckdatabase/add%28__%29.md) method of the target database to execute the operation.

CloudKit restricts queries to the records in a single record zone. For new queries, you specify the zone when you initialize the query operation object. For cursor-based queries, the cursor contains the zone information. To search for records in multiple zones, you must create a separate `CKQueryOperation` object for each zone you want to search, although you can initialize each of them with the same [CKQuery](ckquery.md) object.

If you assign a handler to the operation’s [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and returns any results. Use a handler to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. The handler you provide should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Query Operation

- [init(query:)](ckqueryoperation/init%28query_%29.md): Creates an operation that searches for records in the specified record zone.
- [init(cursor:)](ckqueryoperation/init%28cursor_%29.md): Creates an operation with additional results from a previous search.
- [init()](ckqueryoperation/init%28%29.md): Creates an empty query operation.

### Configuring the Query Operation

- [query](ckqueryoperation/query.md): The query for the search.
- [cursor](ckqueryoperation/cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryOperation.Cursor](ckqueryoperation/cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](ckqueryoperation/zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](ckqueryoperation/resultslimit.md): The maximum number of records to return at one time.
- [maximumResults](ckqueryoperation/maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](ckqueryoperation/desiredkeys-7qrse.md): The fields of the records to fetch.

### Processing the Query Results

- [recordFetchedBlock](ckqueryoperation/recordfetchedblock.md): Deprecated. The closure to execute when a record becomes available.
- [queryCompletionBlock](ckqueryoperation/querycompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

### Instance Properties

- [queryResultBlock](ckqueryoperation/queryresultblock.md): The closure to execute after CloudKit retrieves all of the records.
- [recordMatchedBlock](ckqueryoperation/recordmatchedblock-2qze7.md): The closure to execute when a record match is available.

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

### Queries

- [CKQuery](ckquery.md): A query that describes the criteria to apply when searching for records in a database.
- [CKLocationSortDescriptor](cklocationsortdescriptor.md): An object for sorting records that contain location data.

# CKQueryOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An operation for executing queries in a database.

## Declaration

```objectivec
@interface CKQueryOperation : CKDatabaseOperation
```

<a id="overview"></a>

## Overview

A `CKQueryOperation` object is a concrete operation that you can use to execute queries. A query operation applies query parameters to the specified database and record zone, delivering any matching records asynchronously to the handlers that you provide.

To perform a new search:

1. Initialize a `CKQueryOperation` object with a [CKQuery](ckquery.md) object that contains the search criteria and sorting information for the records you want.
2. Assign a handler to the [queryCompletionBlock](ckqueryoperation/querycompletionblock.md) property so that you can process the results and execute the operation.

   If the search yields many records, the operation object may deliver a portion of the total results to your blocks immediately, along with a cursor for obtaining the remaining records. Use the cursor to initialize and execute a separate `CKQueryOperation` instance when you’re ready to process the next batch of results.
3. Optionally, configure the results by specifying values for the [resultsLimit](ckqueryoperation/resultslimit.md) and [desiredKeys](ckqueryoperation/desiredkeys-4a6vy.md) properties.
4. Pass the query operation object to the [addOperation:](ckdatabase/add%28__%29.md) method of the target database to execute the operation.

CloudKit restricts queries to the records in a single record zone. For new queries, you specify the zone when you initialize the query operation object. For cursor-based queries, the cursor contains the zone information. To search for records in multiple zones, you must create a separate `CKQueryOperation` object for each zone you want to search, although you can initialize each of them with the same [CKQuery](ckquery.md) object.

If you assign a handler to the operation’s [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and returns any results. Use a handler to perform housekeeping tasks for the operation, but don’t use it to process the results of the operation. The handler you provide should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Query Operation

- [initWithQuery:](ckqueryoperation/init%28query_%29.md): Creates an operation that searches for records in the specified record zone.
- [initWithCursor:](ckqueryoperation/init%28cursor_%29.md): Creates an operation with additional results from a previous search.
- [init](ckqueryoperation/init%28%29.md): Creates an empty query operation.

### Configuring the Query Operation

- [query](ckqueryoperation/query.md): The query for the search.
- [cursor](ckqueryoperation/cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryCursor](ckqueryoperation/cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](ckqueryoperation/zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](ckqueryoperation/resultslimit.md): The maximum number of records to return at one time.
- [CKQueryOperationMaximumResults](ckqueryoperation/maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](ckqueryoperation/desiredkeys-4a6vy.md): The fields of the records to fetch.

### Processing the Query Results

- [recordFetchedBlock](ckqueryoperation/recordfetchedblock.md): Deprecated. The closure to execute when a record becomes available.
- [queryCompletionBlock](ckqueryoperation/querycompletionblock.md): Deprecated. The closure to execute after CloudKit retrieves all of the records.

### Instance Properties

- [recordMatchedBlock](ckqueryoperation/recordmatchedblock-7kek0.md): The closure to execute when a record match is available.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Queries

- [CKQuery](ckquery.md): A query that describes the criteria to apply when searching for records in a database.
- [CKLocationSortDescriptor](cklocationsortdescriptor.md): An object for sorting records that contain location data.

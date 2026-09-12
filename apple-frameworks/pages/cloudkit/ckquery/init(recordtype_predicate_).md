> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquery/init(recordtype:predicate:)](https://developer.apple.com/documentation/cloudkit/ckquery/init(recordtype:predicate:))

# init(recordType:predicate:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Creates a query with the specified record type and predicate.

## Declaration

```swift
convenience init(recordType: CKRecord.RecordType, predicate: NSPredicate)
```

## Parameters

- `recordType`: The type of record to search. Specify the name of one of your app’s supported record types. The method throws an exception if this parameter is an empty string.
- `predicate`: The search predicate to apply to the prospective records. Only records that match the predicate criteria appear in the search results. For guidelines on how to construct predicates for your queries, see [Predicate Rules for Query Objects](../ckquery.md#Predicate-Rules-for-Query-Objects).

<a id="discussion"></a>

## Discussion

You can’t change the record type and predicate of a query after you create it. If you want to search for a different set of records using a different set of search criteria, create a new query. You can add sort descriptors to the query and change them later as necessary.

You can’t query for user records, and executing a query where the record type is [CKRecordTypeUserRecord](../ckrecordtypeuserrecord-49k30.md) results in an error. You must fetch user records directly using their IDs.

## See Also

### Creating a Query

- [init(coder:)](init%28coder_%29.md): Creates a query from a serialized instance.

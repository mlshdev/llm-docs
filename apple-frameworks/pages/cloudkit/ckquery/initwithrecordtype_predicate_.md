> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquery/initwithrecordtype:predicate:](https://developer.apple.com/documentation/cloudkit/ckquery/initwithrecordtype:predicate:)

# initWithRecordType:predicate:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a query with the specified record type and predicate.

## Declaration

```objectivec
- (instancetype) initWithRecordType:(CKRecordType) recordType predicate:(NSPredicate *) predicate;
```

## Parameters

- `recordType`: The type of record to search. Specify the name of one of your app’s supported record types. The method throws an exception if this parameter is `nil` or contains an empty string.
- `predicate`: The search predicate to apply to the prospective records. Only records that match the predicate criteria appear in the search results. For guidelines on how to construct predicates for your queries, see [Predicate Rules for Query Objects](../ckquery.md#Predicate-Rules-for-Query-Objects). This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized query object.

<a id="discussion"></a>

## Discussion

You can’t change the record type and predicate of a query after you create it. If you want to search for a different set of records using a different set of search criteria, create a new query. You can add sort descriptors to the query and change them later as necessary.

You can’t query for user records, and executing a query where the record type is [CKRecordTypeUserRecord](../ckrecordtypeuserrecord-49k30.md) results in an error. You must fetch user records directly using their IDs.

## See Also

### Creating a Query

- [initWithCoder:](init%28coder_%29.md): Creates a query from a serialized instance.

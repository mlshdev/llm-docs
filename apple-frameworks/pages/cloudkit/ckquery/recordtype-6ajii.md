> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquery/recordtype-6ajii](https://developer.apple.com/documentation/cloudkit/ckquery/recordtype-6ajii)

# recordType

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

The record type to search.

## Declaration

```swift
var recordType: CKRecord.RecordType { get }
```

<a id="discussion"></a>

## Discussion

A query’s results include only records of the specified type. The record type is an app-specific string that you use to distinguish among the records of your app. The records of a particular type all represent different instances of the same information. For example, an employee record type might store the employee’s name, phone number, and a reference to the employee’s manager.

## See Also

### Accessing the Query Parameters

- [predicate](predicate.md): The predicate to use for matching records.
- [sortDescriptors](sortdescriptors.md): The sort descriptors for organizing the query’s results.

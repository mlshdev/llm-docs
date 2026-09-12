> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/init(recordstosave:recordidstodelete:)](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/init(recordstosave:recordidstodelete:))

# init(recordsToSave:recordIDsToDelete:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Creates an operation for modifying the specified records.

## Declaration

```swift
convenience init(recordsToSave: [CKRecord]? = nil, recordIDsToDelete: [CKRecord.ID]? = nil)
```

## Parameters

- `recordsToSave`: The records to save. You can specify `nil` for this parameter.
- `recordIDsToDelete`: The IDs of the records to delete. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The records that you intend to save or delete must all reside in the same database, which you specify when you configure the operation. If your app saves a record in a database that doesn’t exist, the server creates the database.

## See Also

### Creating a Modify Record Operation

- [init()](init%28%29.md): Creates an empty modify records operation.

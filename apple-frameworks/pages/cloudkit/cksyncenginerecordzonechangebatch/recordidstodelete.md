> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginerecordzonechangebatch/recordidstodelete](https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch/recordidstodelete)

# recordIDsToDelete

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The unique identifiers of the records to delete.

## Declaration

```objectivec
@property (copy, readonly) NSArray<CKRecordID *> * recordIDsToDelete;
```

## See Also

### Managing the records

- [recordsToSave](recordstosave.md): The records to save.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch/recordidstodelete

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

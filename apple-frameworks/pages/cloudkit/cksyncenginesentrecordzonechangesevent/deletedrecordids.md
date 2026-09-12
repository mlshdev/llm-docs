> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesentrecordzonechangesevent/deletedrecordids](https://developer.apple.com/documentation/cloudkit/cksyncenginesentrecordzonechangesevent/deletedrecordids)

# deletedRecordIDs

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The unique identifiers of the deleted records.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKRecordID *> * deletedRecordIDs;
```

## See Also

### Accessing successful changes

- [savedRecords](savedrecords.md): The modified records.

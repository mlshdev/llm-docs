> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesentrecordzonechangesevent/savedrecords](https://developer.apple.com/documentation/cloudkit/cksyncenginesentrecordzonechangesevent/savedrecords)

# savedRecords

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The modified records.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKRecord *> * savedRecords;
```

## See Also

### Accessing successful changes

- [deletedRecordIDs](deletedrecordids.md): The unique identifiers of the deleted records.

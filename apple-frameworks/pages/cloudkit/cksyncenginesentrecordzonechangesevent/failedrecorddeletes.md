> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesentrecordzonechangesevent/failedrecorddeletes](https://developer.apple.com/documentation/cloudkit/cksyncenginesentrecordzonechangesevent/failedrecorddeletes)

# failedRecordDeletes

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The unique identifiers of the records CloudKit is unable to delete, and the reasons why.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<CKRecordID *,NSError *> * failedRecordDeletes;
```

## See Also

### Accessing failed changes

- [failedRecordSaves](failedrecordsaves.md): The records that CloudKit is unable to modify.
- [CKSyncEngineFailedRecordSave](../cksyncenginefailedrecordsave.md): A type that describes an unsuccessful attempt to modify an individual record.

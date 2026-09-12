> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesentdatabasechangesevent/failedzonedeletes](https://developer.apple.com/documentation/cloudkit/cksyncenginesentdatabasechangesevent/failedzonedeletes)

# failedZoneDeletes

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The unique identifiers of the record zones CloudKit is unable to delete, and the reasons why.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<CKRecordZoneID *,NSError *> * failedZoneDeletes;
```

## See Also

### Accessing failed changes

- [failedZoneSaves](failedzonesaves.md): The record zones that CloudKit is unable to modify.
- [CKSyncEngineFailedZoneSave](../cksyncenginefailedzonesave.md): An object that describes an unsuccessful attempt to modify a single record zone.

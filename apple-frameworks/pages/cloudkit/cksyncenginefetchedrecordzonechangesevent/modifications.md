> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchedrecordzonechangesevent/modifications](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchedrecordzonechangesevent/modifications)

# modifications

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The fetched record modifications.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKRecord *> * modifications;
```

## See Also

### Accessing changes

- [deletions](deletions.md): The fetched record deletions.
- [CKSyncEngineFetchedRecordDeletion](../cksyncenginefetchedrecorddeletion.md): An object that describes the deletion of an individual record.

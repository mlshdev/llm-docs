> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginefetchedrecordzonechangesevent/deletions

# deletions

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The fetched record deletions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKSyncEngineFetchedRecordDeletion *> * deletions;
```

## See Also

### Accessing changes

- [CKSyncEngineFetchedRecordDeletion](../cksyncenginefetchedrecorddeletion.md): An object that describes the deletion of an individual record.
- [modifications](modifications.md): The fetched record modifications.

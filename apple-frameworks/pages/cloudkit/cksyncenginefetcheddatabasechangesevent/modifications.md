> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetcheddatabasechangesevent/modifications](https://developer.apple.com/documentation/cloudkit/cksyncenginefetcheddatabasechangesevent/modifications)

# modifications

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The fetched record zone modifications.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKRecordZone *> * modifications;
```

## See Also

### Accessing changes

- [deletions](deletions.md): The fetched record zone deletions.
- [CKSyncEngineFetchedZoneDeletion](../cksyncenginefetchedzonedeletion.md): An object that describes the deletion of a record zone.

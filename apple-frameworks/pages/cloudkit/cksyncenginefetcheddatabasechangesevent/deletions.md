> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetcheddatabasechangesevent/deletions](https://developer.apple.com/documentation/cloudkit/cksyncenginefetcheddatabasechangesevent/deletions)

# deletions

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The fetched record zone deletions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CKSyncEngineFetchedZoneDeletion *> * deletions;
```

## See Also

### Accessing changes

- [CKSyncEngineFetchedZoneDeletion](../cksyncenginefetchedzonedeletion.md): An object that describes the deletion of a record zone.
- [modifications](modifications.md): The fetched record zone modifications.

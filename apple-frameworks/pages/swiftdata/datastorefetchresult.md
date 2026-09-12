> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastorefetchresult](https://developer.apple.com/documentation/swiftdata/datastorefetchresult)

# DataStoreFetchResult

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
struct DataStoreFetchResult<ModelType, SnapshotType> where ModelType : PersistentModel, SnapshotType : DataStoreSnapshot
```

## Topics

### Initializers

- [init(descriptor:fetchedSnapshots:relatedSnapshots:)](datastorefetchresult/init%28descriptor_fetchedsnapshots_relatedsnapshots_%29.md)

### Instance Properties

- [descriptor](datastorefetchresult/descriptor.md)
- [fetchedSnapshots](datastorefetchresult/fetchedsnapshots.md)
- [relatedSnapshots](datastorefetchresult/relatedsnapshots.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Processing fetch requests

- [fetch(\_:)](datastore/fetch%28__%29.md)
- [DataStoreFetchRequest](datastorefetchrequest.md)
- [Snapshot](datastore/snapshot.md)
- [DataStoreSnapshot](datastoresnapshot.md)
- [DataStoreSnapshotValue](datastoresnapshotvalue.md)
- [fetchCount(\_:)](datastore/fetchcount%28__%29.md)
- [fetchIdentifiers(\_:)](datastore/fetchidentifiers%28__%29.md)

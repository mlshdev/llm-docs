> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/datastorefetchrequest

# DataStoreFetchRequest

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
struct DataStoreFetchRequest<T> where T : PersistentModel
```

## Topics

### Instance Properties

- [descriptor](datastorefetchrequest/descriptor.md)
- [editingState](datastorefetchrequest/editingstate.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Processing fetch requests

- [fetch(\_:)](datastore/fetch%28__%29.md)
- [DataStoreFetchResult](datastorefetchresult.md)
- [Snapshot](datastore/snapshot.md)
- [DataStoreSnapshot](datastoresnapshot.md)
- [DataStoreSnapshotValue](datastoresnapshotvalue.md)
- [fetchCount(\_:)](datastore/fetchcount%28__%29.md)
- [fetchIdentifiers(\_:)](datastore/fetchidentifiers%28__%29.md)

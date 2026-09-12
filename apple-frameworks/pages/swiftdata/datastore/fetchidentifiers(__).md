> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastore/fetchidentifiers(_:)](https://developer.apple.com/documentation/swiftdata/datastore/fetchidentifiers(_:))

# fetchIdentifiers(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
func fetchIdentifiers<T>(_ request: DataStoreFetchRequest<T>) throws -> [PersistentIdentifier] where T : PersistentModel
```

## Default Implementations

### DataStore Implementations

- [fetchIdentifiers(\_:)](fetchidentifiers%28__%29-6p9oh.md)

## See Also

### Processing fetch requests

- [fetch(\_:)](fetch%28__%29.md)
- [DataStoreFetchRequest](../datastorefetchrequest.md)
- [DataStoreFetchResult](../datastorefetchresult.md)
- [Snapshot](snapshot.md)
- [DataStoreSnapshot](../datastoresnapshot.md)
- [DataStoreSnapshotValue](../datastoresnapshotvalue.md)
- [fetchCount(\_:)](fetchcount%28__%29.md)

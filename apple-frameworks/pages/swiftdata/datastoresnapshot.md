> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/datastoresnapshot

# DataStoreSnapshot

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
protocol DataStoreSnapshot : Decodable, Encodable, Sendable
```

## Topics

### Initializers

- [init(from:relatedBackingDatas:)](datastoresnapshot/init%28from_relatedbackingdatas_%29.md)

### Instance Properties

- [persistentIdentifier](datastoresnapshot/persistentidentifier.md)

### Instance Methods

- [copy(persistentIdentifier:remappedIdentifiers:)](datastoresnapshot/copy%28persistentidentifier_remappedidentifiers_%29.md)

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DefaultSnapshot](defaultsnapshot.md)

## See Also

### Processing fetch requests

- [fetch(\_:)](datastore/fetch%28__%29.md)
- [DataStoreFetchRequest](datastorefetchrequest.md)
- [DataStoreFetchResult](datastorefetchresult.md)
- [Snapshot](datastore/snapshot.md)
- [DataStoreSnapshotValue](datastoresnapshotvalue.md)
- [fetchCount(\_:)](datastore/fetchcount%28__%29.md)
- [fetchIdentifiers(\_:)](datastore/fetchidentifiers%28__%29.md)

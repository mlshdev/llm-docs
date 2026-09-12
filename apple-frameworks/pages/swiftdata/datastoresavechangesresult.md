> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastoresavechangesresult](https://developer.apple.com/documentation/swiftdata/datastoresavechangesresult)

# DataStoreSaveChangesResult

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
final class DataStoreSaveChangesResult<T> where T : DataStoreSnapshot
```

## Topics

### Initializers

- [init(for:remappedIdentifiers:snapshotsToReregister:)](datastoresavechangesresult/init%28for_remappedidentifiers_snapshotstoreregister_%29.md)
- [init(for:remappedIdentifiers:snapshotsToReregister:historyToken:)](datastoresavechangesresult/init%28for_remappedidentifiers_snapshotstoreregister_historytoken_%29.md)

### Instance Properties

- [historyToken](datastoresavechangesresult/historytoken.md)
- [remappedIdentifiers](datastoresavechangesresult/remappedidentifiers.md)
- [snapshotsToReregister](datastoresavechangesresult/snapshotstoreregister.md)
- [storeIdentifier](datastoresavechangesresult/storeidentifier.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Persisting model data

- [save(\_:)](datastore/save%28__%29.md)
- [DataStoreSaveChangesRequest](datastoresavechangesrequest.md)

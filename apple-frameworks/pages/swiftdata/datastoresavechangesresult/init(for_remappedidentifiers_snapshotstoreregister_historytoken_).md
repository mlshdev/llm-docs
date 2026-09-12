> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastoresavechangesresult/init(for:remappedidentifiers:snapshotstoreregister:historytoken:)](https://developer.apple.com/documentation/swiftdata/datastoresavechangesresult/init(for:remappedidentifiers:snapshotstoreregister:historytoken:))

# init(for:remappedIdentifiers:snapshotsToReregister:historyToken:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Swift 5.9+

## Declaration

```swift
init(for storeIdentifier: String, remappedIdentifiers: [PersistentIdentifier : PersistentIdentifier] = [:], snapshotsToReregister: [PersistentIdentifier : T] = [:], historyToken: (any HistoryToken)?)
```

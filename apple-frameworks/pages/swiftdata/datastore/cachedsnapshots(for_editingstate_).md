> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastore/cachedsnapshots(for:editingstate:)](https://developer.apple.com/documentation/swiftdata/datastore/cachedsnapshots(for:editingstate:))

# cachedSnapshots(for:editingState:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
func cachedSnapshots(for persistentIdentifiers: [PersistentIdentifier], editingState: EditingState) throws -> [PersistentIdentifier : Self.Snapshot]
```

## Default Implementations

### DataStore Implementations

- [cachedSnapshots(for:editingState:)](cachedsnapshots%28for_editingstate_%29-8e689.md)

## See Also

### Sharing cached data between model contexts

- [initializeState(for:)](initializestate%28for_%29.md)
- [EditingState](../editingstate.md)
- [invalidateState(for:)](invalidatestate%28for_%29.md)

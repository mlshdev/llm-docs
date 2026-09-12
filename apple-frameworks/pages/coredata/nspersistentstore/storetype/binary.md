> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/storetype/binary](https://developer.apple.com/documentation/coredata/nspersistentstore/storetype/binary)

# binary

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A store that reads from and writes to a persistent binary file.

## Declaration

```swift
static let binary: NSPersistentStore.StoreType
```

<a id="Discussion"></a>

## Discussion

A binary store is atomic, which means Core Data reads and writes the file in its entirety. This behavior is different from a [sqlite](sqlite.md) store, which you can partially modify.

## See Also

### Store Types

- [inMemory](inmemory.md): An ephemeral store that reads from and writes to memory only.
- [sqlite](sqlite.md): A store that reads from and writes to a persistent SQLite database.
- [xml](xml.md): A store that reads from and writes to a persistent XML file.

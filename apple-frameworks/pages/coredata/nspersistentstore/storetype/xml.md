> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/storetype/xml](https://developer.apple.com/documentation/coredata/nspersistentstore/storetype/xml)

# xml

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** macOS 12.0+

A store that reads from and writes to a persistent XML file.

## Declaration

```swift
static let xml: NSPersistentStore.StoreType
```

<a id="Discussion"></a>

## Discussion

An XML store is atomic, which means Core Data reads and writes the file in its entirety. This behavior is different from a [sqlite](sqlite.md) store, which you can partially modify.

## See Also

### Store Types

- [binary](binary.md): A store that reads from and writes to a persistent binary file.
- [inMemory](inmemory.md): An ephemeral store that reads from and writes to memory only.
- [sqlite](sqlite.md): A store that reads from and writes to a persistent SQLite database.

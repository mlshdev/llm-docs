> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/storetype](https://developer.apple.com/documentation/coredata/nspersistentstore/storetype)

# NSPersistentStore.StoreType

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The types of persistent stores that Core Data supports.

## Declaration

```swift
struct StoreType
```

## Topics

### Store Types

- [binary](storetype/binary.md): A store that reads from and writes to a persistent binary file.
- [inMemory](storetype/inmemory.md): An ephemeral store that reads from and writes to memory only.
- [sqlite](storetype/sqlite.md): A store that reads from and writes to a persistent SQLite database.
- [xml](storetype/xml.md): A store that reads from and writes to a persistent XML file.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting Store Configuration

- [configurationName](configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [options](options.md): The options that Core Data uses to create the store.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [type](type.md): The type string of the persistent store.
- [Persistent Store Types](../persistent-store-types.md): Persist data through the available store types.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/addpersistentstore(type:configuration:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/addpersistentstore(type:configuration:at:options:))

# addPersistentStore(type:configuration:at:options:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Adds a specific type of persistent store at the provided location.

## Declaration

```swift
func addPersistentStore(type: NSPersistentStore.StoreType, configuration: String? = nil, at storeURL: URL, options: [AnyHashable : Any]? = nil) throws -> NSPersistentStore
```

## Parameters

- `type`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `configuration`: The name of the configuration to use. You must define this configuration in the coordinator’s managed object model.
- `storeURL`: The store’s location.
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).

## See Also

### Adding or removing a store

- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [addPersistentStore(with:completionHandler:)](addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.
- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.

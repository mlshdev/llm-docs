> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/options](https://developer.apple.com/documentation/coredata/nspersistentstore/options)

# options (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The options that Core Data uses to create the store.

## Declaration

```swift
var options: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

See [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for a list of key names for options in this dictionary.

## See Also

### Getting Store Configuration

- [configurationName](configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [type](type.md): The type string of the persistent store.
- [NSPersistentStore.StoreType](storetype.md): The types of persistent stores that Core Data supports.
- [Persistent Store Types](../persistent-store-types.md): Persist data through the available store types.

# options (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The options that Core Data uses to create the store.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSDictionary * options;
```

<a id="Discussion"></a>

## Discussion

See [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for a list of key names for options in this dictionary.

## See Also

### Getting Store Configuration

- [configurationName](configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [type](type.md): The type string of the persistent store.
- [Persistent Store Types](../persistent-store-types.md): Persist data through the available store types.

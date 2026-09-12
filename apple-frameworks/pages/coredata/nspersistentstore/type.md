> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/type](https://developer.apple.com/documentation/coredata/nspersistentstore/type)

# type (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type string of the persistent store.

## Declaration

```swift
var type: String { get }
```

<a id="Discussion"></a>

## Discussion

This string is used when specifying the type of store to add to a persistent store coordinator.

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses must override this method to provide a unique type.

## See Also

### Getting Store Configuration

- [configurationName](configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [options](options.md): The options that Core Data uses to create the store.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [NSPersistentStore.StoreType](storetype.md): The types of persistent stores that Core Data supports.
- [Persistent Store Types](../persistent-store-types.md): Persist data through the available store types.

# type (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type string of the persistent store.

## Declaration

```objectivec
@property (copy, readonly) NSString * type;
```

<a id="Discussion"></a>

## Discussion

This string is used when specifying the type of store to add to a persistent store coordinator.

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses must override this method to provide a unique type.

## See Also

### Getting Store Configuration

- [configurationName](configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [options](options.md): The options that Core Data uses to create the store.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [Persistent Store Types](../persistent-store-types.md): Persist data through the available store types.

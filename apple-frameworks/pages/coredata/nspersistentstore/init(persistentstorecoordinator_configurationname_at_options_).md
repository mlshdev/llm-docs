> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/init(persistentstorecoordinator:configurationname:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstore/init(persistentstorecoordinator:configurationname:at:options:))

# init(persistentStoreCoordinator:configurationName:at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a store initialized with the given arguments.

## Declaration

```swift
init(persistentStoreCoordinator root: NSPersistentStoreCoordinator?, configurationName name: String?, at url: URL, options: [AnyHashable : Any]? = nil)
```

## Parameters

- `root`: A persistent store coordinator.
- `name`: The name of the managed object model configuration to use. Pass `nil` if you do not want to specify a configuration.
- `url`: The URL of the store to load.
- `options`: A dictionary containing configuration options. See [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for a list of key names for options in this dictionary.

<a id="return-value"></a>

## Return Value

A new store object, associated with `coordinator`, that represents a persistent store at url using the options in `options` and—if it is not `nil`—the managed object model configuration `configurationName`.

<a id="Discussion"></a>

## Discussion

You must ensure that you load metadata during initialization and set it using [metadata](metadata.md).

<a id="Special-Considerations"></a>

### Special Considerations

This is the designated initializer for persistent stores.

## See Also

### Related Documentation

- [metadata](metadata.md): The metadata for the persistent store.
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [Atomic Store Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AtomicStore_Concepts/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004521)
- [Incremental Store Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/IncrementalStorePG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010706)

# initWithPersistentStoreCoordinator:configurationName:URL:options: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a store initialized with the given arguments.

## Declaration

```objectivec
- (instancetype) initWithPersistentStoreCoordinator:(NSPersistentStoreCoordinator *) root configurationName:(NSString *) name URL:(NSURL *) url options:(NSDictionary *) options;
```

## Parameters

- `root`: A persistent store coordinator.
- `name`: The name of the managed object model configuration to use. Pass `nil` if you do not want to specify a configuration.
- `url`: The URL of the store to load.
- `options`: A dictionary containing configuration options. See [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for a list of key names for options in this dictionary.

<a id="return-value"></a>

## Return Value

A new store object, associated with `coordinator`, that represents a persistent store at url using the options in `options` and—if it is not `nil`—the managed object model configuration `configurationName`.

<a id="Discussion"></a>

## Discussion

You must ensure that you load metadata during initialization and set it using [metadata](metadata.md).

<a id="Special-Considerations"></a>

### Special Considerations

This is the designated initializer for persistent stores.

## See Also

### Related Documentation

- [metadata](metadata.md): The metadata for the persistent store.
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [Atomic Store Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AtomicStore_Concepts/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004521)
- [Incremental Store Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/IncrementalStorePG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010706)

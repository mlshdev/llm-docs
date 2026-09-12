> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/load()](https://developer.apple.com/documentation/coredata/nsatomicstore/load())

# load() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Loads the cache nodes for the receiver.

## Declaration

```swift
func load() throws
```

<a id="Discussion"></a>

## Discussion

You override this method to load the data from the URL specified in [init(persistentStoreCoordinator:configurationName:at:options:)](init%28persistentstorecoordinator_configurationname_at_options_%29.md) and create cache nodes for the represented objects. You must respect the configuration specified for the store, as well as the options.

Any subclass of `NSAtomicStore` must be able to handle being initialized with a URL pointing to a zero-length file. This serves as an indicator that a new store is to be constructed at the specified location and allows you to securely create reservation files in known locations which can then be passed to Core Data to construct stores. You may choose to create zero-length reservation files during [init(persistentStoreCoordinator:configurationName:at:options:)](init%28persistentstorecoordinator_configurationname_at_options_%29.md) or [load()](load%28%29.md). If you do so, you must remove the reservation file if the store is removed from the coordinator before it is saved.

You must override this method in a subclass of `NSAtomicStore`.

## See Also

### Loading a Store

- [objectID(for:withReferenceObject:)](objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.
- [addCacheNodes(\_:)](addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.

# load: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Loads the cache nodes for the receiver.

## Declaration

```objectivec
- (BOOL) load:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cache nodes were loaded correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You override this method to load the data from the URL specified in [initWithPersistentStoreCoordinator:configurationName:URL:options:](init%28persistentstorecoordinator_configurationname_at_options_%29.md) and create cache nodes for the represented objects. You must respect the configuration specified for the store, as well as the options.

Any subclass of `NSAtomicStore` must be able to handle being initialized with a URL pointing to a zero-length file. This serves as an indicator that a new store is to be constructed at the specified location and allows you to securely create reservation files in known locations which can then be passed to Core Data to construct stores. You may choose to create zero-length reservation files during [initWithPersistentStoreCoordinator:configurationName:URL:options:](init%28persistentstorecoordinator_configurationname_at_options_%29.md) or [load:](load%28%29.md). If you do so, you must remove the reservation file if the store is removed from the coordinator before it is saved.

You must override this method in a subclass of `NSAtomicStore`.

## See Also

### Loading a Store

- [objectIDForEntity:referenceObject:](objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.
- [addCacheNodes:](addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.

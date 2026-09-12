> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/remove(_:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/remove(_:))

# remove(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes the specified persistent store from the coordinator.

## Declaration

```swift
func remove(_ store: NSPersistentStore) throws
```

## Parameters

- `store`: A persistent store.

## See Also

### Related Documentation

- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Adding or removing a store

- [addPersistentStore(type:configuration:at:options:)](addpersistentstore%28type_configuration_at_options_%29.md): Adds a specific type of persistent store at the provided location.
- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [addPersistentStore(with:completionHandler:)](addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.

# removePersistentStore:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes the specified persistent store from the coordinator.

## Declaration

```objectivec
- (BOOL) removePersistentStore:(NSPersistentStore *) store error:(NSError **) error;
```

## Parameters

- `store`: A persistent store.
- `error`: If an error occurs, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the store is removed, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Adding or removing a store

- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [addPersistentStoreWithDescription:completionHandler:](addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.

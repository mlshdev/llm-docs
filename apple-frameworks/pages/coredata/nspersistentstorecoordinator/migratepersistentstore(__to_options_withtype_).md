> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/migratepersistentstore(_:to:options:withtype:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/migratepersistentstore(_:to:options:withtype:))

# migratePersistentStore(\_:to:options:withType:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the location and, if necessary, the store type of the specified persistent store.

> Use [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md) instead.

## Declaration

```swift
func migratePersistentStore(_ store: NSPersistentStore, to URL: URL, options: [AnyHashable : Any]? = nil, withType storeType: String) throws -> NSPersistentStore
```

## Parameters

- `store`: A persistent store.
- `URL`: An URL object that specifies the location for the new store.
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md).
- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the type of the new store—see [Persistent Store Types](../persistent-store-types.md).

<a id="return-value"></a>

## Return Value

If the migration is successful, the new store, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method is typically used for “Save As” operations. Performance may vary depending on the type of old and new store. For more details of the action of this method, see Persistent Store Features in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

> **Important**

>  After invocation of this method, the specified store is removed from the coordinator thus `store` is no longer a useful reference.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Modifying a store

- [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

# migratePersistentStore:toURL:options:withType:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the location and, if necessary, the store type of the specified persistent store.

> Use [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md) instead.

## Declaration

```objectivec
- (NSPersistentStore *) migratePersistentStore:(NSPersistentStore *) store toURL:(NSURL *) URL options:(NSDictionary *) options withType:(NSString *) storeType error:(NSError **) error;
```

## Parameters

- `store`: A persistent store.
- `URL`: An URL object that specifies the location for the new store.
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md).
- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the type of the new store—see [Persistent Store Types](../persistent-store-types.md).
- `error`: If an error occurs, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

If the migration is successful, the new store, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method is typically used for “Save As” operations. Performance may vary depending on the type of old and new store. For more details of the action of this method, see Persistent Store Features in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

> **Important**

>  After invocation of this method, the specified store is removed from the coordinator thus `store` is no longer a useful reference.

## See Also

### Related Documentation

- [removePersistentStore:error:](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Modifying a store

- [destroyPersistentStoreAtURL:withType:options:error:](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

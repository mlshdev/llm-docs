> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/destroypersistentstore(at:oftype:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/destroypersistentstore(at:oftype:options:))

# destroyPersistentStore(at:ofType:options:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes a specific type of persistent store at the provided location.

> Use [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md) instead.

## Declaration

```swift
func destroyPersistentStore(at url: URL, ofType storeType: String, options: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `url`: The store’s location.
- `storeType`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).

## See Also

### Modifying a store

- [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

# destroyPersistentStoreAtURL:withType:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes a specific type of persistent store at the provided location.

> Use [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md) instead.

## Declaration

```objectivec
- (BOOL) destroyPersistentStoreAtURL:(NSURL *) url withType:(NSString *) storeType options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `url`: The store’s location.
- `storeType`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Modifying a store

- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

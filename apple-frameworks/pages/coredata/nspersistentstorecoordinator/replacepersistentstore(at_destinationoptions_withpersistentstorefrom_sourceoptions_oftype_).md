> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/replacepersistentstore(at:destinationoptions:withpersistentstorefrom:sourceoptions:oftype:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/replacepersistentstore(at:destinationoptions:withpersistentstorefrom:sourceoptions:oftype:))

# replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces one persistent store with another.

> Use [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md) instead.

## Declaration

```swift
func replacePersistentStore(at destinationURL: URL, destinationOptions: [AnyHashable : Any]? = nil, withPersistentStoreFrom sourceURL: URL, sourceOptions: [AnyHashable : Any]? = nil, ofType storeType: String) throws
```

## Parameters

- `destinationURL`: The location of the store to replace.
- `destinationOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the store to replace. For more information, see [Store options](../store-options.md).
- `sourceURL`: The location of the store to use as the replacement.
- `sourceOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the replacement store. For more information, see [Store options](../store-options.md).
- `storeType`: The store type of the replacement store. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).

## See Also

### Modifying a store

- [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.

# replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces one persistent store with another.

> Use [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md) instead.

## Declaration

```objectivec
- (BOOL) replacePersistentStoreAtURL:(NSURL *) destinationURL destinationOptions:(NSDictionary *) destinationOptions withPersistentStoreFromURL:(NSURL *) sourceURL sourceOptions:(NSDictionary *) sourceOptions storeType:(NSString *) storeType error:(NSError **) error;
```

## Parameters

- `destinationURL`: The location of the store to replace.
- `destinationOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the store to replace. For more information, see [Store options](../store-options.md).
- `sourceURL`: The location of the store to use as the replacement.
- `sourceOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the replacement store. For more information, see [Store options](../store-options.md).
- `storeType`: The store type of the replacement store. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Modifying a store

- [destroyPersistentStoreAtURL:withType:options:error:](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.

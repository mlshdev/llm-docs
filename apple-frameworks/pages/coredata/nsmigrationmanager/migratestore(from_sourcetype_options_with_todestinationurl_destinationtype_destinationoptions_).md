> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/migratestore(from:sourcetype:options:with:todestinationurl:destinationtype:destinationoptions:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/migratestore(from:sourcetype:options:with:todestinationurl:destinationtype:destinationoptions:))

# migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

> Use [migrateStore(from:type:options:mapping:to:type:options:)](migratestore%28from_type_options_mapping_to_type_options_%29.md) instead.

## Declaration

```swift
func migrateStore(from sourceURL: URL, sourceType sStoreType: String, options sOptions: [AnyHashable : Any]? = nil, with mappings: NSMappingModel?, toDestinationURL dURL: URL, destinationType dStoreType: String, destinationOptions dOptions: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `sourceURL`: The location of an existing persistent store. A store must exist at this URL.
- `sStoreType`: The type of store at `sourceURL` (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `sOptions`: A dictionary of options for the source (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `mappings`: The mapping model to use to effect the migration.
- `dURL`: The location of the destination store.
- `dStoreType`: The type of store at `dURL` (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `dOptions`: A dictionary of options for the destination (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).

<a id="Discussion"></a>

## Discussion

This method performs compatibility checks on the source and destination models and the mapping model.

<a id="Special-Considerations"></a>

### Special Considerations

If a store does not exist at the destination URL (`dURL`), one is created; otherwise, the migration appends to the existing store.

## See Also

### Related Documentation

- [cancelMigrationWithError(\_:)](cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.

### Performing a Migration

- [migrateStore(from:type:options:mapping:to:type:options:)](migratestore%28from_type_options_mapping_to_type_options_%29.md): Migrates the source store to the destination using the specified mapping model.

# migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

> Use [migrateStore(from:type:options:mapping:to:type:options:)](migratestore%28from_type_options_mapping_to_type_options_%29.md) instead.

## Declaration

```objectivec
- (BOOL) migrateStoreFromURL:(NSURL *) sourceURL type:(NSString *) sStoreType options:(NSDictionary *) sOptions withMappingModel:(NSMappingModel *) mappings toDestinationURL:(NSURL *) dURL destinationType:(NSString *) dStoreType destinationOptions:(NSDictionary *) dOptions error:(NSError **) error;
```

## Parameters

- `sourceURL`: The location of an existing persistent store. A store must exist at this URL.
- `sStoreType`: The type of store at `sourceURL` (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `sOptions`: A dictionary of options for the source (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `mappings`: The mapping model to use to effect the migration.
- `dURL`: The location of the destination store.
- `dStoreType`: The type of store at `dURL` (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `dOptions`: A dictionary of options for the destination (see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) for possible values).
- `error`: If an error occurs during the validation or migration, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the migration proceeds without errors during the compatibility checks or migration, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method performs compatibility checks on the source and destination models and the mapping model.

<a id="Special-Considerations"></a>

### Special Considerations

If a store does not exist at the destination URL (`dURL`), one is created; otherwise, the migration appends to the existing store.

## See Also

### Related Documentation

- [cancelMigrationWithError:](cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.

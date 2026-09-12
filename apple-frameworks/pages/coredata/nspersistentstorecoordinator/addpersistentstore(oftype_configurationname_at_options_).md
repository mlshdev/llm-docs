> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/addpersistentstore(oftype:configurationname:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/addpersistentstore(oftype:configurationname:at:options:))

# addPersistentStore(ofType:configurationName:at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a specific type of persistent store at the provided location.

> Use [addPersistentStore(type:configuration:at:options:)](addpersistentstore%28type_configuration_at_options_%29.md) instead.

## Declaration

```swift
func addPersistentStore(ofType storeType: String, configurationName configuration: String?, at storeURL: URL?, options: [AnyHashable : Any]? = nil) throws -> NSPersistentStore
```

## Parameters

- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the store type—see [Persistent Store Types](../persistent-store-types.md) for possible values.
- `configuration`: The name of a configuration in the receiver’s managed object model that will be used by the new store. The configuration can be `nil`, in which case no other configurations are allowed.
- `storeURL`: The file location of the persistent store.
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md) and [Migration options](../migration-options.md). This value may be `nil`.

<a id="return-value"></a>

## Return Value

The newly created store or, if an error occurs, `nil`.

## Mentioned In

- [Migrating your data model automatically](../migrating-your-data-model-automatically.md)

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [importStore(withIdentifier:fromExternalRecordsDirectoryAt:to:options:ofType:)](importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.

### Adding or removing a store

- [addPersistentStore(type:configuration:at:options:)](addpersistentstore%28type_configuration_at_options_%29.md): Adds a specific type of persistent store at the provided location.
- [addPersistentStore(with:completionHandler:)](addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.
- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.

# addPersistentStoreWithType:configuration:URL:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a specific type of persistent store at the provided location.

> Use [addPersistentStore(type:configuration:at:options:)](addpersistentstore%28type_configuration_at_options_%29.md) instead.

## Declaration

```objectivec
- (NSPersistentStore *) addPersistentStoreWithType:(NSString *) storeType configuration:(NSString *) configuration URL:(NSURL *) storeURL options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the store type—see [Persistent Store Types](../persistent-store-types.md) for possible values.
- `configuration`: The name of a configuration in the receiver’s managed object model that will be used by the new store. The configuration can be `nil`, in which case no other configurations are allowed.
- `storeURL`: The file location of the persistent store.
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md) and [Migration options](../migration-options.md). This value may be `nil`.
- `error`: If a new store cannot be created, upon return contains an instance of `NSError` that describes the problem

<a id="return-value"></a>

## Return Value

The newly created store or, if an error occurs, `nil`.

## Mentioned In

- [Migrating your data model automatically](../migrating-your-data-model-automatically.md)

## See Also

### Related Documentation

- [removePersistentStore:error:](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [importStoreWithIdentifier:fromExternalRecordsDirectory:toURL:options:withType:error:](importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.

### Adding or removing a store

- [addPersistentStoreWithDescription:completionHandler:](addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.
- [removePersistentStore:error:](remove%28__%29.md): Removes the specified persistent store from the coordinator.

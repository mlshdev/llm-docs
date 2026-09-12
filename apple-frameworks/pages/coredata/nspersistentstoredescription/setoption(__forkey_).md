> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/setoption(_:forkey:)](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/setoption(_:forkey:))

# setOption(\_:forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets an option on the store.

## Declaration

```swift
func setOption(_ option: NSObject?, forKey key: String)
```

## Parameters

- `option`: The value to be set for an option on the store.
- `key`: The key of the value to be set for an option on the store.

<a id="Discussion"></a>

## Discussion

If a value was previously set for the given option, that value is replaced with the given value. Note that the keys are case-sensitive. For a list of the available options, see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md).

## See Also

### Configuring a Persistent Store Description

- [url](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [isReadOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setValue(\_:forPragmaNamed:)](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

# setOption:forKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets an option on the store.

## Declaration

```objectivec
- (void) setOption:(NSObject *) option forKey:(NSString *) key;
```

## Parameters

- `option`: The value to be set for an option on the store.
- `key`: The key of the value to be set for an option on the store.

<a id="Discussion"></a>

## Discussion

If a value was previously set for the given option, that value is replaced with the given value. Note that the keys are case-sensitive. For a list of the available options, see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md).

## See Also

### Configuring a Persistent Store Description

- [URL](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [readOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setValue:forPragmaNamed:](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

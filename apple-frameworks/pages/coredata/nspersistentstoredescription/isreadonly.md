> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/isreadonly](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/isreadonly)

# isReadOnly (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that indicates whether this store will be read-only.

## Declaration

```swift
var isReadOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This is a convenience method for setting the [NSReadOnlyPersistentStoreOption](../nsreadonlypersistentstoreoption.md) on the associated store.

## See Also

### Configuring a Persistent Store Description

- [url](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption(\_:forKey:)](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue(\_:forPragmaNamed:)](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

# readOnly (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that indicates whether this store will be read-only.

## Declaration

```objectivec
@property (getter=isReadOnly) BOOL readOnly;
```

<a id="Discussion"></a>

## Discussion

This is a convenience method for setting the [NSReadOnlyPersistentStoreOption](../nsreadonlypersistentstoreoption.md) on the associated store.

## See Also

### Configuring a Persistent Store Description

- [URL](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption:forKey:](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue:forPragmaNamed:](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

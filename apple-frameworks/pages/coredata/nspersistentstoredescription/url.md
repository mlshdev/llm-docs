> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/url](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/url)

# url (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The URL that the store will use for its location.

## Declaration

```swift
var url: URL? { get set }
```

## See Also

### Configuring a Persistent Store Description

- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [isReadOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption(\_:forKey:)](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue(\_:forPragmaNamed:)](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

# URL (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The URL that the store will use for its location.

## Declaration

```objectivec
@property (copy, nullable) NSURL * URL;
```

## See Also

### Configuring a Persistent Store Description

- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [readOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption:forKey:](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue:forPragmaNamed:](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

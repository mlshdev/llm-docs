> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/shouldmigratestoreautomatically](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/shouldmigratestoreautomatically)

# shouldMigrateStoreAutomatically (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag indicating whether the associated persistent store should be migrated automatically.

## Declaration

```swift
var shouldMigrateStoreAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this is set to [false](https://developer.apple.com/documentation/swift/false) and the store is out of sync, attempting to load the store produces an error. If this is set to [true](https://developer.apple.com/documentation/swift/true) and the store is out of sync, attempting to load the store causes Core Data to attempt a migration. This flag is set to [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Configuring a Persistent Store Description

- [url](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [isReadOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [setOption(\_:forKey:)](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue(\_:forPragmaNamed:)](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

# shouldMigrateStoreAutomatically (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag indicating whether the associated persistent store should be migrated automatically.

## Declaration

```objectivec
@property BOOL shouldMigrateStoreAutomatically;
```

<a id="Discussion"></a>

## Discussion

If this is set to [false](https://developer.apple.com/documentation/swift/false) and the store is out of sync, attempting to load the store produces an error. If this is set to [true](https://developer.apple.com/documentation/swift/true) and the store is out of sync, attempting to load the store causes Core Data to attempt a migration. This flag is set to [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Configuring a Persistent Store Description

- [URL](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [readOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [setOption:forKey:](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue:forPragmaNamed:](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

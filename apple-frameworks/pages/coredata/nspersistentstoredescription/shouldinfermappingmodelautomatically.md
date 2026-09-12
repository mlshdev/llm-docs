> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/shouldinfermappingmodelautomatically](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/shouldinfermappingmodelautomatically)

# shouldInferMappingModelAutomatically (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag indicating whether a mapping model should be created automatically.

## Declaration

```swift
var shouldInferMappingModelAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this flag is set to [true](https://developer.apple.com/documentation/swift/true) and the value of the [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md) is [true](https://developer.apple.com/documentation/swift/true), the coordinator attempts to infer a mapping model if none can be found. The default for this flag is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a Persistent Store Description

- [url](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [isReadOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption(\_:forKey:)](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue(\_:forPragmaNamed:)](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

# shouldInferMappingModelAutomatically (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A flag indicating whether a mapping model should be created automatically.

## Declaration

```objectivec
@property BOOL shouldInferMappingModelAutomatically;
```

<a id="Discussion"></a>

## Discussion

If this flag is set to [true](https://developer.apple.com/documentation/swift/true) and the value of the [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md) is [true](https://developer.apple.com/documentation/swift/true), the coordinator attempts to infer a mapping model if none can be found. The default for this flag is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a Persistent Store Description

- [URL](url.md): The URL that the store will use for its location.
- [configuration](configuration.md): The name of the configuration used by this store.
- [timeout](timeout.md): The connection timeout for the associated store.
- [type](type.md): The type of store this description represents.
- [readOnly](isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldMigrateStoreAutomatically](shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption:forKey:](setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue:forPragmaNamed:](setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

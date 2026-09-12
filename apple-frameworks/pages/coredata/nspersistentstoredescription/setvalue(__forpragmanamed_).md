> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/setvalue(_:forpragmanamed:)](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/setvalue(_:forpragmanamed:))

# setValue(\_:forPragmaNamed:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to set pragmas for the SQLite store.

## Declaration

```swift
func setValue(_ value: NSObject?, forPragmaNamed name: String)
```

## Parameters

- `value`: The value of the pragma to be set.
- `name`: The name of the pragma to be set.

<a id="Discussion"></a>

## Discussion

Pragma options are for SQLite stores only. All pragma values must be specified as [NSString](../../foundation/nsstring.md)objects. The `fullfsync` and `synchronous` pragmas control the tradeoff between write performance (write to disk speed and cache utilization) and durability (data loss/corruption sensitivity to power interruption). For more information on pragma settings, see [http://sqlite.org/pragma.html](http://sqlite.org/pragma.html).

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
- [setOption(\_:forKey:)](setoption%28__forkey_%29.md): Sets an option on the store.

# setValue:forPragmaNamed: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to set pragmas for the SQLite store.

## Declaration

```objectivec
- (void) setValue:(NSObject *) value forPragmaNamed:(NSString *) name;
```

## Parameters

- `value`: The value of the pragma to be set.
- `name`: The name of the pragma to be set.

<a id="Discussion"></a>

## Discussion

Pragma options are for SQLite stores only. All pragma values must be specified as [NSString](../../foundation/nsstring.md)objects. The `fullfsync` and `synchronous` pragmas control the tradeoff between write performance (write to disk speed and cache utilization) and durability (data loss/corruption sensitivity to power interruption). For more information on pragma settings, see [http://sqlite.org/pragma.html](http://sqlite.org/pragma.html).

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
- [setOption:forKey:](setoption%28__forkey_%29.md): Sets an option on the store.

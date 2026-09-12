> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/sqlitepragmas](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/sqlitepragmas)

# sqlitePragmas (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The SQLite pragmas set for the associated persistent store. (read-only)

## Declaration

```swift
var sqlitePragmas: [String : NSObject] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains all of the pragmas set on the associated persistent store. This property is only relevant when the [type](type.md) is set to [NSSQLiteStoreType](../nssqlitestoretype.md).

## See Also

### Accessing the Configuration Options

- [options](options.md): A dictionary representation of the options set on the associated persistent store.

# sqlitePragmas (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The SQLite pragmas set for the associated persistent store. (read-only)

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,NSObject *> * sqlitePragmas;
```

<a id="Discussion"></a>

## Discussion

This property contains all of the pragmas set on the associated persistent store. This property is only relevant when the [type](type.md) is set to [NSSQLiteStoreType](../nssqlitestoretype.md).

## See Also

### Accessing the Configuration Options

- [options](options.md): A dictionary representation of the options set on the associated persistent store.

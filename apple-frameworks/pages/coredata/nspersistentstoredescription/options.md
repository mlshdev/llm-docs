> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/options](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/options)

# options (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A dictionary representation of the options set on the associated persistent store.

## Declaration

```swift
var options: [String : NSObject] { get }
```

<a id="Discussion"></a>

## Discussion

A dictionary containing key-value pairs that specify numerous settings for the persistent store. For key definitions, see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md).

## See Also

### Accessing the Configuration Options

- [sqlitePragmas](sqlitepragmas.md): The SQLite pragmas set for the associated persistent store. (read-only)

# options (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A dictionary representation of the options set on the associated persistent store.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,NSObject *> * options;
```

<a id="Discussion"></a>

## Discussion

A dictionary containing key-value pairs that specify numerous settings for the persistent store. For key definitions, see [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md).

## See Also

### Accessing the Configuration Options

- [sqlitePragmas](sqlitepragmas.md): The SQLite pragmas set for the associated persistent store. (read-only)

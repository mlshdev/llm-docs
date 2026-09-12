> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergeconflict/oldversionnumber](https://developer.apple.com/documentation/coredata/nsmergeconflict/oldversionnumber)

# oldVersionNumber (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The old version number for the change.

## Declaration

```swift
var oldVersionNumber: Int { get }
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](newversionnumber.md): The new version number for the change.

# oldVersionNumber (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The old version number for the change.

## Declaration

```objectivec
@property (readonly) NSUInteger oldVersionNumber;
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](newversionnumber.md): The new version number for the change.

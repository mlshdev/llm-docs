> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergeconflict/cachedsnapshot](https://developer.apple.com/documentation/coredata/nsmergeconflict/cachedsnapshot)

# cachedSnapshot (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the values of the source object held in the persistent store coordinator layer.

## Declaration

```swift
var cachedSnapshot: [String : Any]? { get }
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](newversionnumber.md): The new version number for the change.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

# cachedSnapshot (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the values of the source object held in the persistent store coordinator layer.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSDictionary<NSString *,id> * cachedSnapshot;
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [newVersionNumber](newversionnumber.md): The new version number for the change.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

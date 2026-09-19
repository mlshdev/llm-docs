> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmergeconflict/persistedsnapshot

# persistedSnapshot (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the values of the source object held in the persistent store.

## Declaration

```swift
var persistedSnapshot: [String : Any]? { get }
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [newVersionNumber](newversionnumber.md): The new version number for the change.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

# persistedSnapshot (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the values of the source object held in the persistent store.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSDictionary<NSString *,id> * persistedSnapshot;
```

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [newVersionNumber](newversionnumber.md): The new version number for the change.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

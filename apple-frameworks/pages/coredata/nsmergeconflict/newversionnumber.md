> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergeconflict/newversionnumber](https://developer.apple.com/documentation/coredata/nsmergeconflict/newversionnumber)

# newVersionNumber (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The new version number for the change.

## Declaration

```swift
var newVersionNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

A new version number of 0 means the object was deleted and the corresponding snapshot is `nil`.

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

# newVersionNumber (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The new version number for the change.

## Declaration

```objectivec
@property (readonly) NSUInteger newVersionNumber;
```

<a id="Discussion"></a>

## Discussion

A new version number of 0 means the object was deleted and the corresponding snapshot is `nil`.

## See Also

### Accessing Merge Conflict Details

- [sourceObject](sourceobject.md): The source object for the conflict.
- [objectSnapshot](objectsnapshot.md): A dictionary containing the values of the source object.
- [cachedSnapshot](cachedsnapshot.md): A dictionary containing the values of the source object held in the persistent store coordinator layer.
- [persistedSnapshot](persistedsnapshot.md): A dictionary containing the values of the source object held in the persistent store.
- [oldVersionNumber](oldversionnumber.md): The old version number for the change.

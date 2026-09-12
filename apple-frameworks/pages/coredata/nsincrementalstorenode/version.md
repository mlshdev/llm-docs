> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstorenode/version](https://developer.apple.com/documentation/coredata/nsincrementalstorenode/version)

# version (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version of data in the receiver.

## Declaration

```swift
var version: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

The version number is used by the persistent store coordinator to detect and handle merge conflicts. The version number should be stored with the record. The version number should (implicitly) start at zero (where zero indicates an unsaved object in memory) and be incremented by exactly one every time you save. In addition, you increment the version number when you or the Core Data framework have marked the associated managed object for optimistic locking.

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [update(withValues:version:)](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [value(for:)](value%28for_%29.md): Returns the value for the given property.

# version (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version of data in the receiver.

## Declaration

```objectivec
@property (nonatomic, readonly) uint64_t version;
```

<a id="Discussion"></a>

## Discussion

The version number is used by the persistent store coordinator to detect and handle merge conflicts. The version number should be stored with the record. The version number should (implicitly) start at zero (where zero indicates an unsaved object in memory) and be incremented by exactly one every time you save. In addition, you increment the version number when you or the Core Data framework have marked the associated managed object for optimistic locking.

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [updateWithValues:version:](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [valueForPropertyDescription:](value%28for_%29.md): Returns the value for the given property.

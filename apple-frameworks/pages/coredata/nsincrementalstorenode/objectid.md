> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstorenode/objectid](https://developer.apple.com/documentation/coredata/nsincrementalstorenode/objectid)

# objectID (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object ID that identifies the data stored by the receiver.

## Declaration

```swift
var objectID: NSManagedObjectID { get }
```

## See Also

### Managing Node Data

- [update(withValues:version:)](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [value(for:)](value%28for_%29.md): Returns the value for the given property.
- [version](version.md): The version of data in the receiver.

# objectID (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object ID that identifies the data stored by the receiver.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSManagedObjectID * objectID;
```

## See Also

### Managing Node Data

- [updateWithValues:version:](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [valueForPropertyDescription:](value%28for_%29.md): Returns the value for the given property.
- [version](version.md): The version of data in the receiver.

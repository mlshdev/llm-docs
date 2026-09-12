> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/objectid](https://developer.apple.com/documentation/coredata/nsmanagedobject/objectid)

# objectID (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object ID of the managed object.

## Declaration

```swift
var objectID: NSManagedObjectID { get }
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)
- [Creating a Core Data Model for CloudKit](../creating-a-core-data-model-for-cloudkit.md)

<a id="Discussion"></a>

## Discussion

If the receiver is a fault, accessing this property does not cause it to fire.

> **Important**

>  If the receiver has not yet been saved, the object ID is a temporary value that will change when the object is saved.

## See Also

### Related Documentation

- [uriRepresentation()](../nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

### Getting a Managed Object’s Identity

- [entity](entity-swift.property.md): The entity description of the managed object.
- [entity()](entity%28%29.md): Returns the entity description that is associated with this subclass.

# objectID (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object ID of the managed object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSManagedObjectID * objectID;
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)
- [Creating a Core Data Model for CloudKit](../creating-a-core-data-model-for-cloudkit.md)

<a id="Discussion"></a>

## Discussion

If the receiver is a fault, accessing this property does not cause it to fire.

> **Important**

>  If the receiver has not yet been saved, the object ID is a temporary value that will change when the object is saved.

## See Also

### Related Documentation

- [URIRepresentation](../nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

### Getting a Managed Object’s Identity

- [entity](entity-swift.property.md): The entity description of the managed object.
- [entity](entity%28%29.md): Returns the entity description that is associated with this subclass.

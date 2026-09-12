> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/entity()](https://developer.apple.com/documentation/coredata/nsmanagedobject/entity())

# entity() (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the entity description that is associated with this subclass.

## Declaration

```swift
class func entity() -> NSEntityDescription
```

<a id="Discussion"></a>

## Discussion

This method is only legal to call on subclasses of `NSManagedObject` that represent a single entity in the model.

## See Also

### Getting a Managed Object’s Identity

- [entity](entity-swift.property.md): The entity description of the managed object.
- [objectID](objectid.md): The object ID of the managed object.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the entity description that is associated with this subclass.

## Declaration

```objectivec
+ (NSEntityDescription *) entity;
```

<a id="Discussion"></a>

## Discussion

This method is only legal to call on subclasses of `NSManagedObject` that represent a single entity in the model.

## See Also

### Getting a Managed Object’s Identity

- [entity](entity-swift.property.md): The entity description of the managed object.
- [objectID](objectid.md): The object ID of the managed object.

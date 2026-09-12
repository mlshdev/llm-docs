> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/entity-swift.property](https://developer.apple.com/documentation/coredata/nsmanagedobject/entity-swift.property)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description of the managed object.

## Declaration

```swift
var entity: NSEntityDescription { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting a Managed Object’s Identity

- [objectID](objectid.md): The object ID of the managed object.
- [entity()](entity%28%29.md): Returns the entity description that is associated with this subclass.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description of the managed object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSEntityDescription * entity;
```

<a id="Discussion"></a>

## Discussion

If the receiver is a fault, accessing this property does not cause it to fire.

## See Also

### Getting a Managed Object’s Identity

- [objectID](objectid.md): The object ID of the managed object.
- [entity](entity%28%29.md): Returns the entity description that is associated with this subclass.

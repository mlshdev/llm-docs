> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/managedobjectclassname](https://developer.apple.com/documentation/coredata/nsentitydescription/managedobjectclassname)

# managedObjectClassName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the class that represents the receiver’s entity.

## Declaration

```swift
var managedObjectClassName: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The class specified by `name` must [NSManagedObject](../nsmanagedobject.md) or a subclass of [NSManagedObject](../nsmanagedobject.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the class name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [isAbstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

# managedObjectClassName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the class that represents the receiver’s entity.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * managedObjectClassName;
```

<a id="Discussion"></a>

## Discussion

The class specified by `name` must [NSManagedObject](../nsmanagedobject.md) or a subclass of [NSManagedObject](../nsmanagedobject.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the class name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [abstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

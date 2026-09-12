> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/managedobjectmodel](https://developer.apple.com/documentation/coredata/nsentitydescription/managedobjectmodel)

# managedObjectModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object model with which the receiver is associated.

## Declaration

```swift
unowned(unsafe) var managedObjectModel: NSManagedObjectModel { get }
```

## See Also

### Related Documentation

- [setEntities(\_:forConfigurationName:)](../nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
- [entities](../nsmanagedobjectmodel/entities.md): The entities in the model.

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [isAbstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

# managedObjectModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object model with which the receiver is associated.

## Declaration

```objectivec
@property (assign, readonly) NSManagedObjectModel * managedObjectModel;
```

## See Also

### Related Documentation

- [setEntities:forConfiguration:](../nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
- [entities](../nsmanagedobjectmodel/entities.md): The entities in the model.

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [abstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

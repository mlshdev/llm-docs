> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/name](https://developer.apple.com/documentation/coredata/nsentitydescription/name)

# name (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity name of the receiver.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Getting descriptive information

- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [isAbstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

# name (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity name of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Setting the name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Getting descriptive information

- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [abstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

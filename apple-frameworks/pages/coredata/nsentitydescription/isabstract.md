> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/isabstract](https://developer.apple.com/documentation/coredata/nsentitydescription/isabstract)

# isAbstract (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver represents an abstract entity.

## Declaration

```swift
var isAbstract: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents an abstract entity, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents an abstract entity, otherwise [false](https://developer.apple.com/documentation/swift/false). An abstract entity might be Shape, with concrete sub-entities such as Rectangle, Triangle, and Circle.

<a id="Special-Considerations"></a>

### Special Considerations

Setting whether an entity is abstract raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

# abstract (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver represents an abstract entity.

## Declaration

```objectivec
@property (getter=isAbstract) BOOL abstract;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents an abstract entity, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents an abstract entity, otherwise [false](https://developer.apple.com/documentation/swift/false). An abstract entity might be Shape, with concrete sub-entities such as Rectangle, Triangle, and Circle.

<a id="Special-Considerations"></a>

### Special Considerations

Setting whether an entity is abstract raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/renamingidentifier](https://developer.apple.com/documentation/coredata/nsentitydescription/renamingidentifier)

# renamingIdentifier (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The renaming identifier for the receiver.

## Declaration

```swift
var renamingIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The renaming identifier is used to resolve naming conflicts between models. When creating a mapping model between two managed object models, a source entity and a destination entity that share the same identifier indicate that an entity mapping should be configured to migrate from the source to the destination.

If you do not set this value, the identifier will return the entity’s name.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [isAbstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

# renamingIdentifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The renaming identifier for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * renamingIdentifier;
```

<a id="Discussion"></a>

## Discussion

The renaming identifier is used to resolve naming conflicts between models. When creating a mapping model between two managed object models, a source entity and a destination entity that share the same identifier indicate that an entity mapping should be configured to migrate from the source to the destination.

If you do not set this value, the identifier will return the entity’s name.

## See Also

### Getting descriptive information

- [name](name.md): The entity name of the receiver.
- [managedObjectModel](managedobjectmodel.md): The managed object model with which the receiver is associated.
- [managedObjectClassName](managedobjectclassname.md): The name of the class that represents the receiver’s entity.
- [abstract](isabstract.md): A Boolean value that indicates whether the receiver represents an abstract entity.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
- [coreSpotlightDisplayNameExpression](corespotlightdisplaynameexpression.md): The expression that computes the CoreSpotlight display name for instances of the entity.

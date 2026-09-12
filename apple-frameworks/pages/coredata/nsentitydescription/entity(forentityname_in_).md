> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/entity(forentityname:in:)](https://developer.apple.com/documentation/coredata/nsentitydescription/entity(forentityname:in:))

# entity(forEntityName:in:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entity with the specified name from the managed object model associated with the specified managed object context’s persistent store coordinator.

## Declaration

```swift
class func entity(forEntityName entityName: String, in context: NSManagedObjectContext) -> NSEntityDescription?
```

## Parameters

- `entityName`: The name of an entity.
- `context`: The managed object context to use. Must not be `nil`.

<a id="return-value"></a>

## Return Value

The entity with the specified name from the managed object model associated with `context`’s persistent store coordinator.

<a id="Discussion"></a>

## Discussion

Raises [internalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) if `context` is `nil`.

This method is functionally equivalent to the following code example.

```objc
NSManagedObjectModel *managedObjectModel = [[context persistentStoreCoordinator] managedObjectModel];
NSEntityDescription *entity = [[managedObjectModel entitiesByName] objectForKey:entityName];
return entity;
```

## See Also

### Related Documentation

- [entitiesByName](../nsmanagedobjectmodel/entitiesbyname.md): The entities of the model, keyed by name.

# entityForName:inManagedObjectContext: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entity with the specified name from the managed object model associated with the specified managed object context’s persistent store coordinator.

## Declaration

```objectivec
+ (NSEntityDescription *) entityForName:(NSString *) entityName inManagedObjectContext:(NSManagedObjectContext *) context;
```

## Parameters

- `entityName`: The name of an entity.
- `context`: The managed object context to use. Must not be `nil`.

<a id="return-value"></a>

## Return Value

The entity with the specified name from the managed object model associated with `context`’s persistent store coordinator.

<a id="Discussion"></a>

## Discussion

Raises [NSInternalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) if `context` is `nil`.

This method is functionally equivalent to the following code example.

```objc
NSManagedObjectModel *managedObjectModel = [[context persistentStoreCoordinator] managedObjectModel];
NSEntityDescription *entity = [[managedObjectModel entitiesByName] objectForKey:entityName];
return entity;
```

## See Also

### Related Documentation

- [entitiesByName](../nsmanagedobjectmodel/entitiesbyname.md): The entities of the model, keyed by name.

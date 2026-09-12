> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/object(with:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/object(with:))

# object(with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns either an existing object from the context or a fault that represents that object.

## Declaration

```swift
func object(with objectID: NSManagedObjectID) -> NSManagedObject
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).

<a id="return-value"></a>

## Return Value

The identified object, if its known to the context; otherwise, a fault with its [objectID](../nsmanagedobject/objectid.md) property set to `objectID`.

<a id="Discussion"></a>

## Discussion

If the context doesn’t recognize the specified object, this method returns a *fault* — a placeholder object that doesn’t load its properties until your code accesses them. The context then fetches the corresponding values from the persistent store and uses those values to turn the fault into a fully realized object.

When this method returns a fault, Core Data makes no attempts to verify the existence of the underlying object in the persistent store. If the object doesn’t exist when the context tries to the fetch the object’s values, the framework throws an exception.

## See Also

### Registering and fetching objects

- [fetch(\_:)](fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [registeredObject(for:)](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [existingObject(with:)](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [count(for:)](count%28for_%29-3r91z.md): Returns a count of the objects the specified request fetches when it executes.
- [execute(\_:)](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects()](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

# objectWithID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns either an existing object from the context or a fault that represents that object.

## Declaration

```objectivec
- (NSManagedObject *) objectWithID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).

<a id="return-value"></a>

## Return Value

The identified object, if its known to the context; otherwise, a fault with its [objectID](../nsmanagedobject/objectid.md) property set to `objectID`.

<a id="Discussion"></a>

## Discussion

If the context doesn’t recognize the specified object, this method returns a *fault* — a placeholder object that doesn’t load its properties until your code accesses them. The context then fetches the corresponding values from the persistent store and uses those values to turn the fault into a fully realized object.

When this method returns a fault, Core Data makes no attempts to verify the existence of the underlying object in the persistent store. If the object doesn’t exist when the context tries to the fetch the object’s values, the framework throws an exception.

## See Also

### Registering and fetching objects

- [executeFetchRequest:error:](executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [countForFetchRequest:error:](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [objectRegisteredForID:](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [existingObjectWithID:error:](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [executeRequest:error:](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

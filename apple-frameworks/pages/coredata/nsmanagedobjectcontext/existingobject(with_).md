> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/existingobject(with:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/existingobject(with:))

# existingObject(with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an existing object from either the context or the persistent store.

## Declaration

```swift
func existingObject(with objectID: NSManagedObjectID) throws -> NSManagedObject
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).

<a id="return-value"></a>

## Return Value

The identified object from either the context or the persistent store.

<a id="Discussion"></a>

## Discussion

If the context recognizes the specified object, the method returns that object. Otherwise, the context fetches and returns a fully realized object from the persistent store; unlike [object(with:)](object%28with_%29.md), this method never returns a fault. If the object doesn’t exist in both the context and the persistent store, the method throws an error.

## See Also

### Registering and fetching objects

- [fetch(\_:)](fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [registeredObject(for:)](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [object(with:)](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [count(for:)](count%28for_%29-3r91z.md): Returns a count of the objects the specified request fetches when it executes.
- [execute(\_:)](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects()](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

# existingObjectWithID:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an existing object from either the context or the persistent store.

## Declaration

```objectivec
- (NSManagedObject *) existingObjectWithID:(NSManagedObjectID *) objectID error:(NSError **) error;
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).
- `error`: On input, a pointer to a variable of type [NSError](../../foundation/nserror.md). On output, an error object that describes any issues that occur, or `nil` if the context successfully retrieves the object.

<a id="return-value"></a>

## Return Value

The identified object from either the context or the persistent store. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If the context recognizes the specified object, the method returns that object. Otherwise, the context fetches and returns a fully realized object from the persistent store; unlike [objectWithID:](object%28with_%29.md), this method never returns a fault. If the object doesn’t exist in both the context and the persistent store, the method throws an error.

## See Also

### Registering and fetching objects

- [executeFetchRequest:error:](executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [countForFetchRequest:error:](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [objectRegisteredForID:](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [objectWithID:](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [executeRequest:error:](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

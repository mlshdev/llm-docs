> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/registeredobject(for:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/registeredobject(for:))

# registeredObject(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an object that exists in the context.

## Declaration

```swift
func registeredObject(for objectID: NSManagedObjectID) -> NSManagedObject?
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).

<a id="return-value"></a>

## Return Value

The identified object, if it’s known to the context; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to retrieve an object from the context’s [registeredObjects](registeredobjects.md) property. A `nil` return value means the context doesn’t recognize the specified object; the object might still exist in the persistent store. If you need to query both the context and the store, use [existingObject(with:)](existingobject%28with_%29.md) instead.

## See Also

### Registering and fetching objects

- [fetch(\_:)](fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [object(with:)](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObject(with:)](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [count(for:)](count%28for_%29-3r91z.md): Returns a count of the objects the specified request fetches when it executes.
- [execute(\_:)](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects()](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

# objectRegisteredForID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an object that exists in the context.

## Declaration

```objectivec
- (NSManagedObject *) objectRegisteredForID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: The identifier of the object to retrieve. For more information, see [NSManagedObjectID](../nsmanagedobjectid.md).

<a id="return-value"></a>

## Return Value

The identified object, if it’s known to the context; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to retrieve an object from the context’s [registeredObjects](registeredobjects.md) property. A `nil` return value means the context doesn’t recognize the specified object; the object might still exist in the persistent store. If you need to query both the context and the store, use [existingObjectWithID:error:](existingobject%28with_%29.md) instead.

## See Also

### Registering and fetching objects

- [executeFetchRequest:error:](executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [countForFetchRequest:error:](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [objectWithID:](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObjectWithID:error:](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [executeRequest:error:](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects](refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

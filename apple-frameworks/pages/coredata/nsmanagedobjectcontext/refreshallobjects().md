> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/refreshallobjects()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/refreshallobjects())

# refreshAllObjects() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Refreshes all of the registered managed objects in the context.

## Declaration

```swift
func refreshAllObjects()
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

## See Also

### Registering and fetching objects

- [fetch(\_:)](fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [registeredObject(for:)](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [object(with:)](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObject(with:)](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [count(for:)](count%28for_%29-3r91z.md): Returns a count of the objects the specified request fetches when it executes.
- [execute(\_:)](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

# refreshAllObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Refreshes all of the registered managed objects in the context.

## Declaration

```objectivec
- (void) refreshAllObjects;
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

## See Also

### Registering and fetching objects

- [executeFetchRequest:error:](executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [countForFetchRequest:error:](count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [objectRegisteredForID:](registeredobject%28for_%29.md): Returns an object that exists in the context.
- [objectWithID:](object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObjectWithID:error:](existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.
- [executeRequest:error:](execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [retainsRegisteredObjects](retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.
